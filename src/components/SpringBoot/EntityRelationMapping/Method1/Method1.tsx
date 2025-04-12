import React from 'react';
import './Method1.css';
const Method1: React.FC = () => {
  const copyCode = (id: string) => {
    const codeElement = document.getElementById(id);
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent || '');
    }
  };

  return (
    <div className="one-to-many-container">
      <h1>🔗 One-to-Many Relationship (User - Post)</h1>

      {/* User Entity */}
      <div className="code-block">
        <div className="code-header">
          <h2>👤 User Entity</h2>
          <button onClick={() => copyCode('user-entity')}>Copy</button>
        </div>
        <pre>
          <code id="user-entity">
{`@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @OneToMany(mappedBy = "user")
  @JsonIgnore
  private List<Post> posts;
}`}
          </code>
        </pre>
      </div>

      {/* Post Entity */}
      <div className="code-block">
        <div className="code-header">
          <h2>📝 Post Entity</h2>
          <button onClick={() => copyCode('post-entity')}>Copy</button>
        </div>
        <pre>
          <code id="post-entity">
{`@Entity
@Data
public class Post {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long id;

  private String description;

  @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JsonIgnore
  private User user;
}`}
          </code>
        </pre>
      </div>

      {/* Description */}
      <div className="description-box">
        <h2>🧠 Relationship Explanation</h2>
        <p>
          In this setup, one <strong>User</strong> can have multiple <strong>Post</strong> entries, but each <strong>Post</strong> is associated with only one <strong>User</strong>.
        </p>
        <ul>
          <li><code>@OneToMany</code> in <strong>User</strong> denotes the one-to-many side.</li>
          <li><code>@ManyToOne</code> in <strong>Post</strong> establishes the many-to-one reference.</li>
          <li><code>mappedBy = "user"</code> tells Hibernate that the <strong>User</strong> entity is not the owner of the relationship.</li>
          <li><code>@JsonIgnore</code> avoids infinite recursion during serialization (especially useful with REST APIs).</li>
        </ul>
      </div>
    </div>
  );
};

export default Method1;
