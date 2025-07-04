// const cards = require("../../data/tarotDeck");

// exports.handler = async function () {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ cards }),
//   };
// };

const cards = require("../../data/tarotDeck");

// exports.handler = async (event, context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ cards }), // <------- wrap in object
//   };
// };

export async function handler(event, context) {
  // Your existing logic to fetch or return card data

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Or use a specific domain
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({
      cards
    }),
  };
}
