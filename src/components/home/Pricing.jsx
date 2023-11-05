export default function Pricing() {
    return (
        <div className="pricing-area pt-20 pb-20">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Pricing plan</h6>
            <h2 className="title">Best plan to get our <span>Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="single-pricing-inner">
                <div className="price-header text-center mb-4 md:mb-0">
                  <h5>Started</h5>
                  <h2 className="mb-3">$19 <sub>/mo</sub></h2>
                </div>
                <ul>
                  <li><i className="fa fa-check"></i>Mobile App Development</li>
                  <li><i className="fa fa-check"></i>Branding & Identity</li>
                  <li><i className="fa fa-check"></i>Email Marketing & Automation</li>
                  <li><i className="fa fa-check"></i>E-commerce Solutions</li>
                  <li className="hidden"><i className="fa fa-check"></i>Social Media Management</li>
                  <li className="hidden"><i className="fa fa-check"></i>Video & Animation Production </li>
                </ul>
                <a className="btn btn-border-gray border-radius-0 w-100" href="#">Started</a>
              </div>
            </div>
            <div className="col-span-1">
              <div className="single-pricing-inner price-active">
                <div className="price-header text-center mb-4 md:mb-0">
                  <h5>Professional</h5>
                  <h2 className="mb-3">$29 <sub>/mo</sub></h2>
                </div>
                <ul>
                  <li><i className="fa fa-check"></i>Mobile App Development</li>
                  <li><i className="fa fa-check"></i>Branding & Identity</li>
                  <li><i className="fa fa-check"></i>Email Marketing & Automation</li>
                  <li><i className="fa fa-check"></i>E-commerce Solutions</li>
                  <li className="hidden"><i className="fa fa-check"></i>Social Media Management</li>
                  <li className="hidden"><i className="fa fa-check"></i>Video & Animation Production </li>
                </ul>
                <a className="btn btn-border-gray border-radius-0 w-100" href="#">Professional</a>
              </div>
            </div>
            <div className="col-span-1">
              <div className="single-pricing-inner">
                <div className="price-header text-center mb-4 md:mb-0">
                  <h5>Enterprise</h5>
                  <h2 className="mb-3">$39 <sub>/mo</sub></h2>
                </div>
                <ul>
                  <li><i className="fa fa-check"></i>Mobile App Development</li>
                  <li><i className="fa fa-check"></i>Branding & Identity</li>
                  <li><i className="fa fa-check"></i>Email Marketing & Automation</li>
                  <li><i className="fa fa-check"></i>E-commerce Solutions</li>
                  <li className="hidden"><i className="fa fa-check"></i>Social Media Management</li>
                  <li className="hidden"><i className="fa fa-check"></i>Video & Animation Production </li>
                </ul>
                <a className="btn btn-border-gray border-radius-0 w-100" href="#">Enterprise</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}