import React from "react";
import "./InstallTools.css";

const tools = [
  { name: "Java 17+", url: "https://www.youtube.com/watch?v=ykAhL1IoQUM" },
  { name: "STS", url: "https://www.youtube.com/watch?v=Izsb9t7ySe0" },
  { name: "IntelliJ IDEA", url: "https://www.youtube.com/watch?v=oJ9OdOgdTIg" },
  { name: "MySQL", url: "https://www.youtube.com/watch?v=hiS_mWZmmI0" },
  { name: "PostgreSQL", url: "http://youtube.com/watch?v=SBEtF7EfY6w" },
];

const InstallTools: React.FC = () => {
  return (
    <div className="install-tools-container">
      <h2>Installing Tools</h2>
      <ul className="tools-list">
        {tools.map((tool, index) => (
          <li key={index}>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              {tool.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstallTools;
