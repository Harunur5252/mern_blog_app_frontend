import { Link } from "react-router-dom";
import BusinessBlogPostOne from "./BusinessBlogPostOne";
import BusinessBlogPostTwo from "./BusinessBlogPostTwo";
import BusinessBlogPostThree from "./BusinessBlogPostThree";
import { useGetDesignBlogsQuery } from "../../features/api/blogPostsApiSlices";

function BusinessBlogPosts() {
  const { data,isFetching } = useGetDesignBlogsQuery();
  return (
    <>
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
            <BusinessBlogPostOne data={data} isFetching={isFetching} />
            <BusinessBlogPostTwo data={data} isFetching={isFetching} />
          </div>
        </div>
      </section>

      <section className="section posts-entry posts-entry-sm bg-light">
        <div className="container">
          <div className="row">
            <BusinessBlogPostThree data={data} isFetching={isFetching} />
          </div>
        </div>
      </section>
    </>
  );
}

export default BusinessBlogPosts;
