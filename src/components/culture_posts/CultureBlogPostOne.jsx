import { format } from "date-fns";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function CultureBlogPostOne({ data }) {
  return (
    <>
      <div className="col-md-9 order-md-2">
        <div className="row g-3">
          {data?.data?.slice(0, 2)?.map((blog) => {
            return (
              <div className="col-md-6" key={blog?._id}>
                <div className="blog-entry">
                  <Link to={`/single_post/${blog?._id}`} className="img-link">
                    <img
                      src={blog?.blogImg}
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <span className="date">
                    {format(new Date(blog?.publishDate), "MMM. do ,yyyy")}
                  </span>
                  <h2>
                    <Link to={`/single_post/${blog?._id}`}>
                      {blog?.title?.slice(0, 25) + "......"}
                    </Link>
                  </h2>
                  <p>{parse(blog?.descriptionOne?.slice(0, 100) + "....")}</p>
                  <p>
                    <Link
                      to={`/single_post/${blog?._id}`}
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
    </>
  );
}

export default CultureBlogPostOne;
