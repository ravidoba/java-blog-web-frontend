import React from 'react';
import './SpringBoot.css';
import { Link } from 'react-router-dom';

const SpringBoot: React.FC = () => {
  return (
    <div className="java-container">
      <Link to="/create-project"><button className="button">Create Project</button></Link>
      <Link to="/database-config"><button className="button">Database Connection</button></Link>
      <Link to="/global-exception"><button className="button">Global Exception</button></Link>
      <Link to="/field-validation"><button className="button">Field Validation</button></Link>
      <Link to="/advance-topics"><button className="button">Advance Topics</button></Link>
      <Link to="/annotations"><button className="button">Annotations</button></Link>
      <Link to="/version-2"><button className="button">Version 2</button></Link>
      <Link to="/version-3"><button className="button">Version 3</button></Link>
    </div>
  );
};

export default SpringBoot;
