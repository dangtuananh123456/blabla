import express from "express";

let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public")); //chi duoc lay anh trong thu muc public
    
    app.set("view engine", "ejs");

    app.set("views", "./src/views");
}

module.exports = configViewEngine;