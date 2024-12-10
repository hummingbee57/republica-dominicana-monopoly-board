const ParcelBundler = require("parcel-bundler");

const chanceCards = [
  {
    title: "Pay poor tax of $15",
    pulled: false,
    chanceAction(player) {
      player.money -= 15;
    }
  },
  {
    title:
      "Make general repairs on all your property. For each house pay $25. For each hotel $100",
    pulled: false,

    chanceAction(player) {
      player.money -= player.houseCount * 25;
      player.money -= player.hotelCount * 100;
    }
  },
  {
    title: "Bank pays you dividend of $50",
    pulled: false,
    chanceAction(player) {
      player.money -= 50;
    }
  },
  {
    title: "Take a ride on the Reading. If you Pass GO, collect $200.",
    pulled: false,

    chanceAction(player) {
      if (player.currentSpace > 6) {
        theBoard[1].spaceAction(player);
      }
      player.currentSpace = 6;
    }
  },
  {
    title: "Take a walk on the Boardwalk. Advance token to Boardwalk.",
    pulled: false
    // player.currentSpace = 40
  },
  {
    title: "This card may be kept until needed or sold. Get out of jail free.",
    pulled: false,

    chanceAction(player) {
      player.currentSpace = 11;
    }
  },
  {
    title: "Go back three spaces",
    pulled: false,

    chanceAction(player) {
      player.currentSpace -= 3;
    }
  },
  {
    title: "Advance to GO. Collect $200",
    pulled: false,

    chanceAction(player) {
      player.currentSpace = 1;
      theBoard[1].spaceAction(player);
    }
  },
  {
    title: "Advance to St. Charles Place. If you pass go, collect $200",
    pulled: false,

    chanceAction(player) {
      if (player.currentSpace > 12) {
        theBoard[1].spaceAction(player);
      }
    }
  },
  {
    title:
      "Advance token to the nearest railroad and pay owner twice the rental to which they are otherwise entitled. If the Railroad is unowned, you may buy it from the bank.",
    pulled: false,
    railroadSpaces: [6, 16, 26, 36],

    findSpace(space) {
      if (
        player.currentSpace <
        this.railroadSpaces[this.railroadSpaces.length - 1]
      ) {
        return space > player.currentSpace;
      } else {
        return railroadSpaces[0];
      }
    },

    chanceAction(player) {
      player.currentspace = railroadSpaces.find(findSpace);
      theBoard[player.currentSpace].ownedby;
    }
  },
  {
    title: "You have been Elected Chairman of the board. Pay each player $50.",
    pulled: false,

    chanceAction(player) {
      player.money -= 50 * players.length;
      for (let i = 0; i < players.length - 1; i++) {
        if (i != playerNumber) {
          player[i].money += 50;
        }
      }
    }
  },
  {
    title: "Go Directly to jail! Do not pass GO! Do not collect $200.",
    pulled: false,

    chanceAction(player) {
      player.currentSpace = 0;
      player.inJail = true;
      player.doubles = 0;
    }
  },
  {
    title: "Advance to Illinois Ave.",
    pulled: false,

    chanceAction(player) {
      player.currentSpace = 20;
      player.whichSpace(player.currentSpace);
    }
  },
  {
    title:
      "Advance Token to nearest utility. If unowned, you may but it from bank. If owned, throw dice and pay owner a total ten times the amount thrown.",
    pulled: false,
    utilities: [13, 28],

    findSpace(space) {
      if (player.currentSpace < this.utilities[this.utilities.length - 1]) {
        return space > player.currentSpace;
      } else {
        return this.utilities[0];
      }
    },

    chanceAction(player) {
      const rentOwed = rollDice() * 10;

      player.money -= rentOwed;
      player.currentspace = railroadSpaces.find(findSpace);
      theBoard[player.currentSpace].owner += rentOwed;
    }
  },
  {
    title: "Your building loan matures. Collect $150",
    pulled: false,

    chanceAction(player) {
      player.money += 150;
    }
  }
];
