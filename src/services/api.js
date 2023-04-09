// const API_KEY = process.env.REACT_APP_API_KEY;

const API_KEY = "RGAPI-d5794131-8871-450b-9b4f-4f182c39a0c0";
const NodeCache = require("node-cache");
const cache = new NodeCache();

export const fetchPlayerData = async (region, input) => {
  const cacheKey = `fetchPlayerData-${region}-${input}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }
  const response = await fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${API_KEY}`
  );
  const data = await response.json();
  cache.set(cacheKey, data);
  return data;
};

const playerID = async (region, input) => {
  const cacheKey = `playerID-${region}-${input}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }
  const response = await fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${API_KEY}`
  );
  const data = await response.json();
  cache.set(cacheKey, data.id);
  return data.id;
};

export const playerRank = async (region, input) => {
  const playerId = await playerID(region, input);
  const cacheKey = `playerRank-${region}-${input}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }
  const response = await fetch(
    `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  cache.set(cacheKey, data);
  return data;
};

export const getPlayerPUUID = async (region, input) => {
  const cacheKey = `getPlayerPUUID-${region}-${input}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }
  const response = await fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${API_KEY}`
  );
  const data = await response.json();
  cache.set(cacheKey, data.puuid);
  return data.puuid;
};

const listOfMatchesID = async (region, input) => {
  const cacheKey = `listOfMatchesID-${region}-${input}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }
  const PUUID = await getPlayerPUUID(region, input);
  const response = await fetch(
    `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?api_key=${API_KEY}`
  );
  const data = await response.json();
  cache.set(cacheKey, data);
  return data;
};

export const fetchMatchesInfo = async (region, input) => {
  const cacheKey = `${region}_${input}_matches`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const matchIDs = await listOfMatchesID(region, input);
  const matchDataArray = [];

  for (let i = 0; i < matchIDs.length; i++) {
    const matchID = matchIDs[i];
    const cacheMatchKey = `${region}_${matchID}_match`;
    const cachedMatchData = cache.get(cacheMatchKey);

    if (cachedMatchData) {
      matchDataArray.push(cachedMatchData);
    } else {
      const response = await fetch(
        `https://europe.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${API_KEY}`
      );
      const data = await response.json();
      cache.set(cacheMatchKey, data);
      matchDataArray.push(data);
    }
  }

  cache.set(cacheKey, matchDataArray);
  return matchDataArray;
};
