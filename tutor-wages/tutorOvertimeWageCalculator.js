function tutorOvertimeWageCalculator(timesheet, level) {
  console.log(timesheet, level);
  let hours = timesheet.split("-");
  let totalHours = 0;
  for (let i = 0; i < hours.length; i++) {
    totalHours += Number(hours[i]);
  }
  let overTimeHours = totalHours - 40;
  let pay = 0;
  if (level === 1) {
    pay = overTimeHours * 75 * 0.07 + overTimeHours * 75;
  }
  if (level === 2) {
    pay = overTimeHours * 90 * 0.09 + overTimeHours * 90;
  }
  if (level === 3) {
    pay = overTimeHours * 105 * 0.12 + overTimeHours * 105;
  }
  return pay;
}
