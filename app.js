import express from "express";
import router from "#api/employees";
const app = express();


export default app;

// TODO: this file!
app.use(express.json());

app.use("/employees", router);

app.use((err,req,res,next) =>{
    console.error(err);
    res.status(500).send("error occurred")
})