import { format } from "date-fns";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function CultureBlogPostTwo({ data }) {
  return (
    <div className="col-md-3">
      <ul className="list-unstyled blog-entry-sm">
        {data?.data?.slice(2, 3)?.map((blog) => {
          return (
            <li key={blog?._id}>
              <span className="date">
                {" "}
                {format(new Date(blog?.publishDate), "MMM. do ,yyyy")}
              </span>
              <h3>
                <Link to={`/single_post/${blog?._id}`}>
                  {blog?.title?.slice(0, 25) + "......"}
                </Link>
              </h3>
              <p>{parse(blog?.descriptionOne?.slice(0, 100) + "....")}</p>
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

export default CultureBlogPostTwo;
