import React from 'react';
import './App.css';

const EmployeeList = ({ employees, deleteEmployee, updateEmployee }) => {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id);
    }
  };

  return (
    <ul className="employee-list">
      {employees.map((employee) => (
        <li key={employee.id} className="employee-item">
          <span className="employee-name">{employee.name}</span>
          <span className="employee-position">{employee.position}</span>
          <div className="employee-actions">
            <button className="update-button" onClick={() => updateEmployee(employee)}>
              Update
            </button>
            <button className="delete-button" onClick={() => handleDelete(employee.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
