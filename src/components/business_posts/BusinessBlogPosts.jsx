import { Link } from "react-router-dom";
import BusinessBlogPostOne from "./BusinessBlogPostOne";
import BusinessBlogPostTwo from "./BusinessBlogPostTwo";
import BusinessBlogPostThree from "./BusinessBlogPostThree";

function BusinessBlogPosts() {
  return (
    <>
      <section className="section posts-entry">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">Business</h2>
            </div>
            <div className="col-sm-6 text-sm-end">
              <Link to="/view_all_blogs" className="read-more">
                View All
              </Link>
            </div>
          </div>
          <div className="row g-3">
            <BusinessBlogPostOne />
            <BusinessBlogPostTwo />
          </div>
        </div>
      </section>

      <section className="section posts-entry posts-entry-sm bg-light">
        <div className="container">
          <div className="row">
            <BusinessBlogPostThree />
          </div>
        </div>
      </section>
    </>
  );
}

export default BusinessBlogPosts;
