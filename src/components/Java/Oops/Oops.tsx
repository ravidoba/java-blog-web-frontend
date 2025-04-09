import React from 'react';
import './Oops.css';

const Oops: React.FC = () => {
  return (
    <div className="oops-container">
      <h1>Object-Oriented Programming (OOP) in Java</h1>

      <p>
        Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", 
        which can contain data and code. Java is a purely object-oriented language (except for primitive types).
      </p>

      <h2>🧱 Core Concepts of OOP</h2>

      <h3>1. Encapsulation</h3>
      <p>
        Encapsulation is the process of wrapping code and data together into a single unit, usually a class. 
        It hides the internal state and allows controlled access via methods.
      </p>
      <pre>
{`class Person {
  private String name;

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}`}
      </pre>

      <h3>2. Inheritance</h3>
      <p>
        Inheritance allows a class to inherit the properties and behavior of another class.
        It promotes code reuse.
      </p>
      <pre>
{`class Animal {
  void sound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Dog barks");
  }
}`}
      </pre>

      <h3>3. Polymorphism</h3>
      <p>
        Polymorphism allows methods to behave differently based on the object that is calling them.
        It is of two types: compile-time (method overloading) and runtime (method overriding).
      </p>
      <pre>
{`// Overloading
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

// Overriding
Animal a = new Dog();
a.sound(); // Output: Dog barks`}
      </pre>

      <h3>4. Abstraction</h3>
      <p>
        Abstraction means hiding the implementation details and showing only essential features.
        It is achieved using abstract classes or interfaces.
      </p>
      <pre>
{`abstract class Shape {
  abstract void draw();
}

class Circle extends Shape {
  void draw() {
    System.out.println("Drawing circle");
  }
}`}
      </pre>

      <h2>🎯 Why OOP?</h2>
      <ul>
        <li>Modular and organized code</li>
        <li>Code reuse via inheritance</li>
        <li>Encapsulation for data protection</li>
        <li>Abstraction for cleaner APIs</li>
        <li>Polymorphism for flexibility</li>
      </ul>
    </div>
  );
};

export default Oops;
