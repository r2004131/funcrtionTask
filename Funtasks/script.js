function hall_Profit({
  hoursPerDay,
  pricePerHour,
  workDaysPerWeek = 6,
  weeksPerMonth = 4,
  operatingPercent = 40,
}) {

  const weeksIncome = hoursPerDay * workDaysPerWeek * pricePerHour;
  const monthlyIncome = weeksIncome * weeksPerMonth;

  const weeklyCost = weeksIncome * (operatingPercent / 100);
  const monthlyCost = monthlyIncome * (operatingPercent / 100);

  const weeklyProfit = weeksIncome - weeklyCost;
  const monthlyProfit = monthlyIncome - monthlyCost;


  return (
    weeksIncome,
    monthlyIncome,
    weeklyCost,
    monthlyCost,
    weeklyProfit,
    monthlyProfit
  );


}


console.log(
  hall_Profit({ hoursPerDay: 0, pricePerHour: 30, operatingPercent: 40 }),
);
