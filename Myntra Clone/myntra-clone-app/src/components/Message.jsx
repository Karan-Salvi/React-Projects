import { Link } from "react-router-dom";
const Message = () => {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">
          Sorry Bag has no items...
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link to="/">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 me-sm-3"
                fdprocessedid="r0r4df"
              >
                Go for shopping
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              fdprocessedid="qyfkb"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
