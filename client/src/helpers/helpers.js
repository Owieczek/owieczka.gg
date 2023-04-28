export const getMainPlayer = (matchesData, playerData) => {
  return matchesData.map((matchData) =>
    matchData.info.participants.find(
      (participant) => participant.puuid === playerData.puuid
    )
  );
};

const rtf1 = new Intl.RelativeTimeFormat("en", {
  style: "long",
  numeric: "auto",
});

export const dateFormat = (timestamp) => {
  const creation = new Date(timestamp);

  const milisecondsDiff = Date.now() - creation.getTime();
  const minutesDiff = milisecondsDiff / 1000 / 60;

  const minutesAgo = Math.floor(minutesDiff);
  const hoursAgo = Math.floor(minutesDiff / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (daysAgo > 0) {
    return rtf1.format(-daysAgo, "days");
  }

  if (hoursAgo > 0) {
    return rtf1.format(-hoursAgo, "hours");
  }

  return rtf1.format(-minutesAgo, "minutes");
};

export const timeFormat = (duration) => {
  const min = Math.floor(duration / 60);
  const sec = duration % 60;
  return `${min}m ${sec}s`;
};

export const shortenPlayerName = (playerName) => {
  if (playerName.length > 7) {
    return playerName.slice(0, 7) + "...";
  } else {
    return playerName;
  }
};
