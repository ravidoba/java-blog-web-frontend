import React from 'react';
import { Link } from 'react-router-dom';
import './Versions.css';

const Versions: React.FC = () => {
  const versionCount = 24;
  const versions = Array.from({ length: versionCount }, (_, i) => i + 1);

  return (
    <div className="versions-container">
      <h1>Java Versions</h1>
      <div className="button-grid">
        {versions.map((version) => (
          <Link to={`/version/${version}`} key={version}>
            <button className="button">Version {version}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Versions;
