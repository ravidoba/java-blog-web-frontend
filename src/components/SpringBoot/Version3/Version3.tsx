import React from 'react';
import './Version3.css';
import { Link } from 'react-router-dom';

const Version3: React.FC = () => {
  return (
    <div className="homeContainer">
        <Link to="/springboot/version-3/security"><button className="button">Security</button></Link>
        <Link to="/springboot/version-3/swagger"><button className="button">Swagger</button></Link>
        <Link to="/springboot/version-3/microservices"><button className="button">Microservices</button></Link>
    </div>
  );
};

export default Version3;
