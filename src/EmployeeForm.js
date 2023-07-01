import React, { useState } from 'react';
import './App.css';


const EmployeeForm = ({ addEmployee, updateEmployee, selectedEmployee }) => {
  const [name, setName] = useState(selectedEmployee ? selectedEmployee.name : '');
  const [position, setPosition] = useState(
    selectedEmployee ? selectedEmployee.position : ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !position) {
      return;
    }

    if (selectedEmployee) {
      updateEmployee({ ...selectedEmployee, name, position });
    } else {
      const newEmployee = {
        id: Date.now(),
        name,
        position,
      };

      addEmployee(newEmployee);
    }

    setName('');
    setPosition('');
  };

  return (
    <div className="employee-form">
      <h2>{selectedEmployee ? 'Update Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="submit-button">
          {selectedEmployee ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
