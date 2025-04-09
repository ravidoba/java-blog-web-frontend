import React from 'react';
import './Exceptions.css';

const Exceptions: React.FC = () => {
  return (
    <div className="exceptions-container">
      <h1>Java Exceptions</h1>
      <p>
        Exceptions in Java are events that disrupt the normal flow of the program. They are objects representing an error or an unusual condition.
      </p>

      <h2>🔹 Types of Exceptions</h2>
      <ul>
        <li><strong>Checked Exceptions</strong> – Exceptions that must be handled at compile time (e.g., IOException, SQLException).</li>
        <li><strong>Unchecked Exceptions</strong> – Exceptions that occur during runtime (e.g., NullPointerException, ArithmeticException).</li>
        <li><strong>Error</strong> – Serious problems that a program should not try to handle (e.g., OutOfMemoryError, StackOverflowError).</li>
      </ul>

      <h2>🔸 Exception Hierarchy</h2>
      <pre>
{`Throwable
├── Error
│   ├── StackOverflowError
│   ├── OutOfMemoryError
│   └── ...
└── Exception
    ├── IOException
    ├── SQLException
    ├── RuntimeException
    │   ├── ArithmeticException
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── IllegalArgumentException
    │   └── ...
    └── ...`}
      </pre>

      <h2>📋 Common Exceptions in Java</h2>
      <ul>
        <li><strong>ArithmeticException</strong> – Thrown when an exceptional arithmetic condition has occurred.</li>
        <li><strong>ArrayIndexOutOfBoundsException</strong> – Thrown when trying to access an array with an illegal index.</li>
        <li><strong>ClassNotFoundException</strong> – Thrown when a class is not found during runtime.</li>
        <li><strong>FileNotFoundException</strong> – Thrown when a file is not found.</li>
        <li><strong>IOException</strong> – General class for exceptions produced by failed or interrupted I/O operations.</li>
        <li><strong>InterruptedException</strong> – Thrown when a thread is interrupted.</li>
        <li><strong>NoSuchMethodException</strong> – Method is not found.</li>
        <li><strong>NullPointerException</strong> – Thrown when an application attempts to use null in a case where an object is required.</li>
        <li><strong>NumberFormatException</strong> – Thrown when trying to convert a string to a number but the string is not properly formatted.</li>
        <li><strong>IllegalArgumentException</strong> – Thrown when a method has been passed an illegal or inappropriate argument.</li>
        <li><strong>IllegalStateException</strong> – Signals that a method has been invoked at an illegal or inappropriate time.</li>
        <li><strong>SQLException</strong> – Provides information on a database access error or other errors.</li>
        <li><strong>StackOverflowError</strong> – Thrown when a stack overflow occurs because an application recurses too deeply.</li>
        <li><strong>OutOfMemoryError</strong> – Thrown when the Java Virtual Machine cannot allocate an object due to memory limitations.</li>
        <li><strong>SecurityException</strong> – Thrown by the security manager to indicate a security violation.</li>
        <li><strong>UnsupportedOperationException</strong> – Indicates that the requested operation is not supported.</li>
        <li><strong>RuntimeException</strong> – Superclass of exceptions that can be thrown during the normal operation of the JVM.</li>
        <li><strong>IndexOutOfBoundsException</strong> – Thrown to indicate that an index is out of range.</li>
        <li><strong>IllegalMonitorStateException</strong> – Indicates that a thread has attempted to wait on an object’s monitor without owning it.</li>
        <li><strong>ClassCastException</strong> – Thrown to indicate that the code has attempted to cast an object to a subclass of which it is not an instance.</li>
      </ul>

      <h2>✅ Best Practices</h2>
      <ul>
        <li>Use specific exceptions instead of generic ones.</li>
        <li>Don't catch <code>Throwable</code> unless absolutely necessary.</li>
        <li>Always clean up resources in <code>finally</code> block or use <code>try-with-resources</code>.</li>
        <li>Avoid empty <code>catch</code> blocks.</li>
      </ul>
    </div>
  );
};

export default Exceptions;
