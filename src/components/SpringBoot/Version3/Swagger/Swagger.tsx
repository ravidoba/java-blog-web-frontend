import React from 'react';
import './Swagger.css';

const Swagger: React.FC = () => {
  const copyToClipboard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      navigator.clipboard.writeText(el.textContent || '').then(() => {
      });
    }
  };

  return (
    <div className="swagger-container">
      <h1>📘 Swagger Integration</h1>

      {/* Maven Dependency */}
      <div className="code-block">
        <div className="code-header">
          <h2>📦 Swagger Maven Dependency</h2>
          <button onClick={() => copyToClipboard('swagger-dependency')}>Copy</button>
        </div>
        <pre>
          <code id="swagger-dependency">
{`<!-- Swagger -->
<dependency>
  <groupId>org.springdoc</groupId>
  <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
  <version>2.8.6</version>
</dependency>`}
          </code>
        </pre>
      </div>

      {/* Security Config Snippet */}
      <div className="code-block">
        <div className="code-header">
          <h2>🔐 Spring Security Config for Swagger</h2>
          <button onClick={() => copyToClipboard('swagger-security-config')}>Copy</button>
        </div>
        <pre>
          <code id="swagger-security-config">
{`http.csrf().disable()
    .authorizeHttpRequests()
    .requestMatchers(
        "/auth/**",
        "/v3/api-docs/**",
        "/swagger-ui/**",
        "/swagger-ui.html"
    ).permitAll();`}
          </code>
        </pre>
      </div>

      {/* Swagger Config Java Class */}
      <div className="code-block">
        <div className="code-header">
          <h2>⚙️ Swagger Config Class</h2>
          <button onClick={() => copyToClipboard('swagger-config-class')}>Copy</button>
        </div>
        <pre>
          <code id="swagger-config-class">
{`package com.in28minutes.rest.services.restful_web_services.security;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.*;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("My API").version("v1"))
                .components(new Components().addSecuritySchemes("bearer-key",
                        new SecurityScheme()
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")
                ))
                .addSecurityItem(new SecurityRequirement().addList("bearer-key"));
    }

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("public")
                .pathsToMatch("/**")
                .build();
    }
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Swagger;
