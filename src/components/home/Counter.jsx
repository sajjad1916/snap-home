export default function Counter() {
    return (
        <div className="counter-area bg-relative bg-cover pt-110 pb-100" style={{ backgroundImage: 'url("/img/bg/10.png")' }}>
        <div className="container pb-90">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-1 wow animate__fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">
              <div className="single-counter-inner media">
                <div className="thumb media-left pr-4">
                  <img src="/img/icon/16.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h4 className="mb-1"><span className="counter">200</span>+</h4>
                  <p className="mb-0">Team member</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1 wow animate__fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="single-counter-inner media">
                <div className="thumb media-left pr-4">
                  <img src="/img/icon/17.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h4 className="mb-1"><span className="counter">10</span>k+</h4>
                  <p className="mb-0">Team member</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1 wow animate__fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
              <div className="single-counter-inner media">
                <div className="thumb media-left pr-4">
                  <img src="/img/icon/18.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h4 className="mb-1"><span className="counter">200</span>+</h4>
                  <p className="mb-0">Team member</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1 wow animate__fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
              <div className="single-counter-inner media">
                <div className="thumb media-left pr-4">
                  <img src="/img/icon/19.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h4 className="mb-1"><span className="counter">200</span>+</h4>
                  <p className="mb-0">Team member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}