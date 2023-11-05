export default function About() {
    return (
        <div className="about-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-6/12 mb-4 mb-lg-0 wow animate__fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
            <div className="about-thumb-inner">
              <img className="main-img" src="/img/about/10.png" alt="img" />
            </div>
          </div>
          <div className="lg:w-6/12 wow animate__fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
            <div className="section-title mb-0">
              <h6 className="sub-title">ABOUT US</h6>
              <h2 className="title">AI-Powered Home Valuation & Real Estate Comps</h2>
              <p className="content mb-4">
              Unleashing the power of AI to redefine real estate property valuation and comparables (comps).
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <ul className="single-list-inner style-check style-heading style-check mb-3">
                  <li><i className="fas fa-check-circle"></i> Dynamic Descriptions</li>
                  <li><i className="fas fa-check-circle"></i> Comp Selection</li>
                </ul>
                <ul className="single-list-inner style-check style-heading style-check mb-3">
                  <li><i className="fas fa-check-circle"></i> Multi Analyze</li>
                  <li><i className="fas fa-check-circle"></i> User-Friendly Interface</li>
                </ul>
              </div>
              <p className="content">
                Spanequity providers typically invest heavily in security measures to protect customer data, such as encryption and multi-factor authentication. However, it is important to research and choose a reputable provider and also to ensure that.
              </p>
              <a className="btn btn-border-base" href="about.html">
                Discover More <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}