import React from 'react';
import './GitHub.css';

const gitCommands = [
  {
    title: "🔧 Leave as contributor from someone else repository in Git",
    command: "https://github.com/settings/repositories",
    description: "Leave as contributor from someone else repository in Git.",
  },
  {
    title: "🔧 Initialize Repository",
    command: "git init",
    description: "Initialize a new Git repository in the current directory.",
  },
  {
    title: "➕ Add Files to Staging",
    command: "git add .",
    description: "Add all changes to staging (use `git add <file>` to add specific files).",
  },
  {
    title: "✅ Commit Changes",
    command: 'git commit -m "Your message here"',
    description: "Commit the staged changes with a message.",
  },
  {
    title: "🔍 Check Status",
    command: "git status",
    description: "Show the current status of your working directory and staging area.",
  },
  {
    title: "📂 Create Branch",
    command: "git branch branch-name",
    description: "Create a new branch.",
  },
  {
    title: "🌿 Switch Branch",
    command: "git checkout branch-name",
    description: "Switch to a different branch.",
  },
  {
    title: "🔁 Create & Switch Branch",
    command: "git checkout -b branch-name",
    description: "Create and immediately switch to a new branch.",
  },
  {
    title: "⬆️ Push to Remote",
    command: "git push origin branch-name",
    description: "Push your commits to a remote repository.",
  },
  {
    title: "⬇️ Pull from Remote",
    command: "git pull origin branch-name",
    description: "Pull changes from the remote branch.",
  },
  {
    title: "🔁 Clone Repository",
    command: "git clone <repo-url>",
    description: "Clone an existing remote repository.",
  },
  {
    title: "🔗 Add Remote",
    command: "git remote add origin <repo-url>",
    description: "Link your local repository to a remote origin.",
  },
  {
    title: "📝 Rename Branch",
    command: "git branch -m new-branch-name",
    description: "Rename the current branch.",
  },
  {
    title: "🧹 Delete Local Branch",
    command: "git branch -d branch-name",
    description: "Delete a local branch (must be merged first).",
  },
  {
    title: "🚮 Force Delete Local Branch",
    command: "git branch -D branch-name",
    description: "Force delete a local branch (even if not merged).",
  },
  {
    title: "🧼 Remove Cached Files",
    command: "git rm --cached <file>",
    description: "Remove file from Git tracking but keep it locally.",
  },
  {
    title: "📜 View Git Logs",
    command: "git log",
    description: "Shows the commit history of the current branch.",
  },
  {
    title: "📜 Pretty Log (One Line)",
    command: "git log --oneline",
    description: "Compact view: one commit per line.",
  },
  {
    title: "📅 Log with Graph",
    command: "git log --oneline --graph --all",
    description: "Shows log with a branching graph.",
  },
  {
    title: "🔍 Log for Specific File",
    command: "git log <file>",
    description: "Shows commit history for a specific file.",
  },
  {
    title: "🔍 Show Specific Commit",
    command: "git show <commit-hash>",
    description: "Display detailed changes in a particular commit.",
  },
  {
    title: "🍒 Cherry Pick",
    command: "git cherry-pick <commit-hash>",
    description: "Apply the changes from a specific commit on another branch.",
  },
  {
    title: "🍒 Abort Cherry Pick",
    command: "git cherry-pick --abort",
    description: "Abort the cherry-pick operation if conflicts occur.",
  },
  {
    title: "🧪 Stash Changes",
    command: "git stash",
    description: "Temporarily save changes without committing.",
  },
  {
    title: "📂 List Stashes",
    command: "git stash list",
    description: "View all stashed changes.",
  },
  {
    title: "📥 Apply Stash",
    command: "git stash apply",
    description: "Re-apply the latest stash without removing it.",
  },
  {
    title: "📥 Apply Specific Stash",
    command: "git stash apply stash@{n}",
    description: "Apply a specific stash from the stash list.",
  },
  {
    title: "🗑️ Drop Stash",
    command: "git stash drop",
    description: "Remove the latest stash.",
  },
  {
    title: "🗑️ Drop Specific Stash",
    command: "git stash drop stash@{n}",
    description: "Remove a specific stash.",
  },
  {
    title: "🏷️ List Tags",
    command: "git tag",
    description: "List all tags in the repository.",
  },
  {
    title: "🏷️ Create Tag",
    command: "git tag v1.0",
    description: "Create a lightweight tag named `v1.0`.",
  },
  {
    title: "🏷️ Create Annotated Tag",
    command: "git tag -a v1.0 -m 'Version 1.0'",
    description: "Create a tag with a message and metadata.",
  },
  {
    title: "🏷️ Push Tag",
    command: "git push origin v1.0",
    description: "Push a specific tag to remote.",
  },
  {
    title: "🏷️ Push All Tags",
    command: "git push origin --tags",
    description: "Push all local tags to remote.",
  },
];

const GitHub: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="github-container">
      <h1>🐙 Git & GitHub Commands</h1>
      {gitCommands.map((cmd, idx) => (
        <div className="git-block" key={idx}>
          <div className="git-header">
            <h2>{cmd.title}</h2>
            <button onClick={() => copyToClipboard(cmd.command)}>Copy</button>
          </div>
          <pre><code>{cmd.command}</code></pre>
          <p className="description">{cmd.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GitHub;
