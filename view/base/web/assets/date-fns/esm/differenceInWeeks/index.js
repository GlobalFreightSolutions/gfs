import differenceInDays from"../differenceInDays/index.js";export default function differenceInWeeks(dirtyDateLeft,dirtyDateRight){if(2>arguments.length){throw new TypeError("2 arguments required, but only "+arguments.length+" present")}var diff=differenceInDays(dirtyDateLeft,dirtyDateRight)/7;return 0<diff?Math.floor(diff):Math.ceil(diff)}