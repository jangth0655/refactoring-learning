/**
 * 코드를 비슷한 것 끼리 묶어두기
 * 리팩토링하기 쉬워진다.
 */

// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;

// 예제 2
function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();

  allocatedResources.push(result);
  return result;
}
