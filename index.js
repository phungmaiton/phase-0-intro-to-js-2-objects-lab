/* const employee = {
    name : "name",
    streetAddress : "Street Address", 
};

function updateEmployeeWithKeyAndValue(employee, key, value) { 
    return {
        ...employee,
        [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee[key]};
    delete newEmployee.key;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
 */

const employee = {
    name: "",
    streetAddress: "",
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return {
    ...employee,
    [key]: value};
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee};

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = {...employee[key]};
    delete newEmployee.key;
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => 
{delete employee[key];
return employee};

