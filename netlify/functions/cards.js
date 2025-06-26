const cards = require("../../data/tarotDeck");

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ cards }),
  };
};
