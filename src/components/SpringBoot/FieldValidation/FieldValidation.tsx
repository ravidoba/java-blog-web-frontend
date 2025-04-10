import React from 'react';
import './FieldValidation.css';

const FieldValidation: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const sections = [
    {
      title: '📦 Dependency',
      code: `<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-validation</artifactId>
</dependency>`,
      description: 'Add this dependency to enable field validation annotations in your Spring Boot project.'
    },
    {
      title: '🧩 Entity Example',
      code: `@NotBlank(message = "Password must not be blank")
private String password;`,
      description: 'Use validation annotations like @NotBlank to enforce rules directly on entity fields.'
    },
    {
      title: '🌐 REST Controller',
      code: `@PostMapping
public ResponseEntity<Object> create(@Valid @RequestBody User user) {
    // Logic here
    return ResponseEntity.ok("User created");
}`,
      description: 'Use @Valid in controller methods to trigger field validation automatically.'
    },
    {
      title: '🚫 Global Exception Handler Override',
      code: `@Override
protected ResponseEntity<Object> handleMethodArgumentNotValid(
        MethodArgumentNotValidException ex,
        HttpHeaders headers,
        HttpStatusCode status,
        WebRequest request) {

    String errorMessage = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(fieldError -> fieldError.getField() + ": " + fieldError.getDefaultMessage())
            .collect(Collectors.joining(", "));

    ErrorResponse error = new ErrorResponse(
            "Validation Failed",
            errorMessage,
            LocalDateTime.now(),
            HttpStatus.BAD_REQUEST.value()
    );

    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
}`,
      description: 'Override this method in your GlobalExceptionHandler to handle validation errors clearly.'
    },
    {
      title: '📚 Common Constraint Annotations',
      code: `    **@AssertFalse** – Field must be false
    **@AssertTrue** – Field must be true
    **@DecimalMax** – Must be a decimal value less than or equal to the specified max
    **@DecimalMin** – Must be a decimal value greater than or equal to the specified min
    **@Digits** – Must be a number within specified integer and fraction limits
    **@Email** – Must be a valid email address
    **@Future** – Must be a future date
    **@FutureOrPresent** – Must be a future or present date
    **@Max** – Must be a number less than or equal to the given value
    **@Min** – Must be a number greater than or equal to the given value
    **@Negative** – Must be a negative number
    **@NegativeOrZero** – Must be negative or zero
    **@NotBlank** – Must not be null and must contain at least one non-whitespace character
    **@NotEmpty** – Must not be null or empty
    **@NotNull** – Must not be null
    **@Null** – Must be null
    **@Past** – Must be a date in the past
    **@PastOrPresent** – Must be a past or present date
    **@Pattern** – Must match the specified regular expression
    **@Positive** – Must be a positive number
    **@PositiveOrZero** – Must be positive or zero
    **@Size** – Must have a length or size within the specified bounds`,
      description: 'These are standard javax.validation.constraints used for validating fields in your entity classes.'
    }
    
  ];

  return (
    <div className="validation-container">
      <h1>✔️ Field Validation in Spring Boot</h1>
      {sections.map((section, idx) => (
        <div className="validation-block" key={idx}>
          <div className="validation-header">
            <h2>{section.title}</h2>
            <button onClick={() => copyToClipboard(section.code)}>Copy</button>
          </div>
          <pre><code>{section.code}</code></pre>
          <p className="description">{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FieldValidation;
