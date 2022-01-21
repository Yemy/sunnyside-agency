function Main() {
  return(
    <div className="main">
             {/* <!-- Transform your brand section --> */}
        <section className="transform">
          <div className="row1">
            <div className="transform-col-left">
              <h2>Transform your brand</h2>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <a href="" className="btn1">LEARN MORE</a>
            </div>
            {/* <!-- the egg section --> */}
            <div className="transform-col-right"></div>
          </div>
        </section>
        {/* <!-- Stand out to the right audience section --> */}
        <section className="audience">
          <div className="row2">
            {/* <!-- wine glass --> */}
            <div className="audience-col-left"></div>
            <div className="audience-col-right">
              <h2>Stand out to the right audience</h2>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <a href="" className="btn1">LEARN MORE</a>
            </div>
          </div>
        </section>
        {/* <!-- apple section --> */}
        <section className="skill">
          <div className="row2">
            <div className="skill-col-design">
              <div className="layer-design">
                <h3>Graphic Design</h3>
                <p>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </p>
              </div>
            </div>
            {/* <!-- orange --> */}
            <div className="skill-col-photo">
              <div className="layer-photo">
                <h3>Photography</h3>
                <p>
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
} 
export default Main;


