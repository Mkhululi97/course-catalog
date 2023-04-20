function tutorOvertimeWageCalculator(timesheet, level) {
  console.log(timesheet, level);
  let hours = timesheet.split("-");
  let totalHours = 0;
  for (let i = 0; i < hours.length; i++) {
    totalHours += Number(hours[i]);
  }
  let overTimePay = totalHours * 75 * 0.1;
  console.log(overTimePay);
}
