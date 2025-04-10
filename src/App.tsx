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
          <Route path="/jvm" element={<Jvm />} />
           <Route path="/versions" element={<Versions />} />
          <Route path="/version/:id" element={<VersionDetail />} /> 
          <Route path="/sdk-packages" element={<SdkPackages />} />
          <Route path="/sdk-package-details/:packageName" element={<PackageDetail />} />
          <Route path="/oops" element={<Oops />} />
          <Route path="/collection-framework" element={<CollectionFramework />} />
          <Route path="/java-8-features" element={<Java8Features />} />
          <Route path="/multithreading" element={<Multithreading />} />          
          <Route path="/exceptions" element={<Exceptions />} />

          {/* SpringBoot */}
          <Route path="/spring-boot" element={<SpringBoot />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/database-config" element={<DatabaseConfig />} />
          <Route path="/global-exception" element={<GlobalException />} />
          <Route path="/field-validation" element={<FieldValidation />} />
          <Route path="/advance-topics" element={<AdvanceTopics />} />
          <Route path="/annotations" element={<Annotations />} />
          <Route path="/version-2" element={<Version2 />} />
          <Route path="/version-3" element={<Version3 />} />
          <Route path="/security" element={<Security />} />
          <Route path="/jwt" element={<JWT />} />
          <Route path="/swagger" element={<Swagger />} />
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
