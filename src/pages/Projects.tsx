import Reveal from '../components/Reveal';

type ProjectLink = {
  label: string;
  url: string;
};

type Project = {
  name: string;
  role: string;
  desc: string;
  tags: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    name: 'Mountain App',
    role: 'full-stack · dockerized',
    desc:
      'A web app for exploring and managing mountain data — browse, add, edit and delete entries with detailed geographical information. A Laravel API and an Angular frontend, both running in Docker alongside a MySQL database.',
    tags: ['Laravel', 'Angular', 'MySQL', 'Docker'],
    links: [{ label: 'view code', url: 'https://github.com/bachirisami/Mountain-app' }],
  },
  {
    name: 'Dokan Karate Club',
    role: 'client website',
    desc:
      'A public website built for a local karate club — covering classes, schedules and information for members and prospective students.',
    tags: ['Web Development'],
    links: [{ label: 'visit dokan.be', url: 'https://www.dokan.be/' }],
  },
];

export default function Projects() {
  return (
    <div className="page">
      <div className="container-wide">
        <p className="comment-header">
          <span className="slashes">// </span>
          <span className="keyword">projects</span>
        </p>
        <h2 className="section-title">Things I've built</h2>

        <div className="row gy-4">
          {projects.map((p, i) => (
            <div className="col-12 col-md-6" key={p.name}>
              <Reveal delay={i * 100}>
                <div className="project-card">
                  <div className="project-name">{p.name}</div>
                  <div className="project-role">{p.role}</div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag-pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.links.map((l) => (
                      <a
                        className="project-link"
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
