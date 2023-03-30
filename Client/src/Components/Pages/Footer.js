function Footer() {
    return ( <div>
         <footer>
          <div className="container">
            <div className="row pt-90 pb-90 justify-content-center">
              <div className="col-lg-3 col-sm-6 order-lg-1 order-2 d-flex justify-content-sm-start justify-content-start">
                <div className="footer-items contact ">
                  <h3>Contacts</h3>
                  <div className="hotline mb-30">
                    <div className="hotline-icon">
                      <img src="assets/images/icon/phone-icon.svg" alt="" />
                    </div>
                    <div className="hotline-info">
                      <h6 className="mb-10"><a href="tel:+8801761111456">+880 176 1111 456</a></h6>
                      <h6><a href="tel:+8801701111000">+880 170 1111 000</a></h6>
                    </div>
                  </div>
                  <div className="email mb-30">
                    <div className="email-icon">
                      <img src="assets/images/icon/envelope.svg" alt="" />
                    </div>
                    <div className="email-info">
                      <h6 className="mb-10"><a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#b5dcdbd3daf5d0cdd4d8c5d9d09bd6dad8"><span className="__cf_email__" data-cfemail="523b3c343d12372a333f223e377c313d3f">[email&nbsp;protected]</span></a></h6>
                      <h6><a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#84edeae2ebc4f7f1f4f4ebf6f0aae7ebe9"><span className="__cf_email__" data-cfemail="355c5b535a75464045455a47411b565a58">[email&nbsp;protected]</span></a></h6>
                    </div>
                  </div>
                  <div className="email">
                    <div className="email-icon">
                      <img src="assets/images/icon/location.svg" alt="" />
                    </div>
                    <div className="email-info">
                      <h6 className="mb-10"><a>168/170, Avenue 01, Mirpur</a></h6>
                      <h6><a>DOHS, Bangladesh</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center order-lg-2 order-1 justify-content-sm-center justify-content-start">
                <div className="footer-items">
                  <h2>want <span>to keep</span><br />
                    your pet in, <span>our center</span>?</h2>
                  <div className="book-btn2 d-flex justify-content-center text-center">
                    <a className="primary-btn2" href="contact.html">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-end justify-content-start order-3">
                <div className="footer-items opening-time">
                  <h3>Opening Hours</h3>
                  <h6 className="mb-25">Mon - Fri: 9.00AM - 6.00PM</h6>
                  <h6 className="mb-25">Saturday: 9.00AM - 6.00PM</h6>
                  <h6>Sunday: Closed</h6>
                  <ul className="social-icons">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                    <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                    <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-lg-6">
                <div className="copyright-area">
                  <p>© 2023 Scooby is Proudly Powered by <a href="https://www.egenslab.com/">Egens Lab.</a></p>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                <ul className="footer-btm-menu">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div> );
}

export default Footer;