import PopularPosts from '../components/single_blog_post/PopularPosts'
import Tags from '../components/single_blog_post/Tags';
import Categories from "../components/single_blog_post/Categories";

function CategoryWiseBlog({title}) {
  return (
    <>
      <title>{title}</title>
      <div className="section search-result-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">Category: Business</div>
            </div>
          </div>
          <div className="row posts-entry">
            <div className="col-lg-8">
              <div className="blog-entry d-flex blog-entry-search-item">
                <a href="single.html" className="img-link me-4">
                  <img
                    src="../images/img_1_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <span className="date">
                    Apr. 14th, 2022 &bullet; <a href="#">Business</a>
                  </span>
                  <h2>
                    <a href="single.html">
                      Thought you loved Python? Wait until you meet Rust
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <a
                      href="single.html"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>

              <div className="blog-entry d-flex blog-entry-search-item">
                <a href="single.html" className="img-link me-4">
                  <img
                    src="../images/img_2_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <span className="date">
                    Apr. 14th, 2022 &bullet; <a href="#">Business</a>
                  </span>
                  <h2>
                    <a href="single.html">
                      Thought you loved Python? Wait until you meet Rust
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <a
                      href="single.html"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>

              <div className="blog-entry d-flex blog-entry-search-item">
                <a href="single.html" className="img-link me-4">
                  <img
                    src="../images/img_3_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <span className="date">
                    Apr. 14th, 2022 &bullet; <a href="#">Business</a>
                  </span>
                  <h2>
                    <a href="single.html">
                      Thought you loved Python? Wait until you meet Rust
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <a
                      href="single.html"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>

              <div className="blog-entry d-flex blog-entry-search-item">
                <a href="single.html" className="img-link me-4">
                  <img
                    src="../images/img_4_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <span className="date">
                    Apr. 14th, 2022 &bullet; <a href="#">Business</a>
                  </span>
                  <h2>
                    <a href="single.html">
                      Thought you loved Python? Wait until you meet Rust
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <a
                      href="single.html"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>

              <div className="blog-entry d-flex blog-entry-search-item">
                <a href="single.html" className="img-link me-4">
                  <img
                    src="../images/img_5_sq.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <span className="date">
                    Apr. 14th, 2022 &bullet; <a href="#">Business</a>
                  </span>
                  <h2>
                    <a href="single.html">
                      Thought you loved Python? Wait until you meet Rust
                    </a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <a
                      href="single.html"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>

              <div className="row text-start pt-5 border-top">
                <div className="col-md-12">
                  <div className="custom-pagination">
                    <span>1</span>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <span>...</span>
                    <a href="#">15</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap mb-4">
                <form action="#" className="sidebar-search-form">
                  <span className="bi-search"></span>
                  <input
                    type="text"
                    className="form-control"
                    id="s"
                    placeholder="Type a keyword and hit enter"
                  />
                </form>
              </div>

              <PopularPosts />

              <Categories />

              <Tags />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryWiseBlog;
