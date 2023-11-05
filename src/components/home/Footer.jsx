const Footer = () => {
    return (
      <footer className="footer-area footer-area-2 bg-gray mt-0 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                {/* <div className="thumb">
                  <img src="/img/logo.png" alt="img" />
                </div> */}
                <div className="details">
                  <p>Melbourne is simply is dumiomy is text Lorem Ipsum is simply</p>
                  <div className="subscribe mt-4">
                    <input type="text" placeholder="E-mail" />
                    <button><i className="fas fa-chevron-right"></i></button>
                  </div>
                </div>
              </div>
                    </div>
                    <div className="flex justify-center ">
            <div className="grid grid-cols-3 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li><a href="service.html"><i className="fas fa-chevron-right"></i> Ui Design</a></li>
                  <li><a href="service.html"><i className="fas fa-chevron-right"></i> Web design</a></li>
                  <li><a href="service.html"><i className="fas fa-chevron-right"></i> Digital marketing</a></li>
           
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-3 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Pay links</h4>
                <ul>
                  <li><a href="service.html"><i className="fas fa-chevron-right"></i> Credit industries</a></li>
                  <li><a href="service.html"><i className="fas fa-chevron-right"></i> Research sector</a></li>
                  <li><a href="service.html"><i className="fas fa-chevron-right"></i> Finance Sector</a></li>
               
                </ul>
              </div>
            </div>
            <div className="">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <div className="widget widget_contact">
                  <ul className="details">
                    <li><i className="fa fa-map-marker-alt"></i>4517 Washington Ave. Manchester, Kentucky 39495</li>
                    <li className="mt-3"><i className="fa fa-phone-alt"></i> (+888) 123 456 765</li>
                    <li className="mt-2"><i className="fas fa-envelope"></i> infoname@mail.com</li>
                  </ul>
                  <ul className="social-media mt-4">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                    </div>
                    
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© Yoursitename 2023 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <a href="#">Trams & Condition</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;