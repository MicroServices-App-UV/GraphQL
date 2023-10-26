import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema.js";
import { connectDB } from "../config/db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Env variables
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Graphql middleware
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
