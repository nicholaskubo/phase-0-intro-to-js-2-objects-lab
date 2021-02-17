const employee = {
    name: "Nick",
    streetAddress: "123 Candylane"
};
function updateEmployeeWithKeyAndValue(employee, name, value){
    const newEmployee={...employee};
    newEmployee[name] =value;
    return newEmployee;
}
const newEmployee = updateEmployeeWithKeyAndValue(employee,"name", "Sam");

newEmployee.name;

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value){
    employee[streetAddress]= "12 Broadway"
    return employee;
}
function deleteFromEmployeeByKey(employee,name, value){
    const newEmployee2={...employee};
    newEmployee2[name] = value;
    return newEmployee2;
}
const newEmployee2 =deleteFromEmployeeByKey("name", "Sam");

newEmployee2.name;

function destructivelyDeleteFromEmployeeByKey(employee,name,value){
    employee[name] =value;
    return employee;
}