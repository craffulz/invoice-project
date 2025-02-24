import express from "express";

const app = express();

/**Middlewares to read json and forms */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


