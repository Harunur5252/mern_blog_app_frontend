import { Link } from "react-router-dom";
import { useGetDatabaseBlogsQuery } from "../../features/api/blogPostsApiSlices";
import CultureBlogPostOne from "./CultureBlogPostOne";
import CultureBlogPostTwo from "./CultureBlogPostTwo";

function CulturePosts() {
  const { data } = useGetDatabaseBlogsQuery();

  return (
    <section className="section posts-entry">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-6">
            <h2 className="posts-entry-title">
              {data?.category?.categoryName}
            </h2>
          </div>
          <div className="col-sm-6 text-sm-end">
            <Link
              to={`/category/wise/blog/${data?.category?._id}`}
              className="read-more"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="row g-3">
          <CultureBlogPostOne data={data} />
          <CultureBlogPostTwo data={data} />
        </div>
      </div>
    </section>
  );
}

export default CulturePosts;
