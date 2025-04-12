import React from 'react';
import '../ServiceRegistory/ServiceRegistory.css';

const UserService: React.FC = () => {
  const copyToClipboard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      navigator.clipboard.writeText(el.textContent || '');
    }
  };

  return (
    <div className="service-registry-container">
      <h1>👤 User Service</h1>

      {/* Pom.xml */}
      <div className="code-block">
        <div className="code-header">
          <h2>📦 Maven - `pom.xml`</h2>
          <button onClick={() => copyToClipboard('pom-user')}>Copy</button>
        </div>
        <pre>
          <code id="pom-user">
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

  <!-- FEIGN CLIENT -->
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
  </dependency>

  <!-- CONFIG CLIENT -->
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
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
          <button onClick={() => copyToClipboard('user-main')}>Copy</button>
        </div>
        <pre>
          <code id="user-main">
{`package com.ravi.microservice.userservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class UserserviceApplication {

  public static void main(String[] args) {
    SpringApplication.run(UserserviceApplication.class, args);
  }
}`}
          </code>
        </pre>
      </div>

      {/* application.properties */}
      <div className="code-block">
        <div className="code-header">
          <h2>⚙️ `application.properties`</h2>
          <button onClick={() => copyToClipboard('user-properties')}>Copy</button>
        </div>
        <pre>
          <code id="user-properties">
{`spring.application.name=USER-SERVICE
server.port=8081

## Database Configuration
#spring.datasource.url=jdbc:mysql://localhost:3306/ravi_microservice_p_1?useSSL=false&serverTimezone=UTC
#spring.datasource.username=root
#spring.datasource.password=root

## Hibernate Configuration
#spring.jpa.hibernate.ddl-auto=update
#spring.jpa.show-sql=true
#spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

## Eureka Configuration
#eureka.instance.prefer-ip-address=true
#eureka.client.register-with-eureka=true
#eureka.client.fetch-registry=true
#eureka.client.service-url.defaultZone=http://localhost:8761/eureka

#logging.level.root=ERROR

## Config Client Configuration
spring.config.import=optional:configserver:http://localhost:9090
#spring.profiles.active=default`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default UserService;
