import BusinessBlogPosts from "../components/business_posts/BusinessBlogPosts";
import CulturePosts from "../components/culture_posts/CulturePosts";
import PoliticsPosts from "../components/politics_posts/PoliticsPosts";
import RetroBlogPosts from "../components/retro_blog_posts/RetroBlogPosts";
import TravelPosts from "../components/travel_posts/TravelPosts";

function Home({ title }) {
  return (
    <>
      <title>{title}</title>
      <RetroBlogPosts />
      <BusinessBlogPosts />
      <CulturePosts />
      <PoliticsPosts />
      <TravelPosts />
    </>
  );
}

export default Home;
