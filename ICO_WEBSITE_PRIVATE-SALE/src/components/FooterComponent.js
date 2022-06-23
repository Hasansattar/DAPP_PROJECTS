import React from "react";

const FooterComponent = () => {
  return (
    <footer className="nk-footer customize-bg section-connect">
      <div className="section section-footer section-s tc-light bg-black ">
        <div className="container">
          <div className="nk-block block-footer">
            <div className="row">
              <div className="col">
                <div className="wgs wgs-text text-center mb-3">
                  {" "}
                  {/* <ul className="social pdb-m justify-content-center">
                                                    <li><a href="#"><em className="social-icon fab fa-facebook-f"></em></a></li>
                                                    <li><a href="#"><em className="social-icon fab fa-twitter"></em></a></li>
                                                    <li><a href="#"><em className="social-icon fab fa-youtube"></em></a></li>
                                                    <li><a href="#"><em className="social-icon fab fa-github"></em></a></li>
                                                    <li><a href="#"><em className="social-icon fab fa-bitcoin"></em></a></li>
                                                    <li><a href="#"><em className="social-icon fab fa-medium-m"></em></a></li>
                                                </ul> */}{" "}
                  <div className="copyright-text copyright-text-s3 pdt-m">
                    <p>
                      {" "}
                      <span className="d-sm-block">
                        {" "}
                        Copyright & copy; 2022, Ride of Gamers.{" "}
                      </span>
                      All trademarks and copyrights belong to their respective
                      owners.
                    </p>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="poweredBy">
            <p className="text-yellow-500">
              {" "}
              Powered by: & nbsp;{" "}
              <a href="#" className="text-blue-600 hover:text-blue-200">
                <i> kryptonchain </i>{" "}
              </a>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default FooterComponent;
