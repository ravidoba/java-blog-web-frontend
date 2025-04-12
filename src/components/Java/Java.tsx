import React from 'react';
import './Java.css';
import { Link } from 'react-router-dom';

const Java: React.FC = () => {
  return (
    <div className="java-container">
      <div className="button-grid">
        <Link to="/java/jvm"><button className="button">JVM</button></Link>
        <Link to="/java/versions"><button className="button">Versions</button></Link>
        <Link to="/java/sdk-packages"><button className="button">SDK Packages</button></Link>
        <Link to="/java/oops"><button className="button">OOPs Concepts</button></Link>
        <Link to="/java/collection-framework"><button className="button">Collection Framework</button></Link>
        <Link to="/java/multithreading"><button className="button">MultiThreading</button></Link>
        <Link to="/java/java-8-features"><button className="button">Java 8 Features</button></Link>
        <Link to="/java/string-methods"><button className="button">String Methods</button></Link>
        <Link to="/java/exceptions"><button className="button">Exception Handling</button></Link>
      </div>
    </div>
  );
};

export default Java;
