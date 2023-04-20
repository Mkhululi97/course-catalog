function tutorWageCalculator(timesheet, level) {
  const hours = timesheet.split("-");
  let totalHours = 0;
  if (hours.length === 5) {
    for (let i = 0; i < hours.length; i++) {
      totalHours += Number(hours[i]);
    }
    if (level === 1) {
      totalHours = totalHours * 75;
    }
    if (level === 2) {
      totalHours = totalHours * 90;
    }
    if (level === 3) {
      totalHours = totalHours * 105;
    }
  }
  return totalHours;
}
