import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../features/api/blogPostsApiSlices";
import { format } from "date-fns";
import { useEffect } from "react";

function RetroBlogPosts() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { data, isLoading, error } = useGetAllBlogsQuery();
  const retroBlogs = data?.data?.slice(0,6)?.reverse();
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row align-items-stretch retro-layout">
          {retroBlogs?.map((blog) => {
            return (
              <div key={blog?._id} className="col-md-4">
                <Link
                  to={`/single_post/${blog?._id}`}
                  className="h-entry mb-30 v-height gradient"
                >
                  <div
                    className="featured-img"
                    style={{
                      backgroundImage: `url(${blog?.blogImg})`,
                    }}
                  ></div>

                  <div className="text">
                    <span className="date">
                      {format(new Date(blog?.publishDate), "MMM.do,yyyy")}
                    </span>
                    <h2>{blog?.title?.slice(0, 25) + "...."}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RetroBlogPosts;
