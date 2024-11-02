// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Nav';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import './App.css';
import image1 from './images/image1.webp';
import image2 from './images/image2.jpg';
import image3 from './images/image4.avif';
import image4 from './images/image5.jpg';
// import image7 from './images/image6.jpg';
import image5 from './images/image7.jpg';
import image6 from './images/images3.jpg';


const initialEmployees = [
    { name: 'Johnsan Wood', position: 'Front End Developer', email: 'johnsanwood@microsoft.com', image: image1 },
    { name: 'John Doe', position: 'Team Lead', email: 'johndoe@microsoft.com', image: image2 },
    { name: 'Fakhar Naveed', position: 'UI/UX Designer', email: 'fakhar@microsoft.com', image: image3 },
    { name: 'Alex Made', position: 'Front End Developer', email: 'alexmade@microsoft.com', image: image4 },
    { name: 'Johnsan Wood', position: 'Front End Developer', email: 'johnsanwood@xyz.com', image: image5 },
    { name: 'John Doe', position: 'Team Lead', email: 'johndoe@xyz.com', image: image6 },
];

function App() {
    const [employees] = useState(initialEmployees);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const handleViewDetails = (email) => {
        alert(`Viewing details for: ${email}`);
    };

    const handleBlockUser = (name) => {
        alert(`${name} has been blocked.`);
    };

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <header>
                <Navbar />
                <h1>Employees</h1>
                <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            </header>
            <EmployeeList 
                employees={filteredEmployees} 
                onViewDetails={handleViewDetails} 
                onBlockUser={handleBlockUser} 
            />
        </div>
    );
}

export default App;
