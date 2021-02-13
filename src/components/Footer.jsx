import React from "react";

const Footer = () => {
  const d = new Date();
  return (
    <>
      <footer className="page-footer font-small bg-primary darken-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-3 text-center">
              <p>
                Made with Love <i className="fas fa-heart text-danger"></i> from
                🇳🇬 Precious Solomon Kayili
              </p>
            </div>
            <div className="col-md-12">
              <div className="mb-5 flex-center">
                <a
                  className="fb-ic"
                  href="https://facebook.com/precioussolomon.kayili"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3">
                    {" "}
                  </i>
                </a>

                <a
                  className="tw-ic"
                  href="https://twitter.com/preciouskayili"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3">
                    {" "}
                  </i>
                </a>

                <a
                  className="li-ic"
                  href="https://ng.linkedin.com/in/precious-solomon-kayili-97380a195"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3">
                    {" "}
                  </i>
                </a>

                <a
                  className="ins-ic"
                  href="https://www.instagram.com/preshkayili/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3">
                    {" "}
                  </i>
                </a>

                <a
                  className="pin-ic"
                  href="https://www.pinterest.com/preciouskayili/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-pinterest fa-lg white-text"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © {d.getFullYear()} Copyright:
          <a href="/"> Punch Lines.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
