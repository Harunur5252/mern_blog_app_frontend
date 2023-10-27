import CultureBlogPostOne from "./CultureBlogPostOne";
import CultureBlogPostTwo from "./CultureBlogPostTwo";

function CulturePosts() {
  return (
    <section className="section posts-entry">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-6">
            <h2 className="posts-entry-title">Culture</h2>
          </div>
          <div className="col-sm-6 text-sm-end">
            <a href="category.html" className="read-more">
              View All
            </a>
          </div>
        </div>
        <div className="row g-3">
          <CultureBlogPostOne />
          <CultureBlogPostTwo />
        </div>
      </div>
    </section>
  );
}

export default CulturePosts;
