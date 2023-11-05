export default function Hero() {
    const BgImage = {
        backgroundImage:"/img/bg/8.png"
    }
    return (
        <div className="banner-area bg-relative banner-area-2 bg-cover" style={BgImage} >
            <div className="container">
      <div className="flex flex-row">
        <div className="lg:w-1/2 self-center">
          <div className="banner-inner pe-xl-5">
            <h6 className="subtitle wow animate__fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">Designing for the future</h6>
            <h2 className="title wow animate__fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.4s"> Welcome to  <span>SnapEquity!</span></h2>
            <p className="content pe-xl-5 wow animate__fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">Capture, Analyze, and Compare - Unleashing the power of AI to redefine real estate property valuation and comparables (comps).</p>
            <a className="btn btn-border-base wow animate__fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.6s" href="about.html">Discover More <i className="fa fa-plus"></i></a>
            <div className="inline-block self-center wow animate__fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.7s">
              <a className="video-play-btn-hover" href="https://www.youtube.com/embed/Wimkqo8gDZ0"> <h6 className="inline-block ml-3">how we work</h6></a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-9 wow animate__fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
          <div className="banner-thumb-2 mt-4 mt-lg-0">
            <img className="banner-animate-img banner-animate-img-4" src="/img/banner-2/3.png" alt="img" />
            <div className="main-img-wrap">
              <img className="banner-animate-img banner-animate-img-1 left_image_bounce" src="/img/banner-2/4.png" alt="img" />
              <img className="banner-animate-img banner-animate-img-2 left_image_bounce" src="/img/banner-2/5.png" alt="img" />
              <img className="banner-animate-img banner-animate-img-3 top_image_bounce" src="/img/banner-2/2.png" alt="img" />
              <img className="main-img" src="/img/banner-2/1.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}