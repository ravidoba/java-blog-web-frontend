import React from 'react';
import './DatabaseConfig.css';

const DatabaseConfig: React.FC = () => {
  const copyToClipboard = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      navigator.clipboard.writeText(el.textContent || '');
    }
  };

  const configs = [
    {
      id: 'mysql-config',
      title: '🐬 MySQL Configuration',
      content: `# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/demo_database
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Hibernate Properties
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`,
      dependency: `<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <scope>runtime</scope>
</dependency>`,
    },
    {
      id: 'postgresql-config',
      title: '🐘 PostgreSQL Configuration',
      content: `# PostgreSQL Configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/demo_database
spring.datasource.username=postgres
spring.datasource.password=root
spring.datasource.driver-class-name=org.postgresql.Driver

# Hibernate Properties
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`,
      dependency: `<dependency>
  <groupId>org.postgresql</groupId>
  <artifactId>postgresql</artifactId>
  <scope>runtime</scope>
</dependency>`,
    },
    {
      id: 'mssql-config',
      title: '🧩 Microsoft SQL Server Configuration',
      content: `# MSSQL Configuration
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=demo_database
spring.datasource.username=sa
spring.datasource.password=yourStrong(!)Password
spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver

# Hibernate Properties
spring.jpa.database-platform=org.hibernate.dialect.SQLServerDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`,
      dependency: `<dependency>
  <groupId>com.microsoft.sqlserver</groupId>
  <artifactId>mssql-jdbc</artifactId>
  <scope>runtime</scope>
</dependency>`,
    },
    {
      id: 'mongodb-config',
      title: '🍃 MongoDB Configuration',
      content: `# MongoDB Configuration
spring.data.mongodb.uri=mongodb://localhost:27017/demo_database`,
      dependency: `<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>`,
    },
  ];

  return (
    <div className="database-config-container">
      <h1>🔗 Database Configuration</h1>

      {configs.map(({ id, title, content, dependency }, idx) => (
        <div className="code-block" key={idx}>
          <div className="code-header">
            <h2>{title}</h2>
            <button onClick={() => copyToClipboard(id + '-content')}>Copy Config</button>
          </div>
          <pre>
            <code id={id + '-content'}>{content}</code>
          </pre>

          <div className="code-header">
            <h3>📦 Dependency</h3>
            <button onClick={() => copyToClipboard(id + '-dependency')}>Copy Dependency</button>
          </div>
          <pre>
            <code id={id + '-dependency'}>{dependency}</code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default DatabaseConfig;
