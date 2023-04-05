import React from "react";

import { MatchHistoryItem } from "./MatchHistoryItem";

export const MatchHistory = ({ matches, puuid, region }) => {
  return (
    <div style={{ gridArea: "fifth" }}>
      {matches.map((match) => (
        <MatchHistoryItem
          match={match}
          puuid={puuid}
          region={region}
          key={match.metadata.matchId}
        />
      ))}
    </div>
  );
};
