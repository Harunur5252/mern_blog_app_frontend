import { format } from "date-fns";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function BusinessBlogPostOne({ data, isFetching }) {
  return (
    <div className="col-md-9">
      <div className="row g-3">
        {data?.data?.slice(0, 2)?.map((blog) => {
          return (
            <div key={blog?._id} className="col-md-6">
              <div className="blog-entry">
                {/* {<Skeleton style={{height:"15rem"}}/>}
                 */}
                <Link to={`/single_post/${blog?._id}`} className="img-link">
                  {isFetching ? (
                    <Skeleton style={{ height: "15rem" }} />
                  ) : (
                    <img
                      src={blog?.blogImg}
                      alt="Image"
                      className="img-fluid"
                    />
                  )}
                </Link>
                <span className="date">
                  {format(new Date(blog?.publishDate), "MMM. do ,yyyy") || (
                    <Skeleton />
                  )}
                </span>
                <h2>
                  <Link to={`/single_post/${blog?._id}`}>
                    {blog?.title?.slice(0, 25) + "......" || <Skeleton />}
                  </Link>
                </h2>
                <p>
                  {parse(blog?.descriptionOne?.slice(0, 100) + "....") || (
                    <Skeleton style={{ height: "2.5rem" }} />
                  )}
                </p>
                <p>
                  <Link
                    to={`/single_post/${blog?._id}`}
                    href="single.html"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BusinessBlogPostOne;
