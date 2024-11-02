
import React from 'react';
import EmployeeCard from './EmployeeCard';
import '../styles/EmployeeList.css';

function EmployeeList({ employees, onViewDetails, onBlockUser }) {
    return (
        <div className="employee-list">
            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.email}
                    employee={employee}
                    onViewDetails={onViewDetails}
                    onBlockUser={onBlockUser}
                />
            ))}
        </div>
    );
}

export default EmployeeList;
