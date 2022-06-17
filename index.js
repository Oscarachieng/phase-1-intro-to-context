// Your code here

const createEmployeeRecord = (array) => {
    let [myName1, famillyName, titleBear, hourlyPay] = array;
    return {
        firstName: myName1,
        familyName: famillyName,
        title: titleBear,
        payPerHour: hourlyPay,
        timeInEvents: [],
        timeOutEvents: []
    }
}
let oscar = ["Oscar", "Achieng","Mr", 2500]
console.log(createEmployeeRecord(oscar))
/*
1. Destructure the array using [];
 let [myName1, famillyName, titleBear, hourlyPay]= array serving as the arguement.
2. assign the value to key value pairs:return {
      firstName : myName1
      familyName : famillyName
       title : titleBear
       payPerHour : hourlyPay
       timeInEvents : []
       timeOutEvents : []
}
*/
/*
 1. Declare an empty array.
 2. For each element in arrays apply createEmployeeRecord.
 3. Assign the return to a variable.
 4.  Append the variable to the empty array declared at the before.
 5. Return the array at the end of the iteration.
*/

const createEmployeeRecords = (arrayOfArrays) =>{
    const employeeRecords = [];
    for (const item of arrayOfArrays) {
       let eachItem = createEmployeeRecord(item);
       employeeRecords.push(eachItem);
    }
    return employeeRecords
}
 const array = [["Oscar", "Achieng","Mr", 2500], ["Oscar", "Achieng","Mr", 2500], ["Oscar", "Achieng","Mr", 2500]]
 console.log(createEmployeeRecords(array))

 /*
 
  1. Get the timeStamp from the argument, unixTimeStamp.
  2. let dateValue = new Date(unixTimeStamp*1000)
  3. let hourValue = dateValue.getHours()
  4. create an Object;
   const timeObject =
       {
           type : "TimeIn",
           hour :  hourValue,
           date :  dateValue
       }
  5. Insert the Object into the employeeRecord.timeInEvents object.
  6.Return the EmployeeRecord Object.
 */
  //let today = new Date()
  //console.log(today)
  //let hours = today.getHours()
  //console.log(hours)

  const createTimeInEvent = (employeeRecord, today="2014-02-28 1400") => {
      // let dateValue = new Date(unixTimeStamp*1000);
       //let hourValue = dateValue.getHours();
       const timeInEventObject = {
           type : "TimeIn",
           hour : today.getHours(),
           date : today.getDate()
       }
       employeeRecord.timeInEvents.push(timeInEventObject);
       return employeeRecord;
  }
