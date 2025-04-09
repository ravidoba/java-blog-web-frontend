import React from 'react';
import './SpringBoot.css';
import { Link } from 'react-router-dom';

const SpringBoot: React.FC = () => {
  return (
    <div className="homeContainer">
        <Link to="/annotations"><button className="button">Annotations</button></Link>
        <Link to="/version-2"><button className="button">Version 2</button></Link>
        <Link to="/version-3"><button className="button">Version 3</button></Link>
    </div>
  );
};

export default SpringBoot;
