import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';


const EmployeeApp = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  const editEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const clearSelectedEmployee = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="employee-app">
      <h1 className="app-title">Employee Management</h1>
      <div className="employee-container">
        <EmployeeList
          employees={employees}
          deleteEmployee={deleteEmployee}
          updateEmployee={editEmployee}
        />
        <EmployeeForm
          addEmployee={addEmployee}
          updateEmployee={updateEmployee}
          selectedEmployee={selectedEmployee}
          clearSelectedEmployee={clearSelectedEmployee}
        />
      </div>
    </div>
  );
};

export default EmployeeApp;
