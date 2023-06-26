import posAdc from "../../assets/posAdc.png";
import posTop from "../../assets/posTop.png";
import posUtility from "../../assets/posUtility.png";
import posMiddle from "../../assets/posMiddle.png";
import posJungle from "../../assets/posJungle.png";
import unranked from "../../assets/unranked1.png";

const images = {
  BOTTOM: posAdc,
  TOP: posTop,
  JUNGLE: posJungle,
  MIDDLE: posMiddle,
  UTILITY: posUtility,
};

"" || "asd" -> "asd"
"" ?? "asd" -> ""


export const roleImg = (mostFrequentRole) => {
  return images[mostFrequentRole] ?? unranked;
};

const name = {
  BOTTOM: "BOTTOM",
  TOP: "TOP",
  JUNGLE: "JUNGLE",
  MIDDLE: "MIDDLE",
  UTILITY: "SUPPORT",
};

export const roleName = (mostFrequentRole) => {
  return name[mostFrequentRole] || "NO ROLE";
};

export const getMostFrequentRole = (roles) => {
  let mostFrequentRole = null;
  let maxEl = 0;

  for (let i = 0; i < roles.length; i++) {
    const el = roles.filter((role) => role === roles[i]).length;
    if (el > maxEl) {
      mostFrequentRole = roles[i];
      maxEl = el;
    }
  }

  return mostFrequentRole;
};
