import React from 'react';
import { useParams } from 'react-router-dom';
import './PackageDetail.css';
import { packageData } from '../../../../data/package-data'; // adjust the path if needed

const PackageDetail: React.FC = () => {
  const { packageName } = useParams<{ packageName: string }>();

  const pkg = packageData.find(pkg => pkg.name === packageName);

  if (!pkg) {
    return (
      <div className="sdk-packages-container">
        <h1>Package Details</h1>
        <p>Package not found: {packageName}</p>
      </div>
    );
  }

  return (
    <div className="sdk-packages-container">
      <h1>{pkg.name}</h1>
      <p>{pkg.description}</p>

      <h2>Classes & Methods</h2>
      {pkg.classes.map(cls => (
        <div key={cls.name} className="class-block">
          <h3>{cls.name}</h3>
          <ul>
            {cls.methods.map((method, idx) => (
              <li key={idx}>{method}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PackageDetail;
