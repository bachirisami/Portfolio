function calculateAge(birthDate: string): number {
  const [day, month, year] = birthDate.split("/").map(Number);
  const dob = new Date(year, month - 1, day);
  const diff = new Date(Date.now() - dob.getTime());
  return Math.abs(diff.getUTCFullYear() - 1970);
}

export default function About() {
  const age = calculateAge("07/04/2003");

  return (
    <div className="container-wide">
      <p className="comment-header">
        <span className="slashes">// </span>
        <span className="keyword">about</span>
      </p>
      <h2 className="section-title">A bit about me</h2>

      <div className="row gy-4">
        <div className="col-12 col-md-7">
          <p style={{ color: "var(--text-dim)", maxWidth: "60ch" }}>
            I studied computer science across UHasselt and PXL. Along the way, I
            picked up a habit of trying new frameworks and languages instead of
            sticking to one, which is why my toolbox spans from Django to Blazor
            to React. I like working on both ends of an app: the interface
            someone actually touches and the database and services quietly doing
            the work behind it.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <dl className="fact-list mb-0">
            <dt>age</dt>
            <dd>{age}</dd>
            <dt>location</dt>
            <dd>Zonhoven, Belgium</dd>
            <dt>languages</dt>
            <dd>Dutch, English</dd>
            <dt>license</dt>
            <dd>Driving licence B</dd>
            <dt>outside of code</dt>
            <dd className="mb-0">Gaming, reading, watching shows</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
