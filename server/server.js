const express = require("express");
const authRouter = require("./services/auth")
const productRouter = require("./services/product");
const userRouter = require("./services/user");
const imageRouter = require("./services/image");
const paymentRouter = require("./services/payments");

const app = express();



app.use(express.json())

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/image", imageRouter);
app.use("/payments", paymentRouter);


const port = process.env.PORT || 6969

app.listen(port, (err, res)=>{
    console.log("listening on port " + port);
})


