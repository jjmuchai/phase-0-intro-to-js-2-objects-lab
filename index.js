// Write your solution in this file!
// Initial employee object
const employee = {
    name: "Sam",
    streetAddress: ""
};

// Non-destructive function to update employee (returns a new object)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Creates a new object with updated key-value
}

// Destructive function to update employee (modifies the original object)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly modifies the original object
    return employee;
}

// Non-destructive function to delete key from employee (returns a new object)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Clone the employee object
    delete newEmployee[key]; // Remove the key from the new object
    return newEmployee;
}

// Destructive function to delete key from employee (modifies the original object)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Removes the key directly from the original object
    return employee;
}