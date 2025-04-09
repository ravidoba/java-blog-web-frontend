import React from 'react';
import './Java8Features.css';

const Java8Features: React.FC = () => {
  return (
    <div className="java8-features-container">
      <h1>Java 8 Features</h1>

      <h2>🔹 Lambda Expressions</h2>
      <ul>
        <li>Enables functional programming by treating code as data.</li>
        <li>Syntax: <code>(a, b) - a + b</code></li>
      </ul>

      <h2>🔹 Functional Interfaces</h2>
      <ul>
        <li>Interfaces with a single abstract method. E.g., <code>Runnable</code>, <code>Comparator</code>, <code>Function</code>.</li>
        <li>Used in lambda expressions and method references.</li>
      </ul>

      <h2>🔹 Stream API</h2>
      <ul>
        <li>
          Introduced in Java 8, the Stream API enables functional-style operations on collections and sequences of elements (like arrays or lists).
        </li>
        <li>
          Streams are not data structures; they don’t store data. Instead, they carry data from a source (like a collection) through a pipeline of operations.
        </li>
        <li>
          A stream pipeline consists of:
          <ul>
            <li><strong>Source</strong> – e.g., a Collection or an array.</li>
            <li><strong>Intermediate Operations</strong> – return a new stream (e.g., <code>map</code>, <code>filter</code>, <code>sorted</code>).</li>
            <li><strong>Terminal Operations</strong> – produce a result or a side-effect (e.g., <code>forEach</code>, <code>collect</code>, <code>reduce</code>).</li>
          </ul>
        </li>
        <li>
          Intermediate operations are <strong>lazy</strong>; they are only executed when a terminal operation is invoked.
        </li>
        <li>
          Common Stream operations include:
          <ul>
            <li><code>filter()</code> – Filters elements based on a predicate.</li>
            <li><code>map()</code> – Transforms each element into another form.</li>
            <li><code>collect()</code> – Converts the stream into a list, set, map, etc.</li>
            <li><code>forEach()</code> – Performs an action for each element.</li>
            <li><code>sorted()</code> – Sorts the elements in natural or custom order.</li>
            <li><code>reduce()</code> – Reduces the stream to a single value.</li>
          </ul>
        </li>
        <li>
          Streams support both <strong>sequential</strong> and <strong>parallel</strong> execution. Use <code>parallelStream()</code> for automatic parallelism and better performance with large data sets.
        </li>
      </ul>

      <pre>{`List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

List<String> filteredNames = names.stream()
    .filter(name -> name.startsWith("A"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(filteredNames); // Output: [ALICE]`}</pre>

      <h2>🔹 Default & Static Methods in Interfaces</h2>
      <ul>
        <li><code>default</code> allows method implementations in interfaces.</li>
        <li><code>static</code> enables utility methods.</li>
      </ul>

      <h2>🔹 Optional Class</h2>
      <ul>
        <li>Represents a container that may or may not contain a non-null value.</li>
        <li>Avoids <code>NullPointerException</code>.</li>
      </ul>

      <h2>🔹 New Date and Time API (java.time)</h2>
      <ul>
        <li>Immutable and thread-safe alternatives to legacy date/time classes.</li>
        <li>Classes: <code>LocalDate</code>, <code>LocalTime</code>, <code>ZonedDateTime</code>.</li>
      </ul>

      <h2>🔹 Nashorn JavaScript Engine</h2>
      <ul>
        <li>Execute JavaScript code inside JVM.</li>
      </ul>

      <h2>🔹 Parallel Array Operations</h2>
      <ul>
        <li><code>Arrays.parallelSort()</code> allows multithreaded sorting for large arrays.</li>
      </ul>

      <h2>🔹 PermGen Removal</h2>
      <ul>
        <li>PermGen (Permanent Generation) memory space removed; replaced with Metaspace.</li>
      </ul>

      <h2>🔹 HashMap Improvements</h2>
      <ul>
        <li>When the number of items in a bucket exceeds a threshold, the bucket turns into a balanced tree (Red-Black Tree), improving worst-case time complexity from O(n) to O(log n).</li>
      </ul>
    </div>
  );
};

export default Java8Features;
