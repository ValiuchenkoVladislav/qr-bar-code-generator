import GitHubLogo from "~/assets/images/githubLogo.svg";

import "./Footer.scss";


export function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/ValiuchenkoVladislav/qr-bar-code-generator"
        target="_blank" rel="noreferrer"
        className="project_github"
      >
        <GitHubLogo/>
        GitHub
      </a>

      <a href="https://github.com/ValiuchenkoVladislav" target="_blank" rel="noreferrer">
        @valiuchenkovladislav
      </a>
    </footer>
  );
}
