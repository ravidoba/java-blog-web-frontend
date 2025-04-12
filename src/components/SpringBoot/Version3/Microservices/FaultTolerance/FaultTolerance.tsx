import React from 'react';
import '../ServiceRegistory/ServiceRegistory.css';

const FaultTolerance: React.FC = () => {
  const copyToClipboard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      navigator.clipboard.writeText(el.textContent || '');
    }
  };

  return (
    <div className="service-registry-container">
      <h1>⚡ Circuit Breaker & Retry (Resilience4j)</h1>

      {/* Dependencies */}
      <div className="code-block">
        <div className="code-header">
          <h2>📦 Maven Dependencies</h2>
          <button onClick={() => copyToClipboard('circuit-deps')}>Copy</button>
        </div>
        <pre>
          <code id="circuit-deps">
{`<!-- FAULT TOLERANCE -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-aop</artifactId>
</dependency>

<dependency>
  <groupId>io.github.resilience4j</groupId>
  <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-circuitbreaker-resilience4j</artifactId>
</dependency>`}
          </code>
        </pre>
      </div>

      {/* Method with Annotations */}
      <div className="code-block">
        <div className="code-header">
          <h2>🧠 Implementation</h2>
          <button onClick={() => copyToClipboard('circuit-code')}>Copy</button>
        </div>
        <pre>
          <code id="circuit-code">
{`@Override
// @Retry(name = "getHotelsByUserId", fallbackMethod = "getHotelsByUserIdRetryFallback")
@CircuitBreaker(name = "getHotelsByUserId", fallbackMethod = "getHotelsByUserIdCircuitBreakerFallback")
public List<Hotel> getHotelsByUserId(Long userId) {
  List<Long> hotelIds = ratingService.getHotelIdsByUserId(userId).getBody();
  if (hotelIds == null || hotelIds.isEmpty()) {
    return Collections.emptyList();
  }
  return hotelRepository.findByIdIn(hotelIds);
}

// Fallback Methods
public List<Hotel> getHotelsByUserIdCircuitBreakerFallback(Long userId, Throwable t) {
  System.out.println("CircuitBreaker fallback executed due to: " + t.getMessage());
  return Collections.emptyList();
}

public List<Hotel> getHotelsByUserIdRetryFallback(Long userId, Throwable t) {
  System.out.println("Retry fallback executed due to: " + t.getMessage());
  return Collections.emptyList();
}`}
          </code>
        </pre>
      </div>

      {/* application.properties */}
      <div className="code-block">
        <div className="code-header">
          <h2>⚙️ Configuration (`application.properties`)</h2>
          <button onClick={() => copyToClipboard('circuit-props')}>Copy</button>
        </div>
        <pre>
          <code id="circuit-props">
{`# Actuator configuration
management.endpoints.web.exposure.include=health,info,circuitbreakers

# CircuitBreaker configuration
resilience4j.circuitbreaker.instances.getHotelsByUserId.registerHealthIndicator=true
resilience4j.circuitbreaker.instances.getHotelsByUserId.slidingWindowSize=5
resilience4j.circuitbreaker.instances.getHotelsByUserId.failureRateThreshold=50
resilience4j.circuitbreaker.instances.getHotelsByUserId.waitDurationInOpenState=5000
resilience4j.circuitbreaker.instances.getHotelsByUserId.permittedNumberOfCallsInHalfOpenState=2
resilience4j.circuitbreaker.instances.getHotelsByUserId.minimumNumberOfCalls=5

# Retry configuration
resilience4j.retry.instances.getHotelsByUserId.maxAttempts=2
resilience4j.retry.instances.getHotelsByUserId.waitDuration=1s
resilience4j.retry.instances.getHotelsByUserId.enableExponentialBackoff=true
resilience4j.retry.instances.getHotelsByUserId.exponentialBackoffMultiplier=2

# Logging level
logging.level.io.github.resilience4j=DEBUG

# CircuitBreaker status endpoint
# http://192.168.1.5:8082/actuator/circuitbreakers`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default FaultTolerance;
