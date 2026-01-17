export const RuleSchemaV1 = {
  id: "string",
  description: "string",
  conditions: {
    balance: {
      min: "number",
      max: "number | null"
    },
    holdingDuration: {
      minDays: "number"
    },
    staking: {
      required: "boolean"
    }
  },
  access: {
    grant: "boolean"
  }
};
