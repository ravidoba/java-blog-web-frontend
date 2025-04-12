import React from 'react';
import './ApiGateway.css';

const ApiGateway: React.FC = () => {
  const copyToClipboard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      navigator.clipboard.writeText(el.textContent || '');
    }
  };

  return (
    <div className="service-registry-container">
      <h1>🧭 API Gateway</h1>

      {/* Pom.xml */}
      <div className="code-block">
        <div className="code-header">
          <h2>📦 Maven - `pom.xml`</h2>
          <button onClick={() => copyToClipboard('pom-gateway')}>Copy</button>
        </div>
        <pre>
          <code id="pom-gateway">
{`<properties>
  <java.version>17</java.version>
  <spring-cloud.version>2024.0.1</spring-cloud.version>
</properties>

<dependencies>
  <!-- MICROSERVICE -->
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
  </dependency>

  <!-- API GATEWAY -->
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway-mvc</artifactId>
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
  </dependencies>`}
          </code>
        </pre>
      </div>

      {/* Main Application File */}
      <div className="code-block">
        <div className="code-header">
          <h2>🚀 Main Application Class</h2>
          <button onClick={() => copyToClipboard('gateway-main')}>Copy</button>
        </div>
        <pre>
          <code id="gateway-main">
{`package com.ravi.microservice.api_gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiGatewayApplication {

  public static void main(String[] args) {
    SpringApplication.run(ApiGatewayApplication.class, args);
  }

}`}
          </code>
        </pre>
      </div>

      {/* application.properties */}
      <div className="code-block">
        <div className="code-header">
          <h2>⚙️ `application.properties`</h2>
          <button onClick={() => copyToClipboard('gateway-properties')}>Copy</button>
        </div>
        <pre>
          <code id="gateway-properties">
{`spring.application.name=API-GATEWAY
server.port=8080
logging.level.root=ERROR

# Eureka Configuration
eureka.instance.prefer-ip-address=true
eureka.client.register-with-eureka=true
eureka.client.fetch-registry=true
eureka.client.service-url.defaultZone=http://localhost:8761/eureka

# Gateway route for USER-SERVICE
spring.cloud.gateway.mvc.routes[0].id=USER-SERVICE
spring.cloud.gateway.mvc.routes[0].uri=lb://USER-SERVICE
spring.cloud.gateway.mvc.routes[0].predicates[0]=Path=/users/**`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ApiGateway;
