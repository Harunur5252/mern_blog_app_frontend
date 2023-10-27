function BlogCover() {
  return (
    <div
      className="site-cover site-cover-sm same-height overlay single-page"
      style={{ backgroundImage: "url('../images/hero_5.jpg')" }}
    >
      <div className="container">
        <div className="row same-height justify-content-center">
          <div className="col-md-6">
            <div className="post-entry text-center">
              <h1 className="mb-4">
                Don’t assume your user data in the cloud is safe
              </h1>
              <div className="post-meta align-items-center text-center">
                <figure className="author-figure mb-0 me-3 d-inline-block">
                  <img
                    src="../images/person_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <span className="d-inline-block mt-1">By Carl Atkinson</span>
                <span>&nbsp;-&nbsp; February 10, 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCover