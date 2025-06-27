// const cards = require("../../data/tarotDeck");

// exports.handler = async function () {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ cards }),
//   };
// };

const cards = require("../../data/tarotDeck");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(cards)
  };
};
