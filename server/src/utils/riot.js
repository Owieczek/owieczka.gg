const riot = async (uri, region = "europe") => {
  const path = `https://${region}.api.riotgames.com/lol/${uri}`;

  const response = await fetch(path, {
    headers: {
      "X-Riot-Token": process.env.API_KEY,
    },
  });

  return await response.json();
};

module.exports = { riot };
