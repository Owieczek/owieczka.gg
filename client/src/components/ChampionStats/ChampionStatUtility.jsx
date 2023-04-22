export const championNameFormatted = (championName) => {
  const nameChange = {
    MonkeyKing: "Wukong",
    FiddleSticks: "Fiddlesticks",
  };
  let updatedName = nameChange[championName] || championName;
  if (updatedName.length > 8) {
    updatedName = updatedName.slice(0, 8) + "...";
  }
  return updatedName;
};

export const averageStats = (total, gamesPlayed) => {
  return (total / gamesPlayed).toFixed(1);
};
