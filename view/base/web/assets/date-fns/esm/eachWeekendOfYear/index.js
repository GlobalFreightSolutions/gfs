import eachWeekendOfInterval from"../eachWeekendOfInterval/index.js";import startOfYear from"../startOfYear/index.js";import endOfYear from"../endOfYear/index.js";export default function eachWeekendOfYear(dirtyDate){if(1>arguments.length){throw new TypeError("1 arguments required, but only "+arguments.length+" present")}var startDate=startOfYear(dirtyDate);if(isNaN(startDate))throw new RangeError("The passed date is invalid");var endDate=endOfYear(dirtyDate);return eachWeekendOfInterval({start:startDate,end:endDate})}