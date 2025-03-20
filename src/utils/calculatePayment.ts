const calculateResult = (
  amount: number,
  months: number,
  paymentPeriod: number
): number => {
  if (months === 0) {
    throw new Error("Cannot divide by zero");
  }
  return (amount / months) * paymentPeriod;
};

export default calculateResult;
