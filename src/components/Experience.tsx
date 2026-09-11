const roles = [
  {
    date: "02/2025 — 05/2025",
    role: "Software Developer Intern",
    org: "iBeauty",
    place: "Hasselt, Belgium",
    desc: "Built a new portal giving users a clear overview of data from the master database, including salon locations, featured products, and news updates.",
  },
];

export default function Experience() {
  return (
    <div className="container-wide">
      <p className="comment-header">
        <span className="slashes">// </span>
        <span className="keyword">experience</span>
      </p>
      <h2 className="section-title">Where I've worked</h2>

      <div className="timeline">
        {roles.map((r) => (
          <div className="timeline-item" key={r.org}>
            <div className="timeline-date">{r.date}</div>
            <div className="timeline-role">{r.role}</div>
            <div className="timeline-org">{r.org}</div>
            <div className="timeline-place">{r.place}</div>
            <p className="timeline-desc mb-0">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
