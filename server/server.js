import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const PORT = process.env.PORT || 5000;

app.get("/api/popular", async (req, res) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
    );

    const data = await response.json();
    res.json(data.results);

  } catch (error) {
    console.log("TMDB ERROR:", error.message);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.q;

    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await response.json();
    res.json(data.results);

  } catch (error) {
    console.log("SEARCH ERROR:", error.message);
    res.status(500).json({ error: "Search failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});