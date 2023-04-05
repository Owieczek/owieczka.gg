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


export const winRatio = (data) =>
    data && ((data.wins / (data.wins + data.losses)) * 100).toFixed(0);

  export const rankIMG = (data) => {
    if (!data) {
      return unranked;
    }
    switch (data.tier) {
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
