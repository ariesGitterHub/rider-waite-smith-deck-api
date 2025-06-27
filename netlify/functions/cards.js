// const cards = require("../../data/tarotDeck");

// exports.handler = async function () {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ cards }),
//   };
// };

// const cards = require("../../data/tarotDeck");

// exports.handler = async (event, context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(cards)
//   };
// };

// netlify/functions/card.js

const cards = require("../../data/tarotDeck");

// Allowed origins for CORS (local dev and production)
const allowedOrigins = [
  'http://localhost:5173',             // Your local Vite dev URL
  'https://your-production-site.com'   // Replace with your actual production URL
];

exports.handler = async (event, context) => {
  const origin = event.headers.origin;  // Get the origin of the incoming request

  // Check if the origin is in the allowed list
  if (allowedOrigins.includes(origin)) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': origin,  // Allow the specific origin
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',  // Allow specific methods
        'Access-Control-Allow-Headers': 'Content-Type',  // Allow specific headers
        'Access-Control-Allow-Credentials': 'true',  // If needed for cookies/sessions
      },
      body: JSON.stringify(cards),  // Send the tarot card data
    };
  }

  return {
    statusCode: 403,  // Forbidden if the origin is not allowed
    body: JSON.stringify({ error: 'Forbidden' }),
  };
};

