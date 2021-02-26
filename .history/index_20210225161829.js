const employee = {
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