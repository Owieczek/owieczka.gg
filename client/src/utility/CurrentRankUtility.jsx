import iron from "../assets/rankIron.webp";
import bronze from "../assets/rankBronze.webp";
import silver from "../assets/rankSilver.webp";
import gold from "../assets/rankGold.webp";
import platinum from "../assets/rankPlatinum.webp";
import diamond from "../assets/rankDiamond.webp";
import master from "../assets/rankMaster.webp";
import grandmaster from "../assets/rankGrandmaster.webp";
import challenger from "../assets/rankChallenger.webp";
import unranked from "../assets/unranked1.png";


export const winRatio = (rank) =>
rank && ((rank.wins / (rank.wins + rank.losses)) * 100).toFixed(0);

  export const rankIMG = (rank) => {
    if (!rank) {
      return unranked;
    }
    switch (rank.tier) {
      case "IRON":
        return iron;
      case "BRONZE":
        return bronze;
      case "SILVER":
        return silver;
      case "GOLD":
        return gold;
      case "PLATINUM":
        return platinum;
      case "DIAMOND":
        return diamond;
      case "MASTER":
        return master;
      case "GRANDMASTER":
        return grandmaster;
      case "CHALLENGER":
        return challenger;
      default:
        return unranked;
    }
  };
