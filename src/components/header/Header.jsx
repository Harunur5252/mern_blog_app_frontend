import { NavLink } from "react-router-dom";
import {
  useGetDatabaseBlogsQuery,
  useGetDesignBlogsQuery,
} from "../../features/api/blogPostsApiSlices";

function Header() {
  const { data: databaseData } = useGetDatabaseBlogsQuery();
  const { data: designData } = useGetDesignBlogsQuery();
  return (
    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active logo m-0 float-start"
                      : "logo m-0 float-start"
                  }
                >
                  Blogy<span className="text-primary">.</span>
                </NavLink>
              </div>
              <div className="col-8 text-center">
                <form
                  action="#"
                  className="search-form d-inline-block d-lg-none"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bi-search"></span>
                </form>

                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                  <li className={({ isActive }) => (isActive ? "active" : "")}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="has-children">
                    <a href="category.html">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="search-result.html">Search Result</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="single.html">Blog Single</a>
                      </li>
                      <li>
                        <a href="category.html">Category</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Menu One</a>
                      </li>
                      <li>
                        <a href="#">Menu Two</a>
                      </li>
                      <li className="has-children">
                        <a href="#">Dropdown</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Sub Menu One</a>
                          </li>
                          <li>
                            <a href="#">Sub Menu Two</a>
                          </li>
                          <li>
                            <a href="#">Sub Menu Three</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink
                      to={`/category/wise/blog/${designData?.category?._id}`}
                    >
                      {designData?.category?.categoryName}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/category/wise/blog/${databaseData?.category?._id}`}
                    >
                      {databaseData?.category?.categoryName}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/view_all_blogs">Politics</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-2 text-end">
                <a
                  href="#"
                  className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                >
                  <span></span>
                </a>
                <form
                  action="#"
                  className="search-form d-none d-lg-inline-block"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bi-search"></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
