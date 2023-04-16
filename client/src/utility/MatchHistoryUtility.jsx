export const dateFormat = (creation) => {
    const now = Date.now();
    const diff = now - creation;
  
    if (diff < 60 * 60 * 1000) {
      const mins = Math.floor(diff / (60 * 1000));
      return `${mins} minute${mins > 1 ? "s" : ""} ago`;
    } else if (diff < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(diff / (60 * 60 * 1000));
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };
  
  export const timeFormat = (duration) => {
    const min = Math.floor(duration / 60);
    const sec = duration % 60;
    return `${min}m ${sec}s`;
  };
  
  export const shortenPlayerName = (playerName) => {
    if (playerName.length > 7) {
      return playerName.slice(0, 7) + "...";
    } else {
      return playerName;
    }
  };
