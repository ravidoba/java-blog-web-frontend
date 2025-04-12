import React from 'react';
import './SpringBoot.css';
import { Link } from 'react-router-dom';

const SpringBoot: React.FC = () => {
  return (
    <div className="java-container">
      <Link to="/springboot/create-project"><button className="button">Create Project</button></Link>
      <Link to="/springboot/database-config"><button className="button">Database Connection</button></Link>
      <Link to="/springboot/entity-relation-mapping"><button className="button">Entity Relation Mapping</button></Link>
      <Link to="/springboot/global-exception"><button className="button">Global Exception</button></Link>
      <Link to="/springboot/field-validation"><button className="button">Field Validation</button></Link>
      <Link to="/springboot/advance-topics"><button className="button">Advance Topics</button></Link>
      <Link to="/springboot/annotations"><button className="button">Annotations</button></Link>
      <Link to="/springboot/version-2"><button className="button">Version 2</button></Link>
      <Link to="/springboot/version-3"><button className="button">Version 3</button></Link>
    </div>
  );
};

export default SpringBoot;
