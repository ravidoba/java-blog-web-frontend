import React from 'react';
import './GlobalException.css';

const exceptionDetails = [
  {
    title: '🌐 Global Exception Handler',
    code: `@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneric(Exception ex) {
        ErrorResponse error = new ErrorResponse(
                "Internal Server Error",
                ex.getMessage(),
                LocalDateTime.now(),
                HttpStatus.INTERNAL_SERVER_ERROR.value()
        );
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(UserException.class)
    public ResponseEntity<ErrorResponse> handleUserException(UserException ex) {
        ErrorResponse error = new ErrorResponse(
                "User Error",
                ex.getMessage(),
                LocalDateTime.now(),
                HttpStatus.BAD_REQUEST.value()
        );
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}`,
    description: 'Handles global exceptions using Spring Boot’s @ControllerAdvice and custom handlers.'
  },
  {
    title: '⚠️ Custom Exception (UserException)',
    code: `public class UserException extends RuntimeException {

    public UserException() {
        super();
    }

    public UserException(String message) {
        super(message);
    }

    public UserException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserException(Throwable cause) {
        super(cause);
    }
}`,
    description: 'A custom exception that extends RuntimeException to handle specific user-related errors.'
  }
];

const GlobalException: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="exception-container">
      <h1>🛡️ Global Exception Handling</h1>
      {exceptionDetails.map((item, idx) => (
        <div className="exception-block" key={idx}>
          <div className="exception-header">
            <h2>{item.title}</h2>
            <button onClick={() => copyToClipboard(item.code)}>Copy</button>
          </div>
          <pre><code>{item.code}</code></pre>
          <p className="description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GlobalException;
