// const cards = require("../../data/tarotDeck");

// exports.handler = async function () {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ cards }),
//   };
// };


// NOTE: Below code works for development, but fails in production
// const cards = require("../../data/tarotDeck");

// exports.handler = async (event, context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ cards }), // <------- wrap in object
//   };
// };

// Trying this next: 
const cards = require("../../data/tarotDeck");

exports.handler = async (event, context) => {
  // Handle CORS preflight request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // <-- This fixes CORS error
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cards }),
  };
};

