import styled from "styled-components";
import React from "react";
import { shortenPlayerName } from "../../../../helpers/helpers";
import { Img, Link, Names} from "./TeamsStyles/TeamsStyles";

export const SecondTeam = (props) => {
  const { player, region } = props;

  return (
    <React.Fragment key={player.summonerName}>
      <Img
        src={`https://cdn.communitydragon.org/latest/champion/${player.championId}/square`}
      />
      <Link to={`/${region}/${player.summonerName}`}>
        <Names>{shortenPlayerName(player.summonerName)}</Names>
      </Link>
    </React.Fragment>
  );
};
