import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Java from './components/Java/Java';
import Jvm from './components/Java/Jvm/Jvm';
import Versions from './components/Java/Versions/Versions';
import VersionDetail from './components/Java/Versions/VersionDetail/VersionDetail';
import SdkPackages from './components/Java/SdkPackages/SdkPackages';
import PackageDetail from './components/Java/SdkPackages/PackageDetail/PackageDetail';
import Oops from './components/Java/Oops/Oops';
import CollectionFramework from './components/Java/CollectionFramework/CollectionFramework';
import Java8Features from './components/Java/Java8Features/Java8Features';
import Multithreading from './components/Java/Multithreading/Multithreading';
import Exceptions from './components/Java/Exceptions/Exceptions';
import SpringBoot from './components/SpringBoot/SpringBoot';
import Annotations from './components/SpringBoot/Annotations/Annotations';
import Version2 from './components/SpringBoot/Version2/Version2';
import Version3 from './components/SpringBoot/Version3/Version3';
import Security from './components/SpringBoot/Version3/Security/Security';
import JWT from './components/SpringBoot/Version3/Security/Jwt/JWT';
import Swagger from './components/SpringBoot/Version3/Swagger/Swagger';
import InstallTools from './components/InstallTools/InstallTools';
import CreateProject from './components/SpringBoot/CreateProject/CreateProject';
import DatabaseConfig from './components/SpringBoot/DatabaseConfig/DatabaseConfig';
import GitHub from './components/Github/Github';
import GlobalException from './components/SpringBoot/GlobalException/GlobalException';
import FieldValidation from './components/SpringBoot/FieldValidation/FieldValidation';
import AdvanceTopics from './components/SpringBoot/AdvanceTopics/AdvanceTopics';
import Microservices from './components/SpringBoot/Version3/Microservices/Microservices';
import ServiceRegistory from './components/SpringBoot/Version3/Microservices/ServiceRegistory/ServiceRegistory';
import ConfigServer from './components/SpringBoot/Version3/Microservices/ConfigServer/ConfigServer';
import UserService from './components/SpringBoot/Version3/Microservices/UserService/UserService';
import ApiGateway from './components/SpringBoot/Version3/Microservices/APIGateway/APIGateway';
import SynchronousCommunication from './components/SpringBoot/Version3/Microservices/SynchronousCommunication/SynchronousCommunication';
import FeignClient from './components/SpringBoot/Version3/Microservices/SynchronousCommunication/FeignClient/FeignClient';
import FaultTolerance from './components/SpringBoot/Version3/Microservices/FaultTolerance/FaultTolerance';
import EntityRelationMapping from './components/SpringBoot/EntityRelationMapping/EntityRelationMapping';
import Method1 from './components/SpringBoot/EntityRelationMapping/Method1/Method1';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/install-tools" element={<InstallTools />} />
          {/* Java */}
          <Route path="/java" element={<Java />} />
          <Route path="/java/jvm" element={<Jvm />} />
          <Route path="/java/versions" element={<Versions />} />
          <Route path="/java/version/:id" element={<VersionDetail />} />
          <Route path="/java/sdk-packages" element={<SdkPackages />} />
          <Route path="/java/sdk-package-details/:packageName" element={<PackageDetail />} />
          <Route path="/java/oops" element={<Oops />} />
          <Route path="/java/collection-framework" element={<CollectionFramework />} />
          <Route path="/java/java-8-features" element={<Java8Features />} />
          <Route path="/java/multithreading" element={<Multithreading />} />
          <Route path="/java/exceptions" element={<Exceptions />} />

          {/* SpringBoot */}
          <Route path="/spring-boot" element={<SpringBoot />} />
          <Route path="/springboot/create-project" element={<CreateProject />} />
          <Route path="/springboot/database-config" element={<DatabaseConfig />} />    
          <Route path="/springboot/global-exception" element={<GlobalException />} />
          <Route path="/springboot/field-validation" element={<FieldValidation />} />
          <Route path="/springboot/advance-topics" element={<AdvanceTopics />} />
          <Route path="/springboot/annotations" element={<Annotations />} />
          <Route path="/springboot/version-2" element={<Version2 />} />
          {/* Entity Relation Mapping */}
          <Route path="/springboot/entity-relation-mapping" element={<EntityRelationMapping />} />
          <Route path="/springboot/entity-relation-mapping/method-1" element={<Method1 />} />
          {/* Version 3 */}
          <Route path="/springboot/version-3" element={<Version3 />} />
          <Route path="/springboot/version-3/security" element={<Security />} />
          <Route path="/springboot/version-3/security/jwt" element={<JWT />} />
          <Route path="/springboot/version-3/swagger" element={<Swagger />} />
          {/* Microservices */}
          <Route path="/springboot/version-3/microservices" element={<Microservices />} />
          <Route path="/springboot/version-3/microservices/service-registory" element={<ServiceRegistory />} />
          <Route path="/springboot/version-3/microservices/config-server" element={<ConfigServer />} />
          <Route path="/springboot/version-3/microservices/user-service" element={<UserService />} />
          <Route path="/springboot/version-3/microservices/api-gateway" element={<ApiGateway />} />
          <Route path="/springboot/version-3/microservices/fault-tolerance" element={<FaultTolerance />} />
          {/* synchronous-communication */}
          <Route path="/springboot/microservices/synchronous-communication" element={<SynchronousCommunication />} />
          <Route path="/springboot/microservices/synchronous-communication/feign-client" element={<FeignClient />} />
          {/* Github */}
          <Route path="/github" element={<GitHub />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App
