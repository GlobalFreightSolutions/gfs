import toDate from"../toDate/index.js";export default function isFirstDayOfMonth(dirtyDate){if(1>arguments.length){throw new TypeError("1 argument required, but only "+arguments.length+" present")}return 1===toDate(dirtyDate).getDate()}