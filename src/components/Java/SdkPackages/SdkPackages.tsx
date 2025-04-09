import React from 'react';
import { Link } from 'react-router-dom';
import './SdkPackages.css';

const packages = [
  "java.lang", "java.util", "java.io", "java.net", "java.sql", 
  "java.security", "java.time", "java.math", "java.text", "java.nio", 
  "java.util.concurrent", "java.util.function", "java.util.stream", "java.lang.module", "java.net.http", 
  "java.util.regex", "java.util.prefs",  "java.lang.ref", "java.util.spi", "java.text.spi", 
  "java.time.chrono", "java.time.format", "java.time.temporal", "java.time.zone", "java.util.jar", 
  "java.util.zip", "java.beans", "java.rmi", "java.logging", "java.management", 
  "java.instrument", "java.naming", "java.desktop", "javax.swing", "javax.sql", 
  "javax.crypto", "javax.imageio", "javax.naming", "javax.print", "javax.accessibility",
  "javax.sound.sampled", "javax.tools", "jdk.httpserver", "jdk.jfr", "jdk.crypto.ec",
  "jdk.internal.vm.ci", "jdk.incubator.vector", "jdk.incubator.foreign", "jdk.incubator.concurrent"
];

const SdkPackages: React.FC = () => {
  return (
    <div className="sdk-packages-container">
      <h1>Java SDK Packages</h1>
      <ul className="package-list">
        {packages.map((pkg) => (
          <li key={pkg}>
            <Link to={`/sdk-package-details/${encodeURIComponent(pkg)}`}>{pkg}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SdkPackages;
  