import BlogContent from "../components/single_blog_post/BlogContent";
import BlogCover from "../components/single_blog_post/BlogCover";
import Categories from "../components/single_blog_post/Categories";
import Comment from "../components/single_blog_post/Comment";
import MoreBlogPosts from "../components/single_blog_post/MoreBlogPosts";
import Tags from "../components/single_blog_post/Tags";
import UserBio from "../components/single_blog_post/UserBio";
import PopularPosts from "../components/single_blog_post/PopularPosts";

function SingleBlogPost({ title }) {
  return (
    <>
      <title>{title}</title>
      <BlogCover />
      <section className="section">
        <div className="container">
          <div className="row blog-entries element-animate">
            <div className="col-md-12 col-lg-8 main-content">
              <BlogContent />
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

              <UserBio />
              <PopularPosts />
              <Categories />
              <Tags />
            </div>
          </div>
        </div>
      </section>

      <MoreBlogPosts />
    </>
  );
}

export default SingleBlogPost;
