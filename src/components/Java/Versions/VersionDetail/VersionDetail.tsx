import React from 'react';
import { useParams } from 'react-router-dom';
import { versionData } from '../../../../data/version-data';
import './VersionDetail.css';

const VersionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const version = id && versionData[id];

  if (!version) {
    return <div className="Version-detail-container">Version data not found.</div>;
  }

  return (
    <div className="Version-detail-container">
      <h1>{version.version}</h1>
      <p><strong>Release Date:</strong> {version.releaseDate}</p>
      <p>{version.summary}</p>

      <h2>Key Features</h2>
      <ul>
        {version.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h2>API Packages</h2>
      <ul>
        {version.apiPackages.map((pkg, index) => (
          <li key={index}>{pkg}</li>
        ))}
      </ul>

      <h2>Notes</h2>
      <ul>
        {version.importantNotes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>

      <img src={version.image} alt={version.version} style={{ maxWidth: '200px', marginTop: '20px' }} />
    </div>
  );
};

export default VersionDetail;
