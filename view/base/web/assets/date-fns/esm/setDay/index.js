import toInteger from"../_lib/toInteger/index.js";import toDate from"../toDate/index.js";import addDays from"../addDays/index.js";export default function setDay(dirtyDate,dirtyDay,dirtyOptions){if(2>arguments.length){throw new TypeError("2 arguments required, but only "+arguments.length+" present")}var options=dirtyOptions||{},locale=options.locale,localeWeekStartsOn=locale&&locale.options&&locale.options.weekStartsOn,defaultWeekStartsOn=null==localeWeekStartsOn?0:toInteger(localeWeekStartsOn),weekStartsOn=null==options.weekStartsOn?defaultWeekStartsOn:toInteger(options.weekStartsOn);if(!(0<=weekStartsOn&&6>=weekStartsOn)){throw new RangeError("weekStartsOn must be between 0 and 6 inclusively")}var date=toDate(dirtyDate,options),day=toInteger(dirtyDay),currentDay=date.getDay(),diff=((day%7+7)%7<weekStartsOn?7:0)+day-currentDay;return addDays(date,diff,options)}