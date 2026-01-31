// Working with Date functions using the luxon library
import { DateTime } from "luxon";

/*
3 types of date format are used : 
UTC , ISO and Local String

1. UTC : Coordinated Universal Time, is the primary time standard by which the world regulates clocks and time. It does not change with the seasons.
2. ISO : International Organization for Standardization date format (ISO 8601) is an international standard covering the exchange of date- and time-related data. It is in the format "YYYY-MM-DDTHH:mm:ss.sssZ".
3. Local String : A human-readable format that varies based on the locale settings of the environment.

UTC for common time throughout the world
ISO format for data exchange between frontend and backend systems
Local String for displaying date and time to users in a human-readable format

DB will store the date in the UTC format to maintain consistency across different time zones.
e.g. date.toUTC(); // Converts the date to UTC format

But utc cannot be stored directly, as it is instance of DateTime object, 
so we will convert it to the JsDate object before storing it in the DB.
e.g. date.toUTC().toJSDate(); // Converts the date to UTC and then to JS Date object

*/

/**
 * Converts a date string to a Date object in UTC format suitable for database storage.
 * @param date - The input date string in ISO format.
 * @returns A Date object representing the date in UTC.
 * @throws Will throw an error if the input date string is invalid.
 */
function toDBDateFormat(date: string): Date | never {
  // Convert the input date string to a DateTime object in UTC
  const utcDate = DateTime.fromISO(date, { zone: "utc" });
  if (!utcDate.isValid) {
    throw new Error("Invalid date format");
  }
  return utcDate.toJSDate();
}

/**
 * Converts a Date object to its UTC string representation.
 * @param date - The input Date object.
 * @returns A string representing the date in UTC format.
 * @throws Will throw an error if the input Date object is invalid.
 */
function toOutputFormat(date: Date): string | never {
  // Convert the JS Date object to utc string format
  const utcDate = DateTime.fromJSDate(date).toUTC();

  if (!utcDate.isValid) {
    throw new Error("Invalid date object");
  }

  return utcDate.toString();
}

console.log(toDBDateFormat("2026-01-31T11:32:12+05:00"));
console.log(toDBDateFormat("2026-01-31T11:32:12"));
console.log(toOutputFormat(new Date()));
