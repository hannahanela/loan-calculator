it('should calculate monthly rate', function () {
  expect(calcMonthlyPayment(10000, 10, 4.5)).toEqual(103.63840875701705);
  expect(calcMonthlyPayment(-1, 10, 4.5)).toEqual('Please enter a valid loan amount.');
  expect(calcMonthlyPayment(1000, 3.5, 4.5)).toEqual('Please enter a valid number of years.');
  expect(calcMonthlyPayment(10000, 0, 4.5)).toEqual('Please enter a valid number of years.');
  expect(calcMonthlyPayment(10000, 10, -1)).toEqual('Please enter a valid rate.');
});