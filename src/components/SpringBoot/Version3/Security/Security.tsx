import React from 'react';
import './Security.css';
import { Link } from 'react-router-dom';

const Security: React.FC = () => {
  return (
    <div className="homeContainer">
        <Link to="/springboot/version-3/security/jwt"><button className="button">JWT</button></Link>
    </div>
  );
};

export default Security;
