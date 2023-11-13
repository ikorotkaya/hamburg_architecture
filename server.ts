import express from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = 3001;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

pool.connect();

app.use(cors({ origin: "http://localhost:3000" }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/projects", async (req, res) => {
  try {
    console.log("Fetching data from database");
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM projects");
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
