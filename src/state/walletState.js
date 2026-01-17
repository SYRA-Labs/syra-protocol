export function createWalletState({
  balance,
  holdingDays,
  isStaked
}) {
  return {
    balance,
    holdingDays,
    isStaked
  };
}
