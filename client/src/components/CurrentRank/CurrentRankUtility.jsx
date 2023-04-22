import ironRank from "../../assets/rankIron.webp";
import bronzeRank from "../../assets/rankBronze.webp";
import silverRank from "../../assets/rankSilver.webp";
import goldRank from "../../assets/rankGold.webp";
import platinumRank from "../../assets/rankPlatinum.webp";
import diamondRank from "../../assets/rankDiamond.webp";
import masterRank from "../../assets/rankMaster.webp";
import grandmasterRank from "../../assets/rankGrandmaster.webp";
import challengerRank from "../../assets/rankChallenger.webp";
import unranked from "../../assets/unranked1.png";

export const winRatio = (rank) =>
  rank && ((rank.wins / (rank.wins + rank.losses)) * 100).toFixed(0);

const images = {
  IRON: ironRank,
  BRONZE: bronzeRank,
  SILVER: silverRank,
  GOLD: goldRank,
  PLATINUM: platinumRank,
  DIAMOND: diamondRank,
  MASTER: masterRank,
  GRANDMASTER: grandmasterRank,
  CHALLENGER: challengerRank,
};

export const rankIMG = (rank) => {
  if (!rank) {
    return unranked;
  }
  const rankTier = rank.tier.toUpperCase();
  return images[rankTier] || unranked;
};
