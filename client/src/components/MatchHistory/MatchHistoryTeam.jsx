import { Fragment } from "react";
import { shortenPlayerName } from "../../helpers/helpers";
import { generatePath } from "react-router";
import { routes } from "../../config/routes";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Text } from "../Core/Text";

const Img = styled.img`
  max-width: 20px;
`;

const Link = styled(RouterLink)`
  text-decoration: none;
`;

const Names = styled(Text)`
  font-size: 14px;
  color: #000000c7;
  margin-left: 3px;
`;

export const MatchHistoryTeam = (props) => {
  const { player, region } = props;

  return (
    <Fragment key={player.summonerName}>
      <Img
        src={`https://cdn.communitydragon.org/latest/champion/${player.championId}/square`}
      />
      <Link to={generatePath(routes.overview, { region, input: player })}>
        <Names>{shortenPlayerName(player.summonerName)}</Names>
      </Link>
    </Fragment>
  );
};
