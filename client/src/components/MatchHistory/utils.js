export const getMainPlayer = (matchData, playerData) => {
  return matchData.info.participants.find(
    (participant) => participant.puuid === playerData.puuid
  );
};

export const queueNames = {
  420: "Ranked Solo",
  700: "Clash",
  450: "ARAM",
  400: "Normal",
  900: "ARURF",
  440: "Ranked Flex",
  1900: "URF",
};

export const determineWinStatus = (mainPlayer, matchData) => {
  if (!mainPlayer.win) {
    return "Defeat";
  }

  if (matchData.info.gameDuration < 300) {
    return "Remake";
  }

  return "Victory";
};
