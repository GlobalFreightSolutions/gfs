import toInteger from"../_lib/toInteger/index.js";import addQuarters from"../addQuarters/index.js";export default function subQuarters(dirtyDate,dirtyAmount){if(2>arguments.length){throw new TypeError("2 arguments required, but only "+arguments.length+" present")}var amount=toInteger(dirtyAmount);return addQuarters(dirtyDate,-amount)}