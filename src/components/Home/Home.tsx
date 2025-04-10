import { Link } from 'react-router-dom';
import './Home.css';
// New-Item -ItemType Directory -Path .\src\components\SpringBoot\AdvanceTopics -Force
// Set-Location -Path .\src\components\SpringBoot\AdvanceTopics
// New-Item -ItemType File -Name AdvanceTopics.tsx
// New-Item -ItemType File -Name AdvanceTopics.css

const Home = () => {
  return (
    <div className="homeContainer"> 
      <Link to="install-tools">
        <button className="button">Install Tools</button></Link>
      <Link to="/java">
        <button className="button">Java</button>
      </Link>
      <Link to="/spring-boot">
        <button className="button">Spring Boot</button>
      </Link>
      <button className="button">SQL</button>
      <button className="button">Microservice</button>
      <Link to="github">
        <button className="button">Github</button>
      </Link>
    </div>
  );
};

export default Home;
