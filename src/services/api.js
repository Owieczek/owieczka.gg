const { RateLimiterMemory } = require("rate-limiter-flexible");

const API_KEY = "RGAPI-717bcbc8-e6f2-4b77-8b2a-0ff97e0dfc0e";
const limiter = new RateLimiterMemory({
  points: 50,
  duration: 1,
});

export const fetchPlayerData = async (region, input) => {
  await limiter.consume(1);
  const response = await fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

const playerID = async (region, input) => {
  await limiter.consume(1);
  const response = await fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${API_KEY}`
  );

  const data = await response.json();
  return data.id;
};

export const playerRank = async (region, input) => {
  await limiter.consume(1);
  const playerId = await playerID(region, input);
  const response = await fetch(
    `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getPlayerPUUID = async (region, input) => {
  await limiter.consume(1);
  const response = await fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${API_KEY}`
  );

  const data = await response.json();
  return data.puuid;
};

const listOfMatchesID = async (region, input) => {
  await limiter.consume(1);
  const PUUID = await getPlayerPUUID(region, input);
  const response = await fetch(
    `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?api_key=${API_KEY}`
  );

  const data = await response.json();
  return data;
};

export const fetchMatchesInfo = async (region, input) => {
  const matchIDs = await listOfMatchesID(region, input);
  const matchDataArray = [];

  for (let i = 0; i < matchIDs.length; i++) {
    const matchID = matchIDs[i];
    await limiter.consume(1);
    const response = await fetch(
      `https://europe.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${API_KEY}`
    );
    const data = await response.json();
    matchDataArray.push(data);
  }

  return matchDataArray;
};
