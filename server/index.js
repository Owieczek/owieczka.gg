const path = require("path");
const express = require("express");

const { riot } = require("./src/utils/riot");

require("dotenv").config();

const app = express();

app.get("/api/match/:id", async (req, res) => {
  const data = await riot(`match/v5/matches/${req.params.id}`);

  res.send(data);
});

app.get("/api/:region/:summerName", async (req, res) => {
  const region = req.params.region;
  const summerName = req.params.summerName;

  const summoner = await riot(
    `summoner/v4/summoners/by-name/${summerName}`,
    region
  );

  const { id, puuid } = summoner;

  const [rankEntires, matchList] = await Promise.all([
    await riot(`league/v4/entries/by-summoner/${id}`, region),
    await riot(`match/v5/matches/by-puuid/${puuid}/ids?count=${15}`),
  ]);

  const result = {
    ...summoner,
    rank: rankEntires,
    matches: matchList,
  };

  res.send(result);
});

app.use(express.static("public"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`)
);
