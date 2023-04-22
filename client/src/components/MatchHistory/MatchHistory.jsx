import React from "react";

import { MatchHistoryItem } from "./MatchHistoryItem/MatchHistoryItem";

export const MatchHistory = ({ playerData, matchesData, region }) => {
  return (
    <div style={{ gridArea: "fifth" }}>
      {matchesData.map((matchData) => (
        <MatchHistoryItem
          matchData={matchData}
          playerData={playerData}
          region={region}
          key={matchData.metadata.matchId}
        />
      ))}
    </div>
  );
};
