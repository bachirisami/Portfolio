const school = [
  {
    date: "2025 - 2026",
    role: "Academic Bridging Programme, Computer Science",
    org: "UHasselt",
    place: "Diepenbeek, Belgium",
  },
  {
    date: "2022 - 2025",
    role: "Bachelor of Applied Computer Science",
    org: "PXL — Application Development",
    place: "Hasselt, Belgium",
  },
  {
    date: "04/2024",
    role: "Internationalization - Mobile Tech for a Changing World",
    org: "Cardiff Metropolitan University",
    place: "Cardiff, UK",
  },
  {
    date: "2021 - 2022",
    role: "Bachelor of Science in Computer Science",
    org: "UHasselt",
    place: "Diepenbeek, Belgium",
  },
  {
    date: "2015 - 2021",
    role: "Science - Mathematics",
    org: "Sint-Jan-Bergmansinstituut",
    place: "Zonhoven, Belgium",
  },
];

export default function Education() {
  return (
    <div className="container-wide">
      <p className="comment-header">
        <span className="slashes">// </span>
        <span className="keyword">education</span>
      </p>
      <h2 className="section-title">Where I've studied</h2>

      <div className="timeline">
        {school.map((s) => (
          <div className="timeline-item" key={s.role}>
            <div className="timeline-date">{s.date}</div>
            <div className="timeline-role">{s.role}</div>
            <div className="timeline-org">{s.org}</div>
            <div className="timeline-place mb-0">{s.place}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
