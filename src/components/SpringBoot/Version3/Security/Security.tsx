import React from 'react';
import './Security.css';
import { Link } from 'react-router-dom';

const Security: React.FC = () => {
  return (
    <div className="homeContainer">
        <Link to="/jwt"><button className="button">JWT</button></Link>
    </div>
  );
};

export default Security;
