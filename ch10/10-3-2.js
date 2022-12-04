/**
 * 조건에 맞지 않는 경우를 먼저 검사하여 종료 또는 처리하면 된다.
 */

export function adjustedCapital(instrument) {
  if (!isEligibleForAdjustedCapital()) return 0;
  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );

  function isEligibleForAdjustedCapital(instrument) {
    instrument.capital > 0 &&
      instrument.interestRate > 0 &&
      instrument.duration > 0;
  }
}
