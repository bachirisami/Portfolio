import Reveal from './Reveal';

const modules = [
  { name: "python", items: ["Django"] },
  {
    name: "C#",
    items: [
      "ASP.NET",
      "ASP MVC",
      "Blazor",
      ".NET Core",
      ".NET MAUI",
      "WPF",
      "Microservices",
    ],
  },
  { name: "java", items: ["Spring Boot", "Microservices"] },
  { name: "php", items: ["Symfony", "Laravel"] },
  {
    name: "web dev",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Angular",
      "Express",
    ],
  },
  { name: "markup", items: ["HTML/CSS", "Bootstrap", "Tailwind"] },
  { name: "systems", items: ["C/C++"] },
  {
    name: "databases",
    items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Snowflake"],
  },
  {
    name: "tooling",
    items: [
      "Linux",
      "Windows Server",
      "Docker",
      "Git",
      "Azure DevOps",
      "MS Office",
    ],
  },
];

const accents = ['var(--teal)', 'var(--gold)', 'var(--rose)', 'var(--violet)', 'var(--coral)'];

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const moduleIconUrl: Record<string, string> = {
  python: `${DEVICON}/python/python-original.svg`,
  'C#': `${DEVICON}/csharp/csharp-original.svg`,
  java: `${DEVICON}/java/java-original.svg`,
};

function SqlIcon() {
  return (
    <svg className="module-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ModuleIcon({ name }: { name: string }) {
  if (name === 'databases') return <SqlIcon />;
  const url = moduleIconUrl[name];
  if (!url) return null;
  return <img src={url} alt="" className="module-icon" loading="lazy" />;
}

export default function Skills() {
  return (
    <div className="container-wide">
      <p className="comment-header">
        <span className="slashes">// </span>
        <span className="keyword">skills</span>
      </p>
      <h2 className="section-title">What I work with</h2>

      <div className="row">
        {modules.map((m, i) => (
          <div className="col-12 col-md-6" key={m.name}>
            <Reveal delay={i * 60}>
              <div
                className="skill-module"
                style={{ '--accent': accents[i % accents.length] } as React.CSSProperties}
              >
                <div className="skill-module-name">
                  <ModuleIcon name={m.name} />
                  <span className="punc">import &#123; </span>
                  {m.items.length} tools
                  <span className="punc"> &#125; from </span>"{m.name}"
                </div>
                <div>
                  {m.items.map((item) => (
                    <span className="tag-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
