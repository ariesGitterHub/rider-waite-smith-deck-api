const cards = [
  // Major Arcana
  {
    name: "The Fool",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
  },
  {
    name: "The Magician",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
  },
  {
    name: "The High Priestess",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
  },
  {
    name: "The Empress",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
  },
  {
    name: "The Emperor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
  },
  {
    name: "The Hierophant",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
  },
  {
    name: "The Lovers",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",
  },
  {
    name: "The Chariot",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  },
  {
    name: "Strength",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  },
  {
    name: "The Hermit",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
  },
  {
    name: "Wheel of Fortune",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
  },
  {
    name: "Justice",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
  },
  {
    name: "The Hanged Man",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
  },
  {
    name: "Death",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
  },
  {
    name: "Temperance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
  },
  {
    name: "The Devil",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
  },
  {
    name: "The Tower",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  },
  {
    name: "The Star",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
  },
  {
    name: "The Moon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
  },
  {
    name: "The Sun",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
  },
  {
    name: "Judgement",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
  },
  {
    name: "The World",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
  },

  // Minor Arcana - Cups
  {
    name: "Ace of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
  },
  {
    name: "Two of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg",
  },
  {
    name: "Three of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg",
  },
  {
    name: "Four of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg",
  },
  {
    name: "Five of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg",
  },
  {
    name: "Six of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg",
  },
  {
    name: "Seven of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg",
  },
  {
    name: "Eight of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg",
  },
  {
    name: "Nine of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg",
  },
  {
    name: "Ten of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg",
  },
  {
    name: "Page of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg",
  },
  {
    name: "Knight of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg",
  },
  {
    name: "Queen of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg",
  },
  {
    name: "King of Cups",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg",
  },

  // Minor Arcana - Pentacles
  {
    name: "Ace of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg",
  },
  {
    name: "Two of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg",
  },
  {
    name: "Three of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg",
  },
  {
    name: "Four of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg",
  },
  {
    name: "Five of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg",
  },
  {
    name: "Six of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg",
  },
  {
    name: "Seven of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg",
  },
  {
    name: "Eight of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg",
  },
  {
    name: "Nine of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg",
  },
  {
    name: "Ten of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg",
  },
  {
    name: "Page of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg",
  },
  {
    name: "Knight of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg",
  },
  {
    name: "Queen of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg",
  },
  {
    name: "King of Pentacles",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg",
  },

  // Minor Arcana - Swords
  {
    name: "Ace of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
  },
  {
    name: "Two of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg",
  },
  {
    name: "Three of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg",
  },
  {
    name: "Four of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg",
  },
  {
    name: "Five of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg",
  },
  {
    name: "Six of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg",
  },
  {
    name: "Seven of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg",
  },
  {
    name: "Eight of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg",
  },
  {
    name: "Nine of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg",
  },
  {
    name: "Ten of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg",
  },
  {
    name: "Page of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg",
  },
  {
    name: "Knight of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg",
  },
  {
    name: "Queen of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg",
  },
  {
    name: "King of Swords",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg",
  },

  // Minor Arcana - Wands
  {
    name: "Ace of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
  },
  {
    name: "Two of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
  },
  {
    name: "Three of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
  },
  {
    name: "Four of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
  },
  {
    name: "Five of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
  },
  {
    name: "Six of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg",
  },
  {
    name: "Seven of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg",
  },
  {
    name: "Eight of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg",
  },
  {
    name: "Nine of Wands",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg",
  },
  {
    name: "Ten of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg",
  },
  {
    name: "Page of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg",
  },
  {
    name: "Knight of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg",
  },
  {
    name: "Queen of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg",
  },
  {
    name: "King of Wands",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg",
  },
];

module.exports = cards;
