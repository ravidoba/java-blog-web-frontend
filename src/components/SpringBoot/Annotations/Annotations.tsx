import React from 'react';
import './Annotations.css';

const groupedAnnotations = [
  {
    section: '🔧 Core and Configuration',
    annotations: [
      { name: '@SpringBootApplication', desc: 'Main entry point; combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.' },
      { name: '@Component', desc: 'Marks a Java class as a Spring-managed component.' },
      { name: '@Configuration', desc: 'Indicates source of bean definitions.' },
      { name: '@Bean', desc: 'Declares a bean definition inside @Configuration class.' },
      { name: '@Value', desc: 'Injects property values from configuration files.' },
      { name: '@PropertySource', desc: 'Adds a property source to Spring environment.' },
      { name: '@ComponentScan', desc: 'Specifies base packages to scan for components.' },
      { name: '@Import', desc: 'Allows importing additional configuration classes.' },
      { name: '@ImportResource', desc: 'Imports XML configuration files.' },
      { name: '@Conditional', desc: 'Registers beans conditionally based on custom logic.' },
      { name: '@ConditionalOnProperty', desc: 'Loads beans based on a specific property.' },
      { name: '@ConditionalOnClass', desc: 'Loads beans if a class is on the classpath.' },
      { name: '@ConditionalOnMissingBean', desc: 'Registers bean if another bean is missing.' },
      { name: '@ConditionalOnBean', desc: 'Registers bean if another bean is present.' },
      { name: '@ConditionalOnExpression', desc: 'Conditionally loads bean using SpEL.' },
      { name: '@Profile', desc: 'Restricts beans to specific environment profiles.' },
      { name: '@EnableAutoConfiguration', desc: 'Automatically configures Spring app based on classpath.' },
      { name: '@EnableConfigurationProperties', desc: 'Enables support for @ConfigurationProperties.' },
      { name: '@ConfigurationProperties', desc: 'Binds external configuration to Java beans.' },
    ],
  },
  {
    section: '🌐 Web and REST',
    annotations: [
      { name: '@Controller', desc: 'Marks a class as a Spring MVC controller.' },
      { name: '@RestController', desc: 'Combines @Controller and @ResponseBody.' },
      { name: '@RequestMapping', desc: 'Maps HTTP requests to handler methods.' },
      { name: '@GetMapping', desc: 'Handles HTTP GET requests.' },
      { name: '@PostMapping', desc: 'Handles HTTP POST requests.' },
      { name: '@PutMapping', desc: 'Handles HTTP PUT requests.' },
      { name: '@DeleteMapping', desc: 'Handles HTTP DELETE requests.' },
      { name: '@PatchMapping', desc: 'Handles HTTP PATCH requests.' },
      { name: '@RequestParam', desc: 'Binds request parameters to method arguments.' },
      { name: '@PathVariable', desc: 'Binds URI template variables to method parameters.' },
      { name: '@RequestBody', desc: 'Binds the body of the request to a method parameter.' },
      { name: '@ResponseBody', desc: 'Writes return value directly to the HTTP response body.' },
      { name: '@ResponseStatus', desc: 'Marks a method or exception class with an HTTP status code.' },
      { name: '@CrossOrigin', desc: 'Enables cross-origin resource sharing (CORS).' },
      { name: '@ModelAttribute', desc: 'Binds method parameters or method return values to a model.' },
      { name: '@InitBinder', desc: 'Initializes web data binders.' },
    ],
  },
  {
    section: '🧠 Services and Repositories',
    annotations: [
      { name: '@Service', desc: 'Marks a class as a service provider; specialization of @Component.' },
      { name: '@Repository', desc: 'Indicates DAO component; also handles exceptions.' },
    ],
  },
  {
    section: '📅 Scheduling and Async',
    annotations: [
      { name: '@EnableAsync', desc: 'Enables asynchronous method execution.' },
      { name: '@Async', desc: 'Executes methods asynchronously.' },
      { name: '@EnableScheduling', desc: 'Enables scheduled tasks.' },
      { name: '@Scheduled', desc: 'Marks a method to be scheduled for execution.' },
    ],
  },
  {
    section: '🧠 Caching',
    annotations: [
      { name: '@EnableCaching', desc: 'Enables Spring’s annotation-driven cache management.' },
      { name: '@Cacheable', desc: 'Caches method results.' },
      { name: '@CachePut', desc: 'Updates the cache without interfering with method execution.' },
      { name: '@CacheEvict', desc: 'Removes one or all entries from the cache.' },
    ],
  },
  {
    section: '🛠️ JPA and Persistence',
    annotations: [
      { name: '@EnableTransactionManagement', desc: 'Enables Spring’s annotation-driven transaction management.' },
      { name: '@Transactional', desc: 'Demarcates transactional boundaries.' },
      { name: '@EnableJpaRepositories', desc: 'Enables JPA repositories.' },
      { name: '@Entity', desc: 'Specifies a class is an entity mapped to a database table.' },
      { name: '@Table', desc: 'Provides table-level metadata.' },
      { name: '@Column', desc: 'Specifies the column details of a table.' },
      { name: '@Id', desc: 'Marks a field as primary key.' },
      { name: '@GeneratedValue', desc: 'Provides generation strategy for primary keys.' },
      { name: '@ManyToOne', desc: 'Defines many-to-one relationship.' },
      { name: '@OneToMany', desc: 'Defines one-to-many relationship.' },
      { name: '@JsonIgnore', desc: 'Default.' },
      { name: '@JoinColumn', desc: 'Specifies foreign key column.' },
      { name: '@MappedSuperclass', desc: 'Superclass whose mapping is applied to subclasses.' },
      { name: '@Embeddable', desc: 'Marks a class for embedded use.' },
      { name: '@Embedded', desc: 'Embeds a class inside another entity.' },
      { name: '@Query', desc: 'Defines custom queries for JPA.' },
      { name: '@Modifying', desc: 'Indicates modifying query (e.g. update/delete).' },
    ],
  },
  {
    section: '?? Field Validation Annotations',
    annotations: [
      { name: '@NotNull', desc: 'Ensures the field is not null.' },
      { name: '@NotBlank', desc: 'Ensures the string is not null and trimmed length is greater than zero.' },
      { name: '@NotEmpty', desc: 'Ensures the collection, map, array, or string is not null or empty.' },
      { name: '@Email', desc: 'Validates that the field has a valid email format.' },
      { name: '@Size', desc: 'Specifies the size constraints (length or collection size).' },
      { name: '@Min', desc: 'Specifies the minimum numeric value for a field.' },
      { name: '@Max', desc: 'Specifies the maximum numeric value for a field.' },
      { name: '@Positive', desc: 'Field value must be a positive number (> 0).' },
      { name: '@PositiveOrZero', desc: 'Field must be positive or zero (>= 0).' },
      { name: '@Negative', desc: 'Field value must be a negative number (< 0).' },
      { name: '@NegativeOrZero', desc: 'Field must be negative or zero (<= 0).' },
      { name: '@Pattern', desc: 'Validates the string against a regular expression.' },
      { name: '@AssertTrue', desc: 'Field must be true.' },
      { name: '@AssertFalse', desc: 'Field must be false.' },
      { name: '@Past', desc: 'Date must be in the past.' },
      { name: '@PastOrPresent', desc: 'Date must be in the past or present.' },
      { name: '@Future', desc: 'Date must be in the future.' },
      { name: '@FutureOrPresent', desc: 'Date must be in the future or present.' },
      { name: '@Digits', desc: 'Specifies the number of integer and fraction digits.' },
      { name: '@Null', desc: 'Field must be null (opposite of @NotNull).' },
    ],
  },
  {
    section: '?? Composite and Advanced Validation',
    annotations: [
      { name: '@Valid', desc: 'Used to trigger validation on nested objects or lists.' },
      { name: '@Validated', desc: 'Used on class or method to enable validation with Spring’s validator.' },
      { name: '@ConvertGroup', desc: 'Used to convert one validation group to another.' },
      { name: '@GroupSequence', desc: 'Defines a sequence of validation groups.' },
      { name: '@Constraint', desc: 'Used to define a custom validation annotation.' },
    ],
  },
  {
    section: '🔒 Security',
    annotations: [
      { name: '@EnableWebSecurity', desc: 'Enables web security configuration.' },
      { name: '@EnableGlobalMethodSecurity', desc: 'Enables method-level security annotations.' },
      { name: '@PreAuthorize', desc: 'Pre-authorizes method access using expressions.' },
      { name: '@PostAuthorize', desc: 'Post-authorizes method access.' },
      { name: '@Secured', desc: 'Restricts access based on roles.' },
      { name: '@RolesAllowed', desc: 'Restricts access based on allowed roles.' },
      { name: '@AuthenticationPrincipal', desc: 'Accesses currently authenticated principal.' },
      { name: '@EnableOAuth2Client', desc: 'Enables OAuth2 client support.' },
      { name: '@EnableOAuth2Sso', desc: 'Enables single sign-on with OAuth2.' },
    ],
  },
  {
    section: '?? JUnit 5 Core Annotations',
    annotations: [
      { name: '@Test', desc: 'Marks a method as a test case.' },
      { name: '@BeforeEach', desc: 'Runs before each test method.' },
      { name: '@AfterEach', desc: 'Runs after each test method.' },
      { name: '@BeforeAll', desc: 'Runs once before all test methods (must be static).' },
      { name: '@AfterAll', desc: 'Runs once after all test methods (must be static).' },
      { name: '@DisplayName', desc: 'Sets a custom name for the test class or method.' },
      { name: '@Disabled', desc: 'Disables the test class or method.' },
      { name: '@Nested', desc: 'Allows writing nested test classes for better organization.' },
      { name: '@Tag', desc: 'Used to tag and filter tests.' },
      { name: '@RepeatedTest', desc: 'Indicates a test method should be repeated a specified number of times.' },
      { name: '@ParameterizedTest', desc: 'Runs the same test multiple times with different arguments.' },
      { name: '@ValueSource', desc: 'Provides literal values to a parameterized test.' },
      { name: '@CsvSource', desc: 'Provides comma-separated values for parameterized tests.' },
      { name: '@MethodSource', desc: 'Provides a method to supply arguments for parameterized tests.' },
      { name: '@TestInstance', desc: 'Defines test instance lifecycle (per class or method).' },
    ],
  },
  {
    section: '?? JUnit 4 Annotations (Legacy)',
    annotations: [
      { name: '@Test', desc: 'Marks a test method.' },
      { name: '@Before', desc: 'Runs before each test method.' },
      { name: '@After', desc: 'Runs after each test method.' },
      { name: '@BeforeClass', desc: 'Runs once before all tests in the class (static).' },
      { name: '@AfterClass', desc: 'Runs once after all tests in the class (static).' },
      { name: '@Ignore', desc: 'Ignores the test method.' },
      { name: '@RunWith', desc: 'Specifies a custom runner (e.g., SpringRunner.class).' },
      { name: '@Rule', desc: 'Enables special behavior for test methods.' },
      { name: '@ClassRule', desc: 'Static version of @Rule.' },
    ],
  },
  {
    section: '?? Spring Boot Test Annotations',
    annotations: [
      { name: '@SpringBootTest', desc: 'Loads the full application context for integration tests.' },
      { name: '@DataJpaTest', desc: 'Configures test for JPA components (repository tests).' },
      { name: '@WebMvcTest', desc: 'Configures test for controller layer only.' },
      { name: '@MockBean', desc: 'Creates and injects a Mockito mock into the Spring context.' },
      { name: '@SpyBean', desc: 'Creates and injects a Mockito spy into the Spring context.' },
      { name: '@TestConfiguration', desc: 'Provides custom test-specific configuration classes.' },
      { name: '@AutoConfigureMockMvc', desc: 'Auto-configures MockMvc for controller testing.' },
      { name: '@AutoConfigureTestDatabase', desc: 'Configures embedded test database.' },
    ],
  },
  {
    section: '?? Mockito Annotations',
    annotations: [
      { name: '@Mock', desc: 'Creates a mock instance of a class or interface.' },
      { name: '@Spy', desc: 'Wraps a real object and tracks interactions.' },
      { name: '@InjectMocks', desc: 'Injects mocks/spies into the tested class.' },
      { name: '@Captor', desc: 'Used to capture argument values for verification.' },
      { name: '@ExtendWith(MockitoExtension.class)', desc: 'Enables Mockito support in JUnit 5 tests.' },
      { name: '@RunWith(MockitoJUnitRunner.class)', desc: 'Initializes mocks in JUnit 4 tests.' },
    ],
  },
  {
    section: '🧯 Exception Handling',
    annotations: [
      { name: '@ExceptionHandler', desc: 'Handles exceptions thrown by controller methods.' },
      { name: '@ControllerAdvice', desc: 'Global exception handling for controllers.' },
    ],
  },
];

const Annotations: React.FC = () => {
  return (
    <div className="annotations-container">
      <h1>Spring Boot Annotations</h1>
      {groupedAnnotations.map((group, idx) => (
        <div key={idx} className="annotation-section">
          <h2>{group.section}</h2>
          <ul>
            {group.annotations.map((a, i) => (
              <li key={i}><code>{a.name}</code>: {a.desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Annotations;
