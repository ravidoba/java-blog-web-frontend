import React from 'react';
import './Multithreading.css';

const Multithreading: React.FC = () => {
  return (
    <div className="multithreading-container">
      <h1>Java Multithreading</h1>
      <p>
        Multithreading in Java is a core concept that allows concurrent execution of two or more parts of a program to maximize CPU utilization. Each part of such a program is called a <strong>thread</strong>. It is especially useful in scenarios where tasks can run independently, such as handling UI, background processes, or network operations.
      </p>

      <h2>🔹 Key Concepts</h2>
      <ul>
        <li><strong>Thread</strong>: The smallest unit of execution.</li>
        <li><strong>Process</strong>: An executing instance of a program which may contain multiple threads.</li>
        <li><strong>Multithreading</strong>: A programming concept where multiple threads run concurrently.</li>
        <li><strong>Context Switching</strong>: The process of storing and restoring the state of a thread so that execution can be resumed from the same point later.</li>
      </ul>

      <h2>🔹 Creating Threads</h2>
      <ul>
        <li>By extending the <code>Thread</code> class and overriding the <code>run()</code> method.</li>
        <li>By implementing the <code>Runnable</code> interface.</li>
        <li>Using <code>Executors</code> from <code>java.util.concurrent</code> package for thread pooling and task management.</li>
      </ul>

      <h2>🔹 Thread Lifecycle</h2>
      <ul>
        <li><strong>New</strong> – Thread is created but not started.</li>
        <li><strong>Runnable</strong> – Thread is ready to run and waiting for CPU time.</li>
        <li><strong>Running</strong> – Thread is currently executing.</li>
        <li><strong>Blocked/Waiting</strong> – Thread is waiting to acquire a lock or waiting for another thread to finish.</li>
        <li><strong>Terminated</strong> – Thread has completed execution or exited due to an exception.</li>
      </ul>

      <h2>🔹 Thread Methods</h2>
      <ul>
        <li><code>start()</code>: Starts the thread and calls the <code>run()</code> method.</li>
        <li><code>run()</code>: Contains the code to be executed by the thread.</li>
        <li><code>sleep()</code>: Causes the thread to pause execution for a specified time.</li>
        <li><code>join()</code>: Waits for the thread to die.</li>
        <li><code>yield()</code>: Hints the scheduler to let other threads of the same priority execute.</li>
        <li><code>interrupt()</code>: Interrupts a thread’s execution.</li>
      </ul>

      <h2>🔹 Thread Synchronization</h2>
      <p>
        Synchronization is used to control access to shared resources by multiple threads to avoid data inconsistency.
      </p>
      <ul>
        <li><code>synchronized</code> keyword ensures that only one thread can access the block at a time.</li>
        <li>Use of <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code> for inter-thread communication.</li>
      </ul>

      <h2>🔹 Thread Safety and Concurrency Utilities</h2>
      <ul>
        <li><code>ReentrantLock</code>: A lock with the same basic behavior as the implicit monitor lock accessed using <code>synchronized</code>.</li>
        <li><code>AtomicInteger</code>, <code>AtomicReference</code>: For lock-free thread-safe operations.</li>
        <li><code>ExecutorService</code>, <code>ScheduledExecutorService</code>: Managing a pool of threads and scheduled tasks.</li>
        <li><code>CountDownLatch</code>, <code>Semaphore</code>, <code>CyclicBarrier</code>: Advanced synchronization tools.</li>
      </ul>

      <h2>📘 Example</h2>
      <pre>{`class MyThread extends Thread {
  public void run() {
    System.out.println("Thread running");
  }

  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start();
  }
}`}</pre>

      <h2>✨ Benefits of Multithreading</h2>
      <ul>
        <li>Efficient use of CPU resources.</li>
        <li>Improved application responsiveness.</li>
        <li>Parallel execution of tasks.</li>
        <li>Better system resource utilization.</li>
      </ul>
    </div>
  );
};

export default Multithreading;
