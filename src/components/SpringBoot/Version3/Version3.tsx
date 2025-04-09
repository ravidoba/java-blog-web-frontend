import React from 'react';
import './Version3.css';
import { Link } from 'react-router-dom';

const Version3: React.FC = () => {
  return (
    <div className="homeContainer">
        <Link to="/security"><button className="button">Security</button></Link>
    </div>
  );
};

export default Version3;
