import React from "react";
import { format } from "date-fns";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function BusinessBlogPostTwo({ data, isFetching }) {
  return (
    <div className="col-md-3">
      <ul className="list-unstyled blog-entry-sm">
        {data?.data?.slice(2, 5)?.map((blog) => {
          return (
            <li key={blog?._id}>
              <span className="date">
                {" "}
                {format(new Date(blog?.publishDate), "MMM. do ,yyyy") || (
                  <Skeleton />
                )}
              </span>
              <h3>
                <Link to={`/single_post/${blog?._id}`}>
                  {blog?.title?.slice(0, 25) + "......" || <Skeleton />}
                </Link>
              </h3>
              <p>
                {parse(blog?.descriptionOne?.slice(0, 100) + "....") || (
                  <Skeleton style={{ height: "2.5rem" }} />
                )}
              </p>
              <p>
                <Link to={`/single_post/${blog?._id}`} className="read-more">
                  Continue Reading
                </Link>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BusinessBlogPostTwo;
