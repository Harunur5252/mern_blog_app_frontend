import { blogApiSlice } from "./blogApiSlices";
const BLOG_URL = "/api/v_1/blog";

export const blogPostsApiSlice = blogApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: `${BLOG_URL}/all/blogs`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getAllDashboardUsers: builder.query({
      query: () => ({
        url: `${BLOG_URL}/dashboard/all/users`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getCategoryAndTags: builder.query({
      query: () => ({
        url: `${BLOG_URL}/dashboard/all/category-tags`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getCategoryWiseBlog: builder.query({
      query: ({ category }) => ({
        url: `${BLOG_URL}/dashboard/all/category-wise-blog/${category}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getTagWiseBlog: builder.query({
      query: ({ tag }) => ({
        url: `${BLOG_URL}/dashboard/all/tag-wise-blog/${tag}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getDesignBlogs: builder.query({
      query: () => ({
        url: `${BLOG_URL}/all/design/blogs`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getDatabaseBlogs: builder.query({
      query: () => ({
        url: `${BLOG_URL}/all/database/blogs`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getAboutBlogy: builder.query({
      query: () => ({
        url: `${BLOG_URL}/dashboard/about/blogy`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetAboutBlogyQuery,
  useGetDatabaseBlogsQuery,
  useGetDesignBlogsQuery,
  useGetTagWiseBlogQuery,
  useGetCategoryWiseBlogQuery,
  useGetAllBlogsQuery,
  useGetCategoryAndTagsQuery,
  useGetAllDashboardUsersQuery,
} = blogPostsApiSlice;
