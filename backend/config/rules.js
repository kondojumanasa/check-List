// config/rules.js
module.exports = [
  {
    name: "Valuation Fee Paid",
    condition: (data) => data.isValuationFeePaid === true,
  },
  {
    name: "UK Resident",
    condition: (data) => data.isUkResident === true,
  },
  {
    name: "Risk Rating Medium",
    condition: (data) => data.riskRating === "Medium",
  },
  {
    name: "LTV Below 60%",
    condition: (data) => {
      if (data.purchasePrice && data.loanRequired) {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      }
      return false;
    },
  },
];
