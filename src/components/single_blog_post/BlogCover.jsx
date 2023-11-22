import dayjs from "dayjs";

function BlogCover({ blog, dashboardUser }) {
  return (
    <div
      className="site-cover site-cover-sm same-height overlay single-page"
      style={{ backgroundImage: `url(${blog?.blogImg})` }}
    >
      <div className="container">
        <div className="row same-height justify-content-center">
          <div className="col-md-6">
            <div className="post-entry text-center">
              <h1 className="mb-4">{blog?.title}</h1>
              <div className="post-meta align-items-center text-center">
                <figure className="author-figure mb-0 me-3 d-inline-block">
                  <img
                    src={dashboardUser?.profile?.image}
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">
                  By {dashboardUser?.profile?.firstName}{" "}
                  {dashboardUser?.profile?.lastName}
                </span>
                <span>
                  &nbsp;-&nbsp;{" "}
                  {dayjs(blog?.publishDate).format("DD/MMMM/YYYY")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCover;
