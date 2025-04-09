import { Link } from 'react-router-dom';
import './Home.css';  
// New-Item -ItemType Directory -Path .\src\components\SpringBoot -Force
// Set-Location -Path .\src\components\SpringBoot
// New-Item -ItemType File -Name SpringBoot.tsx
// New-Item -ItemType File -Name SpringBoot.css

const Home = () => {
  return (
    <div className="homeContainer">
      <Link to="/java">
        <button className="button">Java</button>
      </Link>
      <Link to="/spring-boot">
      <button className="button">Spring Boot</button>
      </Link>
      <button className="button">Spring Security</button>
      <button className="button">SQL</button>
      <button className="button">Microservice</button>
    </div>
  );
};

export default Home;
