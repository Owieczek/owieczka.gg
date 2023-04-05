import React, { useEffect, useState } from "react";
import { fetchMatchesInfo, getPlayerPUUID } from "../services/api";
import { useParams } from "react-router";
import { MatchHistoryItem } from "./MatchHistoryItem";

export const MatchHistory = () => {
  const [matches, setMatches] = useState([]);
  const { region, input } = useParams();
  const [puuid, setPuuid] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMatchesInfo(region, input);
      const puuid = await getPlayerPUUID(region, input);
      setMatches(data);
      setPuuid(puuid);
      console.log(data);
    };
    fetchData();
  }, [region, input]);

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
