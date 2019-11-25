import toDate from"../toDate/index.js";export default function closestTo(dirtyDateToCompare,dirtyDatesArray){if(2>arguments.length){throw new TypeError("2 arguments required, but only "+arguments.length+" present")}var dateToCompare=toDate(dirtyDateToCompare);if(isNaN(dateToCompare)){return new Date(NaN)}var timeToCompare=dateToCompare.getTime(),datesArray;if(null==dirtyDatesArray){datesArray=[]}else if("function"===typeof dirtyDatesArray.forEach){datesArray=dirtyDatesArray}else{datesArray=Array.prototype.slice.call(dirtyDatesArray)}var result,minDistance;datesArray.forEach(function(dirtyDate){var currentDate=toDate(dirtyDate);if(isNaN(currentDate)){result=new Date(NaN);minDistance=NaN;return}var distance=Math.abs(timeToCompare-currentDate.getTime());if(null==result||distance<minDistance){result=currentDate;minDistance=distance}});return result}