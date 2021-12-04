alert("Please use console.");

var employeeSalaries = {};
employeeSalaries.Bill = 2000;
employeeSalaries.William = 2300;
employeeSalaries.Rowen = 2600;


if (Object.keys(employeeSalaries).length == 0) {
    console.log(0);
}
else {
    for (var key in employeeSalaries) {
        console.log("Employer " + key + " have " + employeeSalaries[key] + "$ per month.");
    }
}