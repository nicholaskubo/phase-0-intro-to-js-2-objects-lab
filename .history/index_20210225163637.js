let employee = {
    name: "Sam",
    streetAddress: "123 Candylane"
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}
newEmployee =  updateEmployeeWithKeyAndValue (employee, "streetAddress", "11 Broadway");

console.log(newEmployee) 

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}
employee = destructivelyUpdateEmployeeWithKeyAndValue (employee, "streetAddress", "12 Broadyway")

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee2 = {...employee}
    newEmployee2[key] = undefined;
    return newEmployee2
}

newEmployee2 = deleteFromEmployeeByKey (employee, "name")


console.log(newEmployee2);