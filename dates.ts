// Working with dates using the luxon

import { DateTime } from "luxon";

// While creating the date using luxon, it will take the server date and time zone if not specified otherwise.
const date = DateTime.now().setZone("Asia/Kolkata"); // Setting the time zone to Asia/Kolkata, we can also change it to any valid IANA time zone

console.log("-------- Displaying the components --------");
console.log("Day:", date.day); // Outputs the current day of the month
console.log("Month:", date.month); // Outputs the current month
console.log("Year:", date.year); // Outputs the current year
console.log("Hour:", date.hour); // Outputs the current hour
console.log("Minute:", date.minute); // Outputs the current minute
console.log("Second:", date.second); // Outputs the current second
console.log("Zone Name:", date.zoneName); // Outputs the time zone name

// Formatting the date to a specific string format
console.log("-------- Formatted Date --------");
console.log("Formatted Date:", date.toFormat("dd LLL yyyy")); // Outputs date in "DD MMM YYYY" format
console.log("Formatted Time:", date.toFormat("HH:mm:ss")); // Outputs time in "HH:MM:SS" format
console.log("Full DateTime:", date.toFormat("ff")); // Outputs full date and time
console.log("ISO DateTime:", date.toISO()); // Outputs date and time in ISO format
console.log("Custom format:", date.toFormat("MMMM DD yyyy, HH:mm:ss")); // Outputs date and time in custom format

/*
Important Note: Local string is the format which is human readable and varies based on the locale settings of the environment.
If we do not specify any locale while formatting the date, it will take the default locale of the environment.
*/
console.log("Local String format", date.toLocaleString()); // Outputs date in local string format
