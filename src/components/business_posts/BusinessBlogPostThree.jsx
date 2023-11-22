import React from "react";
import { format } from "date-fns";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function BusinessBlogPostThree({ data }) {
  return (
    <>
      {data?.data?.slice(5, 9)?.map((blog) => {
        return (
          <div key={blog?._id} className="col-md-6 col-lg-3">
            <div className="blog-entry">
              <Link to={`/single_post/${blog?._id}`} className="img-link">
                <img src={blog?.blogImg} alt="Image" className="img-fluid" />
              </Link>
              <span className="date">
                {format(new Date(blog?.publishDate), "MMM. do ,yyyy")}
              </span>
              <h2>
                <Link to={`/single_post/${blog?._id}`}>
                  {blog?.title?.slice(0, 25) + "......"}
                </Link>
              </h2>
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
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BusinessBlogPostThree;
