import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send("Index sayfa 2");
});

app.listen(port, ()=>{
    console.log(`Application running on port ${port}`)
});