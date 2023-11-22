import PopularPosts from "../components/single_blog_post/PopularPosts";
import Tags from "../components/single_blog_post/Tags";
import Categories from "../components/single_blog_post/Categories";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetCategoryAndTagsQuery,
  useGetCategoryWiseBlogQuery,
} from "../features/api/blogPostsApiSlices";
import { format } from "date-fns";
import parse from "html-react-parser";

function CategoryWiseBlog({ title }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { categoryId } = useParams();
  // finding category
  const { category } = useGetCategoryAndTagsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      category: data?.categories?.find(
        (category) => category?._id === categoryId
      ),
    }),
  });
  // finding all category and tag
  const { data } = useGetCategoryAndTagsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data,
    }),
  });
  const { data: categoryWiseBlog, isLoading } = useGetCategoryWiseBlogQuery({
    category: category?._id,
  });

  return (
    <>
      <title>{title}</title>
      <div className="section search-result-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">Category: {category?.categoryName}</div>
            </div>
          </div>
          <div className="row posts-entry">
            <div className="col-lg-8">
              {isLoading ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Loading...
                </p>
              ) : null}
              {categoryWiseBlog?.length > 0 ? (
                categoryWiseBlog?.map((categoryBlog) => {
                  return (
                    <>
                      <div
                        key={categoryBlog?._id}
                        className="blog-entry d-flex blog-entry-search-item"
                      >
                        <Link
                          to={`/single_post/${categoryBlog?._id}`}
                          className="img-link me-4"
                        >
                          <img
                            src={categoryBlog?.blogImg}
                            alt="Image"
                            className="img-fluid"
                          />
                        </Link>
                        <div>
                          <span className="date">
                            {format(
                              new Date(categoryBlog?.publishDate),
                              "MMM. do ,yyyy"
                            )}{" "}
                            &#x2022; <a href="#">{category?.categoryName}</a>
                          </span>
                          <h2>
                            <Link to={`/single_post/${categoryBlog?._id}`}>
                              {categoryBlog?.title?.slice(0, 25) + "...."}
                            </Link>
                          </h2>
                          <p>
                            {parse(
                              categoryBlog?.descriptionOne?.slice(0, 100) +
                                "...."
                            )}
                          </p>
                          <p>
                            <Link
                              to={`/single_post/${categoryBlog?._id}`}
                              className="btn btn-sm btn-outline-primary"
                            >
                              Read More
                            </Link>
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <span className="text-danger">blogs not found</span>
              )}
              <div className="row text-start pt-5 border-top">
                <div className="col-md-12">
                  <div className="custom-pagination">
                    <span>1</span>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <span>...</span>
                    <a href="#">15</a>
                  </div>
                </div>
              </div>
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

export default CategoryWiseBlog;
