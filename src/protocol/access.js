export function evaluateAccess(walletState, rule) {
  if (rule.conditions.balance) {
    if (walletState.balance < rule.conditions.balance.min) return false;
  }

  if (rule.conditions.holdingDuration) {
    if (walletState.holdingDays < rule.conditions.holdingDuration.minDays) {
      return false;
    }
  }

  if (rule.conditions.staking?.required === true) {
    if (!walletState.isStaked) return false;
  }

  return rule.access.grant === true;
}
