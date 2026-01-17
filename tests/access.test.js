import { evaluateAccess } from "../src/protocol/access.js";

const wallet = {
  balance: 1000,
  holdingDays: 30,
  isStaked: true
};

const rule = {
  conditions: {
    balance: { min: 500 },
    holdingDuration: { minDays: 7 },
    staking: { required: true }
  },
  access: { grant: true }
};

console.assert(
  evaluateAccess(wallet, rule) === true,
  "Access should be granted"
);
