import React from 'react';

export default function Contact() {
  return (
    <section className="section" id="contact" data-screen-label="04 Contact">
      <div className="shell">
        <div className="contact">
          <div className="section-num">
            <strong>§ 04</strong> contact
          </div>
          <div>
            <h2>
              Let&apos;s <span className="serif">build</span>
              <br />
              <span className="stroke">something.</span>
            </h2>

            <div className="contact-links" style={{ textAlign: 'left' }}>
              <a href="mailto:javonkitson@gmail.com">
                <span>
                  <span className="k">email</span>
                  <br />
                  <span style={{ fontSize: 18 }}>javonkitson@gmail.com</span>
                </span>
                <span className="arrow">↗</span>
              </a>
              <a href="/JavonKResumev4.pdf" target="_blank" rel="noreferrer">
                <span>
                  <span className="k">resume</span>
                  <br />
                  <span style={{ fontSize: 18 }}>JavonKResumev4.pdf</span>
                </span>
                <span className="arrow">↗</span>
              </a>
              <a href="https://github.com/noface-0" target="_blank" rel="noreferrer">
                <span>
                  <span className="k">code</span>
                  <br />
                  <span style={{ fontSize: 18 }}>github.com/noface-0</span>
                </span>
                <span className="arrow">↗</span>
              </a>
              <a href="https://linkedin.com/in/javonkitson" target="_blank" rel="noreferrer">
                <span>
                  <span className="k">network</span>
                  <br />
                  <span style={{ fontSize: 18 }}>linkedin / javonkitson</span>
                </span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
