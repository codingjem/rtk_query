const express = require("express");
const router = express.Router();
const messagesController = require("./controllers/messagesController");

router.post("/getMessage", messagesController.getmessages);

module.exports = router;
