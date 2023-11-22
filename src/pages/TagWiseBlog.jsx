import PopularPosts from "../components/single_blog_post/PopularPosts";
import Tags from "../components/single_blog_post/Tags";
import Categories from "../components/single_blog_post/Categories";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetCategoryAndTagsQuery,
  useGetTagWiseBlogQuery,
} from "../features/api/blogPostsApiSlices";
import { format } from "date-fns";
import parse from "html-react-parser";

function TagWiseBlog({ title }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { tagId } = useParams();
  // finding category
  const { tag } = useGetCategoryAndTagsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      tag: data?.tags?.find((tag) => tag?._id === tagId),
    }),
  });
  // finding all category and tag
  const { data } = useGetCategoryAndTagsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data,
    }),
  });
  const { data: tagWiseBlog, isLoading } = useGetTagWiseBlogQuery({
    tag: tag?._id,
  });

  return (
    <>
      <title>{title}</title>
      <div className="section search-result-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">Tag: {tag?.tagName}</div>
            </div>
          </div>
          <div className="row posts-entry">
            <div className="col-lg-8">
              {isLoading ? (
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Loading...
                </span>
              ) : null}
              {tagWiseBlog?.length > 0 ? (
                tagWiseBlog?.map((tagBlog) => {
                  return (
                    <div
                      key={tagBlog?._id}
                      className="blog-entry d-flex blog-entry-search-item"
                    >
                      <a href="single.html" className="img-link me-4">
                        <img
                          src={tagBlog?.blogImg}
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                      <div>
                        <span className="date">
                          {format(
                            new Date(tagBlog?.publishDate),
                            "MMM. do ,yyyy"
                          )}{" "}
                          &#x2022; <a href="#">{tag?.categoryName}</a>
                        </span>
                        <h2>
                          <a href="single.html">
                            {tagBlog?.title?.slice(0, 25) + "...."}
                          </a>
                        </h2>
                        <p>
                          {parse(
                            tagBlog?.descriptionOne?.slice(0, 100) + "...."
                          )}
                        </p>
                        <p>
                          <Link
                            to={`/single_post/${tagBlog?._id}`}
                            className="btn btn-sm btn-outline-primary"
                          >
                            Read More
                          </Link>
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <span className="text-danger">blogs not found</span>
              )}
            </div>

            <div className="col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap mb-4">
                <form action="#" className="sidebar-search-form">
                  <span className="bi-search"></span>
                  <input
                    type="text"
                    className="form-control"
                    id="s"
                    placeholder="Type a keyword and hit enter"
                  />
                </form>
              </div>
              <PopularPosts />
              <Categories categories={data?.categories} />
              <Tags tags={data?.tags} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TagWiseBlog;
