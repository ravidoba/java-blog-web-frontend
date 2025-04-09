import React from 'react';
import './Jvm.css';

const Jvm: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Java Virtual Machine (JVM)</h1>

      <p>
        The <strong>Java Virtual Machine (JVM)</strong> is an abstract machine that enables a computer to run Java programs.
        It provides a runtime environment in which Java bytecode can be executed, making Java platform-independent.
      </p>

      <h2>Key Components</h2>

      <ul>
        <li><strong>Class Loader:</strong> Loads class files from various sources (e.g., file system, network).</li>
        <li><strong>Bytecode Verifier:</strong> Checks code for security violations.</li>
        <li><strong>Interpreter:</strong> Reads and executes bytecode instructions one at a time.</li>
        <li><strong>JIT Compiler:</strong> Just-In-Time compiler converts bytecode into native machine code for better performance.</li>
        <li><strong>Garbage Collector:</strong> Automatically deallocates memory by removing unused objects.</li>
      </ul>

      <h2>JVM Memory Areas</h2>

      <ul>
        <li><strong>Method Area:</strong> Stores class metadata, static variables, etc.</li>
        <li><strong>Heap:</strong> Stores all Java objects and JRE classes.</li>
        <li><strong>Stack:</strong> Stores frames for method execution (local variables, partial results).</li>
        <li><strong>Program Counter (PC) Register:</strong> Holds the address of the current instruction.</li>
        <li><strong>Native Method Stack:</strong> Used for native methods (written in languages like C/C++).</li>
      </ul>

      <h2>JVM vs JRE vs JDK</h2>

      <ul>
        <li><strong>JVM:</strong> Runs Java bytecode. It's part of both JRE and JDK.</li>
        <li><strong>JRE (Java Runtime Environment):</strong> Contains JVM + core libraries to run Java apps.</li>
        <li><strong>JDK (Java Development Kit):</strong> Contains JRE + development tools like compiler (`javac`).</li>
      </ul>

      <h2>Execution Flow</h2>

      <ol>
        <li>Java source code is compiled into <code>.class</code> files (bytecode).</li>
        <li>JVM loads <code>.class</code> files via ClassLoader.</li>
        <li>Bytecode is verified.</li>
        <li>JVM interprets or compiles bytecode using the JIT compiler.</li>
        <li>Garbage collector runs periodically to free memory.</li>
      </ol>

      <h2>Popular JVM Languages</h2>

      <ul>
        <li>Java</li>
        <li>Kotlin</li>
        <li>Scala</li>
        <li>Groovy</li>
        <li>JRuby</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The JVM is a powerful engine behind Java's cross-platform capabilities and runtime performance. Understanding its internal workings helps developers write more efficient and optimized Java code.
      </p>
    </div>
  );
};

export default Jvm;
