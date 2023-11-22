import { Link } from "react-router-dom";

function Tag({ tags }) {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Tags</h3>
      <ul className="tags">
        {tags?.map((tag) => {
          return (
            <li key={tag?._id}>
              <Link to={`/tag/wise/blog/${tag?._id}`}>
                {tag?.tagName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tag;
