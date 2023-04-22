const express = require("express");
const app =  express();
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(require("./router/router"))
require("./db/db")
app.get("/",(req,res)=>{
    res.send("OK")
});

app.listen(5000,()=>{
    console.log(`listening`);
})