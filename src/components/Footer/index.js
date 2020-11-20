import "./css/index.css";
function Component4(props) {
  return (
    <div
      className="container-fluid"
    >
      <div className="row c4-row-div">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 image-logo_col-footer">
          <img
            src="https://skyspaces.io/static/media/Sia.7dd07c88.svg"
            height="50"
            width="50"
          />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
          <div className="colm2-main-div">
            {/* donate */}
            <span className="span-donate">Donate</span>
            {/* Privacy */}
            <span className="span-privacy">Privacy</span>
            {/* Terms */}
            <span className="span-terms">Terms</span>
            {/* twitter icon */}
            <span className="span-twitter">
              <i class="fab fa-twitter"></i>
            </span>
            {/* discord */}
            <span className="span-twitter">
              <i class="fab fa-discord"></i>
            </span>
            {/* comment icon */}
            <span className="span-twitter">
              <i class="far fa-comment"></i>
            </span>
            {/* envelop icon */}
            <span className="span-twitter">
              <i class="far fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-2 col-12"></div>
      </div>
    </div>
  );
}
export default Component4;
