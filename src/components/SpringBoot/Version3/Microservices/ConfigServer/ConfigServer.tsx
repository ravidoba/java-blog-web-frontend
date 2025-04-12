import React from 'react';
import '../ServiceRegistory/ServiceRegistory.css';

const ConfigServer: React.FC = () => {
  const copyToClipboard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      navigator.clipboard.writeText(el.textContent || '');
    }
  };

  return (
    <div className="service-registry-container">
      <h1>🛠️ Config Server Setup</h1>

      {/* Pom.xml */}
      <div className="code-block">
        <div className="code-header">
          <h2>📦 Maven - `pom.xml`</h2>
          <button onClick={() => copyToClipboard('pom-config')}>Copy</button>
        </div>
        <pre>
          <code id="pom-config">
{`<properties>
  <java.version>17</java.version>
  <spring-cloud.version>2024.0.1</spring-cloud.version>
</properties>

<dependencies>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
  </dependency>
</dependencies>

<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-dependencies</artifactId>
      <version>\${spring-cloud.version}</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>`}
          </code>
        </pre>
      </div>

      {/* Main App Class */}
      <div className="code-block">
        <div className="code-header">
          <h2>🚀 Main Application Class</h2>
          <button onClick={() => copyToClipboard('config-main')}>Copy</button>
        </div>
        <pre>
          <code id="config-main">
{`package com.ravi.microservice.config.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}`}
          </code>
        </pre>
      </div>

      {/* application.properties */}
      <div className="code-block">
        <div className="code-header">
          <h2>⚙️ `application.properties`</h2>
          <button onClick={() => copyToClipboard('config-properties')}>Copy</button>
        </div>
        <pre>
          <code id="config-properties">
{`spring.application.name=CONFIG-SERVER
server.port=9090

# Eureka Configuration
eureka.instance.prefer-ip-address=true
eureka.client.register-with-eureka=true
eureka.client.fetch-registry=true
eureka.client.service-url.defaultZone=http://localhost:8761/eureka

# Github Configuration
spring.cloud.config.server.git.uri=https://github.com/ravidoba/ravi-microservice-p-1-configuration
spring.cloud.config.server.git.clone-on-start=true

logging.level.root=ERROR`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ConfigServer;
