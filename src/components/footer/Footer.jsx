import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../features/api/blogPostsApiSlices";
import { format } from "date-fns";

function Footer() {
  const { data } = useGetAllBlogsQuery();
  const recentBlogs = data?.data?.slice(0, 3)?.reverse();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="mb-4">About</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="widget">
              <h3>Social</h3>
              <ul className="list-unstyled social">
                <li>
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-pinterest"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-dribbble"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 ps-lg-5">
            <div className="widget">
              <h3 className="mb-4">Company</h3>
              <ul className="list-unstyled float-start links">
                <li>
                  <Link to={`/about/us`}>About us</Link>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Vision</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
              <ul className="list-unstyled float-start links">
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Creative</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="mb-4">Recent Post Entry</h3>
              <div className="post-entry-footer">
                <ul>
                  {recentBlogs?.map((blog) => {
                    return (
                      <li key={blog?.id}>
                        <Link to={`/single_post/${blog?._id}`}>
                          <img
                            src={blog?.blogImg}
                            alt="Image placeholder"
                            className="me-4 rounded"
                          />
                          <div className="text">
                            <h4>{blog?.title?.slice(0, 25) + "...."}</h4>
                            <div className="post-meta">
                              <span className="mr-2">
                                {format(
                                  new Date(blog?.publishDate),
                                  "MMMM do, yyyy"
                                )}{" "}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script>. All
              Rights Reserved. &mdash; Designed with love by{" "}
              <a href="https://untree.co">Untree.co</a> Distributed by{" "}
              <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
