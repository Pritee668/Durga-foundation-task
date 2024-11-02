
import React from 'react';
import '../styles/EmployeeCard.css';

function EmployeeCard({ employee, onViewDetails, onBlockUser }) {
    return (
        <div className="employee-card">
            <img src={employee.image} alt={employee.name} />
            <h3>{employee.name}</h3>
            <p>{employee.position}</p>
            <p>Email: {employee.email}</p> 
            <button className="button" onClick={() => onViewDetails(employee.email)}>Details</button>&nbsp;&nbsp;&nbsp;
            <button className="button" id="block" onClick={() => onBlockUser(employee.name)}>Block</button>
        </div>
    );
}

export default EmployeeCard;
