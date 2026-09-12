import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="row align-items-center gy-5">
      <div className="col-12 col-lg-7">
        <h1 className="hero-name">Sami Bachiri</h1>
        <p className="hero-role">Junior Software Developer — Zonhoven, Belgium</p>
        <p className="hero-lede mt-0">
          I'm an enthusiastic junior developer working across the stack — comfortable
          building interfaces and the systems behind them. Right now I'm looking for a
          team where I can sharpen my skills, ship real features, and keep growing.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn-term filled">
            Get in touch
          </Link>
          <Link to="/projects" className="btn-term">
            See my projects
          </Link>
          <a
            href="/Sami_Bachiri_CV.pdf"
            target="_blank"
            className="btn-term"
          >
            View CV
          </a>
        </div>
      </div>

      <div className="col-12 col-lg-5">
        <div className="ide-window mini">
          <div className="ide-titlebar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ide-filename">about.ts</span>
          </div>
          <div className="ide-body">
            <div className="code-line">
              <span className="line-no">1</span>
              <span className="code-content">
                <span className="tok-key">const</span> <span className="tok-var">profile</span> <span className="tok-punc">=</span> {'{'}
              </span>
            </div>
            <div className="code-line">
              <span className="line-no">2</span>
              <span className="code-content">
                {'  '}stack<span className="tok-punc">:</span> [<span className="tok-str">"frontend"</span>
                <span className="tok-punc">,</span> <span className="tok-str">"backend"</span>]<span className="tok-punc">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-no">3</span>
              <span className="code-content">
                {'  '}based<span className="tok-punc">:</span> <span className="tok-str">"Belgium"</span>
                <span className="tok-punc">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-no">4</span>
              <span className="code-content">
                {'  '}languages<span className="tok-punc">:</span> [<span className="tok-str">"NL"</span>
                <span className="tok-punc">,</span> <span className="tok-str">"FR"</span>
                <span className="tok-punc">,</span> <span className="tok-str">"EN"</span>]<span className="tok-punc">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-no">5</span>
              <span className="code-content">
                {'  '}open_to<span className="tok-punc">:</span> <span className="tok-str">"junior dev roles"</span>
                <span className="tok-punc">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-no">6</span>
              <span className="code-content">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
