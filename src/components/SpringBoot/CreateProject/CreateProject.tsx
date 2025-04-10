import React from "react";
import "./CreateProject.css";

const steps = [
  {
    text: "Go to Spring Initializr",
    link: "https://start.spring.io/",
  },
  { text: "Select Project: Maven" },
  { text: "Select Language: Java" },
  { text: "Choose Spring Boot Version" },
  { text: "Choose Java Version" },
  {
    text: "Add Dependencies: Web, DevTools, Lombok, JPA, MySQL, etc.",
  },
  { text: "Create Packages for Entity, Repository, Service, Controller, Exception, Utility, Secirity etc." },
];

const CreateProject: React.FC = () => {
  return (
    <div className="project-container">
      <h1>Create Spring Boot Project</h1>
      <div className="project-section">
        <h2>Steps to Follow</h2>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              {step.link ? (
                <a href={step.link} target="_blank" rel="noopener noreferrer">
                  {step.text}
                </a>
              ) : (
                step.text
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateProject;
