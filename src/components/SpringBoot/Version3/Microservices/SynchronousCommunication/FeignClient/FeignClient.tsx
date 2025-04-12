import React from 'react';
import '../../ServiceRegistory/ServiceRegistory.css';

const FeignClient: React.FC = () => {
  const copyToClipboard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      navigator.clipboard.writeText(el.textContent || '');
    }
  };

  return (
    <div className="service-registry-container">
      <h1>🔗 Feign Client</h1>

      {/* Pom.xml */}
      <div className="code-block">
        <div className="code-header">
          <h2>📦 Maven Dependency (`pom.xml`)</h2>
          <button onClick={() => copyToClipboard('pom-feign')}>Copy</button>
        </div>
        <pre>
          <code id="pom-feign">
{`<!-- FEIGN CLIENT -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>`}
          </code>
        </pre>
      </div>

      {/* Main Application File */}
      <div className="code-block">
        <div className="code-header">
          <h2>🚀 Main Application Class</h2>
          <button onClick={() => copyToClipboard('feign-main')}>Copy</button>
        </div>
        <pre>
          <code id="feign-main">
{`package com.ravi.microservice.hotelservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class HotelserviceApplication {

  public static void main(String[] args) {
    SpringApplication.run(HotelserviceApplication.class, args);
  }

}`}
          </code>
        </pre>
      </div>

      {/* Feign Client Interface */}
      <div className="code-block">
        <div className="code-header">
          <h2>📡 Feign Client Interface</h2>
          <button onClick={() => copyToClipboard('feign-interface')}>Copy</button>
        </div>
        <pre>
          <code id="feign-interface">
{`package com.ravi.microservice.hotelservice.external.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Service
@FeignClient(name = "RATING-SERVICE")
public interface RatingService {

  @GetMapping("/ratings/hotel-ids/user/{userId}")
  public ResponseEntity<List<Long>> getHotelIdsByUserId(@PathVariable Long userId);
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default FeignClient;
