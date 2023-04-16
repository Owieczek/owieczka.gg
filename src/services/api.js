export const getPlayerData = async (region, input) => {
  const response = await fetch(`/api/${region}/${input}`);
  const playerData = await response.json();
  return playerData;
};

export const getMatchesData = async (matchIds) => {
  const matchesData = await Promise.all(
    matchIds.map(async (matchId) => {
      const response = await fetch(`/api/match/${matchId}`);
      return response.json();
    })
  );
  return matchesData;
};
