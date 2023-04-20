function tutorOvertimeWageCalculator(timesheet, level) {
  console.log(timesheet, level);
  let hours = timesheet.split("-");
  let totalHours = 0;
  for (let i = 0; i < hours.length; i++) {
    totalHours += Number(hours[i]);
  }
  let overTimeHours = totalHours - 40;
  let pay;
  if (level === 1) {
    pay = overTimeHours * 75;
  }
  console.log(pay);
}
