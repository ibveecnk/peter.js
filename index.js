// Static Imports
const Bot = require('./Bot');
const MessageHandler = require('./handlers/MessageHandler');

// Load .env into process.env
require('dotenv').config();

// Custom Class inits
const bot = new Bot();

// Initialize Handlers
const messageHandler = new MessageHandler(bot);
