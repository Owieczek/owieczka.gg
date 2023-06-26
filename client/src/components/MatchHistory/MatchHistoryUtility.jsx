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
  let result;

  if (mainPlayer.win) {
    if (matchData.info.gameDuration < 300) {
        result = "Remake";
    } else {
        result = "Victory";
    }
  } else {
    result = "Defeat";
  }

  return result;
};
