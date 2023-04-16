import posAdc from "../assets/posAdc.png";
import posTop from "../assets/posTop.png";
import posUtility from "../assets/posUtility.png";
import posMiddle from "../assets/posMiddle.png";
import posJungle from "../assets/posJungle.png";
import unranked from "../assets/unranked1.png";

export const roleImg = (mostFrequentRole) => {
  switch (mostFrequentRole) {
    case "BOTTOM":
      return posAdc;
    case "TOP":
      return posTop;
    case "JUNGLE":
      return posJungle;
    case "MIDDLE":
      return posMiddle;
    case "UTILITY":
      return posUtility;
    default:
      return unranked;
  }
};

export const roleName = (mostFrequentRole) => {
  switch (mostFrequentRole) {
    case "BOTTOM":
      return "ADC";
    case "TOP":
      return "TOP";
    case "JUNGLE":
      return "JUNGLE";
    case "MIDDLE":
      return "MIDDLE";
    case "UTILITY":
      return "SUPPORT";
    default:
      return "NO ROLE";
  }
};
