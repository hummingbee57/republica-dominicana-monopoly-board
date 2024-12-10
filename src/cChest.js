const communityChest = [
  {
    title: "Life insurance matures. Collect $100.",
    pulled: false,

    cardAction(player) {
      player.money += 100;
    }
  },
  {
    title: "Xmas fund matures. Collect $100.",
    pulled: false,

    cardAction(player) {
      player.money += 100;
    }
  },
  {
    title: "Advance to GO!",
    pulled: false,

    cardAction(player) {
      player.currentSpace = 1;
      theBoard[player.currentSpace].spaceAction(player);
    }
  },
  {
    title:
      "Grand Opera opening. Collect $50 from every player for opening night seats."
  }
];
