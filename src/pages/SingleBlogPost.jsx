import BlogContent from "../components/single_blog_post/BlogContent";
import BlogCover from "../components/single_blog_post/BlogCover";
import Categories from "../components/single_blog_post/Categories";
import Comment from "../components/single_blog_post/Comment";
import MoreBlogPosts from "../components/single_blog_post/MoreBlogPosts";
import Tags from "../components/single_blog_post/Tags";
import UserBio from "../components/single_blog_post/UserBio";
import PopularPosts from "../components/single_blog_post/PopularPosts";
import { useParams } from "react-router-dom";
import {
  useGetAllBlogsQuery,
  useGetAllDashboardUsersQuery,
  useGetCategoryAndTagsQuery,
} from "../features/api/blogPostsApiSlices";
import { useEffect } from "react";

function SingleBlogPost({ title }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { id } = useParams();
  const { blog } = useGetAllBlogsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      blog: data?.data?.find((item) => item?._id === id),
    }),
  });

  const { dashboardUser } = useGetAllDashboardUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      dashboardUser: data?.find((user) => user?._id === blog?.user),
    }),
  });
  const { data } = useGetCategoryAndTagsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data,
    }),
  });

  return (
    <>
      <title>{title}</title>
      <BlogCover blog={blog} dashboardUser={dashboardUser} />
      <section className="section">
        <div className="container">
          <div className="row blog-entries element-animate">
            <div className="col-md-12 col-lg-8 main-content">
              <BlogContent blog={blog} />
              <Comment />
            </div>

            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
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

              <UserBio dashboardUser={dashboardUser} />
              <PopularPosts />
              <Categories categories={data?.categories} />
              <Tags tags={data?.tags} />
            </div>
          </div>
        </div>
      </section>

      <MoreBlogPosts />
    </>
  );
}

export default SingleBlogPost;
