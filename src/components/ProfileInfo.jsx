import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { fetchMatchesInfo, fetchPlayerData } from "../services/api";
import { Text } from "./Text Styles/Text";

const ProfileCont = styled.div`
  border-radius: 20px;
  border: solid 1px #00000019;
  text-align: center;
  grid-area: first;
  display: grid;
  place-items: center;
  max-width: 350px;
`;

const ProfileImg = styled.img`
  max-width: 100px;
  border-radius: 50%;
  border: solid 4px #000000c7;
  margin: 20px 30px 0px 30px;
`;

const ProfileName = styled(Text)`
  font-weight: 600;
  color: #000000c7;
  font-size: 20px;
  display: block;
  padding-left: 10px;
  padding-right: 10px;
`;

const ProfileRanking = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: #0000009a;
`;

export const ProfileInfo = () => {
  const [playerData, setPlayerData] = useState(null);
  const { region, input } = useParams();

  useEffect(() => {
    const searchPlayer = async () => {
      const data = await fetchPlayerData(region, input);
      setPlayerData(data);
    };

    searchPlayer();
  }, [region, input]);

  return (
    <ProfileCont>
      {playerData && (
        <>
          <ProfileImg
            src={
              "http://ddragon.leagueoflegends.com/cdn/13.6.1/img/profileicon/" +
              playerData.profileIconId +
              ".png"
            }
          />
          <div style={{ marginBottom: "10px" }}>
            <ProfileName>{playerData.name}</ProfileName>
            <ProfileRanking>Level: {playerData.summonerLevel}</ProfileRanking>
          </div>
        </>
      )}
    </ProfileCont>
  );
};
