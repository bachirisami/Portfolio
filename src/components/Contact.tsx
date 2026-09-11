export default function Contact() {
  return (
    <div className="container-narrow">
        <p className="comment-header">
          <span className="slashes"># </span>
          <span className="keyword">contact</span>
        </p>
        <h2 className="section-title">Let's talk</h2>

        <div className="terminal">
          <div className="term-line">
            <span className="term-prompt">$</span>
            <span className="term-output">whoami</span>
          </div>
          <div className="term-line">
            <span className="term-output">Sami Bachiri — Junior Software Developer</span>
          </div>
          <div className="term-line mt-3">
            <span className="term-prompt">$</span>
            <span className="term-output">contact</span>{' '}
            <span className="term-flag">--email</span>
          </div>
          <div className="term-line">
            <a href="mailto:bachirisami84@gmail.com">bachirisami84@gmail.com</a>
          </div>
          <div className="term-line mt-3">
            <span className="term-prompt">$</span>
            <span className="term-output">contact</span>{' '}
            <span className="term-flag">--phone</span>
          </div>
          <div className="term-line">
            <a href="tel:+32474180624">0474 18 06 24</a>
          </div>
          <div className="term-line mt-3">
            <span className="term-prompt">$</span>
            <span className="term-output">contact</span>{' '}
            <span className="term-flag">--linkedin</span>
          </div>
          <div className="term-line">
            <a
              href="https://www.linkedin.com/in/sami-bachiri"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sami-bachiri
            </a>
          </div>
          <div className="term-line mt-3">
            <span className="term-prompt">$</span>
            <span className="term-output">contact</span>{' '}
            <span className="term-flag">--github</span>
          </div>
          <div className="term-line">
            <a
              href="https://github.com/bachirisami"
              target="_blank"
              rel="noreferrer"
            >
              github.com/bachirisami
            </a>
          </div>
          <div className="term-line mt-3">
            <span className="term-prompt">$</span>
            <span className="term-output">contact</span>{' '}
            <span className="term-flag">--cv</span>
          </div>
          <div className="term-line">
            <a href="/Sami_Bachiri_CV.pdf" download>
              download résumé (.pdf)
            </a>
          </div>
          <div className="term-line mt-3">
            <span className="term-prompt">$</span>
            <span className="term-cursor"></span>
          </div>
        </div>
      </div>
  );
}
