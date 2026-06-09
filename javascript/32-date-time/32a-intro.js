/* Date */

const now = new Date();

console.log("Now", now) // Shows our time in ISO format (International Standard for Representing Date and Time)

console.log(typeof now)
console.log(now instanceof Date)


const meetingDateTime = new Date(2020, 14, 14, 16, 40, 15, 40);
/* new Date(year, month, day, hour, minuite, second, millisecond) */

console.log("Meeting Date", meetingDateTime)


console.log("Gets year component", now.get())