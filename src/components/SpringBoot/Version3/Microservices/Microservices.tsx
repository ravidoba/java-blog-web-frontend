import React from 'react';
import './Microservices.css';
import { Link } from 'react-router-dom';

const Microservices: React.FC = () => {
  return (
    // Service Registory, Config Server,User Service,API Gateway, Circuit Breaker, Synchronous Communication  
    <div className="java-container">
      <Link to="/springboot/version-3/microservices/service-registory"><button className="button">Service Registory</button></Link>
      <Link to="/springboot/version-3/microservices/config-server"><button className="button">Config Server</button></Link>
      <Link to="/springboot/version-3/microservices/user-service"><button className="button">User Service</button></Link>
      <Link to="/springboot/version-3/microservices/api-gateway"><button className="button">API Gateway</button></Link>
      <Link to="/springboot/version-3/microservices/synchronous-communication"><button className="button">Synchronous Communication</button></Link>
      <Link to="/springboot/version-3/microservices/fault-tolerance"><button className="button">Fault Tolerance</button></Link>
    </div>
  );
};

export default Microservices;
