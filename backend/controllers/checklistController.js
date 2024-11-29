const rules = require("../config/rules");
const { fetchData } = require("../services/apiService");

const evaluateChecklist = async (req, res) => {
  try {
    const data = await fetchData();
    const results = rules.map((rule) => ({
      rule: rule.name,
      status: rule.condition(data) ? "Passed" : "Failed",
    }));
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { evaluateChecklist };
