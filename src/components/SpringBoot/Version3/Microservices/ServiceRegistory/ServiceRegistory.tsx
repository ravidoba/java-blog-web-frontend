import React from 'react';
import './ServiceRegistory.css';

const ServiceRegistory: React.FC = () => {
  const copyToClipboard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      navigator.clipboard.writeText(el.textContent || '');
    }
  };

  return (
    <div className="service-registry-container">
      <h1>🔧 Service Registry (Eureka)</h1>

      {/* Pom.xml */}
      <div className="code-block">
        <div className="code-header">
          <h2>📦 Maven - `pom.xml`</h2>
          <button onClick={() => copyToClipboard('pom-dependency')}>Copy</button>
        </div>
        <pre>
          <code id="pom-dependency">
{`<properties>
  <java.version>17</java.version>
  <spring-cloud.version>2024.0.1</spring-cloud.version>
</properties>

<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
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
          <button onClick={() => copyToClipboard('main-class')}>Copy</button>
        </div>
        <pre>
          <code id="main-class">
{`package com.ravi.microservice.serviceregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ServiceregistryApplication {

  public static void main(String[] args) {
    SpringApplication.run(ServiceregistryApplication.class, args);
  }
}`}
          </code>
        </pre>
      </div>

      {/* application.properties */}
      <div className="code-block">
        <div className="code-header">
          <h2>⚙️ `application.properties`</h2>
          <button onClick={() => copyToClipboard('app-properties')}>Copy</button>
        </div>
        <pre>
          <code id="app-properties">
{`spring.application.name=EUREKA-SERVER
server.port=8761

# Disable self-registration
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false

# Optional: display status in the dashboard
eureka.server.enable-self-preservation=false

logging.level.root=ERROR`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ServiceRegistory;
