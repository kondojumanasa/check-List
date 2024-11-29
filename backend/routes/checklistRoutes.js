const express = require("express");
const { evaluateChecklist } = require("../controllers/checklistController");

const router = express.Router();

router.get("/checklist", evaluateChecklist);

module.exports = router;
