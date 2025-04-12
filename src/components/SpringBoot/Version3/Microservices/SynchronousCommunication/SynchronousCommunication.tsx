import React from 'react';
import './SynchronousCommunication.css';
import { Link } from 'react-router-dom';

const SynchronousCommunication: React.FC = () => {
  return (
    // Service Registory, Config Server,User Service,API Gateway, Circuit Breaker, Synchronous Communication  
    <div className="java-container">
      <Link to="/microservices/synchronous-communication/feign-client"><button className="button">Feign Client</button></Link>
    </div>
  );
};

export default SynchronousCommunication;
