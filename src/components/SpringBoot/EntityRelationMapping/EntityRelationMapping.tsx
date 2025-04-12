import React from 'react';
import './EntityRelationMapping.css';
import { Link } from 'react-router-dom';

const EntityRelationMapping: React.FC = () => {
  return (
    <div className="entity-relation-mapping-container">
      <Link to="/springboot/entity-relation-mapping/method-1"><button className="button">Method 1</button></Link>
    </div>
  );
};

export default EntityRelationMapping;
