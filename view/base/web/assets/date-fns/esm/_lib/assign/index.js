export default function assign(target,dirtyObject){if(null==target){throw new TypeError("assign requires that input parameter not be null or undefined")}dirtyObject=dirtyObject||{};for(var property in dirtyObject){if(dirtyObject.hasOwnProperty(property)){target[property]=dirtyObject[property]}}return target}