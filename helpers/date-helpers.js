export function dateFormatter(date) {
  const jsDate = new Date(date);
  const day = jsDate.getDate();
  
  const monthNumber = jsDate.getMonth();
  const month = monthMappings[monthNumber];

  const year = jsDate.getFullYear();

  return `${day} ${month}, ${year}`
}

const monthMappings = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}