import React, { useRef } from 'react';
import './AdvanceTopics.css';

const sections = [
  'XML Format',
  'Internationalization',
  'API Versioning',
  'HATEOAS',
  'Static Filtering',
  'Dynamic Filtering',
  'Spring Boot Actuator',
  'HAL Explorer'
];

const AdvanceTopics: React.FC = () => {
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const setRef = (section: string) => (el: HTMLDivElement | null) => {
    refs.current[section] = el;
  };

  const scrollToSection = (section: string) => {
    refs.current[section]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="restapi-container">
      <h1>🔧 Spring Boot REST API Topics</h1>
      <div className="button-container">
        {sections.map((topic) => (
          <button key={topic} onClick={() => scrollToSection(topic)}>{topic}</button>
        ))}
      </div>

      <div ref={setRef('XML Format')} className="section">
        <h2>📄 XML Format</h2>
        <pre>{`<!--XML FORMAT-->
<dependency>
  <groupId>com.fasterxml.jackson.dataformat</groupId>
  <artifactId>jackson-dataformat-xml</artifactId>
</dependency>

Header: Accept: application/xml`}</pre>
      </div>

      <div ref={setRef('Internationalization')} className="section">
        <h2>🌍 Internationalization</h2>
        <pre>{`Messages.properties: good.morning.message=Good Morning
messages_nl.properties: good.morning.message=Goedemorgen

MessageController.java
@Autowired
private MessageSource messageSource;

@GetMapping
public String goodMorning() {
  Locale locale = LocaleContextHolder.getLocale();
  return messageSource.getMessage("good.morning.message", null, "Default Message", locale);
}`}</pre>
      </div>

      <div ref={setRef('API Versioning')} className="section">
        <h2>🔢 API Versioning</h2>
        <pre>{`URL:
/v1/person
/v2/person

Param:
/person?version=1
/person?version=2

Header:
X-API-VERSION=1
X-API-VERSION=2

Media Type:
Accept: application/vnd.company.app-v1+json
Accept: application/vnd.company.app-v2+json

Recommendations:
- Think versioning early
- Use one enterprise-wide strategy`}</pre>
      </div>

      <div ref={setRef('HATEOAS')} className="section">
        <h2>🔗 HATEOAS</h2>
        <pre>{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-hateoas</artifactId>
</dependency>

@PostMapping
public EntityModel<User> create(...) {
  EntityModel<User> entityModel = EntityModel.of(user);
  entityModel.add(linkTo(methodOn(...)).withRel("all-users"));
}`}</pre>
      </div>

      <div ref={setRef('Static Filtering')} className="section">
        <h2>🛑 Static Filtering</h2>
        <pre>{`@JsonIgnore
@JsonProperty
@JsonIgnoreProperties`}</pre>
      </div>

      <div ref={setRef('Dynamic Filtering')} className="section">
        <h2>🔀 Dynamic Filtering</h2>
        <pre>{`@JsonFilter("UserFilter")

SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id", "name");
FilterProvider filters = new SimpleFilterProvider().addFilter("UserFilter", filter);
MappingJacksonValue mapping = new MappingJacksonValue(user);
mapping.setFilters(filters);`}</pre>
      </div>

      <div ref={setRef('Spring Boot Actuator')} className="section">
        <h2>📈 Spring Boot Actuator</h2>
        <pre>{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

# application.properties
management.endpoints.web.exposure.include=*`}</pre>
      </div>

      <div ref={setRef('HAL Explorer')} className="section">
        <h2>🌐 HAL Explorer</h2>
        <pre>{`<dependency>
  <groupId>org.springframework.data</groupId>
  <artifactId>spring-data-rest-hal-explorer</artifactId>
</dependency>

URL: http://localhost:8080/explorer/index.html#uri=/`}</pre>
      </div>
    </div>
  );
};

export default AdvanceTopics;
