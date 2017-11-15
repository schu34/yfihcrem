/**

   ___ ___    _   _  _ ___     _   ___
  / __| _ \  /_\ | \| | __|   /_\ |_ _|
 | (__|   / / _ \| .` | _| _ / _ \ | |
  \___|_|_\/_/ \_\_|\_|___(_)_/ \_\___|



* DataBase / IO


*/

'use strict';



//----------------------------------------------------------------------------------------------------------
//Libraries
//----------------------------------------------------------------------------------------------------------

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const dbconf = require('./.config/db.js');
const Logger = require('logplease');
const Q = require("q");



//----------------------------------------------------------------------------------------------------------
//Logger config
//----------------------------------------------------------------------------------------------------------


const logger = Logger.create('utility:db', {

	useColors: true,
	showTimestamp: false,
	showLevel: true,
	filename: null,
	appendFile: true

});


//----------------------------------------------------------------------------------------------------------
//General
//----------------------------------------------------------------------------------------------------------

logger.debug("Launched")


mongoose.connect(dbconf.url);

function dbRef(data) {
	return {
		'_id': new ObjectID(data._id)
	}

}

function createRefForSearch(ref, data) {

	return {
		[ref]: dbRef(data)
	}
}

function connect(connectedTo, connectCB) {

	MongoClient.connect(dbconf.url, function (err, database) {

		if (err) logger.error(err)

		connectedTo(database, function (res) {
			connectCB(res)
		})

	})
}





function insert(collection, data, callback) {
	let deferred = Q.defer();

	connect(function (db, res) {


		db.collection(collection).insert(data, (err, result) => {
			if (err) {
				db.close()
				logger.error(err)
				// return { 'error': 'An error has occurred' };
				deferred.reject(err);
			} else {
				db.close()
				res(result.ops[0]);

			}
		});

	}, function (dbSuccess) {

		if (!callback) {
			deferred.resolve(dbSuccess)
			return;
		}
		callback(dbSuccess)



	})

	if (!callback) {
		console.log("returning deferred");
		return deferred.promise;
	}


}




function findOne(collection, data, callback) {
	let deferred = Q.defer();

	connect(function (db, res) {


		db.collection(collection).findOne(dbRef(data), (err, result) => {
			if (err) {
				db.close()
				if (!callback) {
					deferred.reject();
					return;
				}
				res({
					'error': 'An error has occurred'
				});
			} else {
				db.close()

				res(result);

			}
		});

	}, function (dbSuccess) {

		if (!callback) {
			deferred.resolve(dbSuccess);
			return;
		}
		callback(dbSuccess)

	})

	if (!callback) {
		return deferred.promise
	}


}



function findbyRef(collection, data, callback) {

	let deferred = Q.defer();

	connect(function (db, res) {


		db.collection(collection).find(data).toArray(function (err, result) {

			if (err) {
				db.close()
				if (!callback) {
					deferred.reject(err);
				}
				res({
					'error': 'An error has occurred'
				});
			} else {
				db.close()
				logger.debug("Found " + collection + " records");
				res(result);

			}

		});


	}, function (dbSuccess) {
		if (!callback) {
			deferred.resolve(dbSuccess);
		}
		callback(dbSuccess)

	})



}




function findMany(collection, data, callback) {
	let deferred = Q.defer();

	connect(function (db, res) {


		db.collection(collection).find(data).toArray(function (err, result) {

			if (err) {
				db.close()
				if (!callback) {
					deferred.reject(err);
					return;
				}
				res({
					'error': 'An error has occurred'
				});
			} else {
				db.close()
				logger.debug("Found " + collection + " records: ", result);
				res(result);

			}

		});


	}, function (dbSuccess) {

		if (!callback) {
			deferred.resolve(dbSuccess);
			return;
		}

		callback(dbSuccess)

	})

	if (!callback) {
		return deferred.promise
	}
}





async function update(collection, data, callback) {
	
		let deferred = Q.defer();
	
		connect(function (db, res) {
	
	
			db.collection(collection).update(dbRef(data), data, (err, result) => {
				if (err) {
					db.close()
					logger.error(err);
					if (!callback) {
						deferred.reject(err);
						return;
					}
					res({
						'error': 'An error has occurred'
					});
				} else {
					db.close()
					logger.debug("Updated a " + collection + " record");
					res(result);
	
				}
			});
	
		}, function (dbSuccess) {
			if (!callback) {
				deferred.resolve(dbSuccess);
				return;
			}
	
			callback(dbSuccess)
	
		})
		
		if(!callback){
			return deferred.promise
		}
	
	}




function remove(collection, data, callback) {

	let deferred = Q.defer()

	connect(function (db, res) {

		db.collection(collection).remove(dbRef(data), (err, result) => {
			if (err) {
				db.close()

				if(!callback){
					deferred.reject(err);
					return;
				}
				res({
					'error': 'An error has occurred'
				});
			} else {
				db.close()
				logger.debug("Removed a", collection, "record");
				res(result.result);

			}
		});

	}, function (dbSuccess) {
		if(!callback){
			deferred.resolve(dbSuccess);
			return;
		}

		callback(dbSuccess);
	})

	if(!callback){
		return deferred.promise
	}


}


/**
 * Find Records Near given location
 * @param  {String}   collection MongoDB collection
 * @param  {Object}   location   Location Object
 * @param  {Number}   maxDist    Farthest Location To Included
 * @param  {Function} callback   callback called with response from db
 */

function findNear(collection, location, maxDist, callback) {

	let deferred = Q.defer()
	connect((db, res) => {
		db.collection(collection).find({
			location: {
				$near: {
					$geometry: {
						type: "Point",
						coordinates: location
					},
					$maxDistance: maxDist
				}
			}
		}).toArray((err, result) => {
			if (err) {
				db.close();

				if(!callback){
					deferred.resolve();
					return;
				}
				logger.error(err);
			} else {
				db.close();
				res(result);
			}
		})
	}, (dbSuccess) => {
		if(!callback){
			deferred.resolve(dbSuccess);
		}
		callback(dbSuccess)
	})

	if(!callback){
		return deferred.promisen
	}
}





module.exports = {
	insert: insert,
	find: findOne,
	update: update,
	remove: remove,
	findMany: findMany,
	findbyRef: findbyRef,
	createRefForSearch: createRefForSearch,
	dbRef: dbRef,
	findNear: findNear

};