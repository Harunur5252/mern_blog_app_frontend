import React, { useEffect } from "react";
import { useGetAboutBlogyQuery } from "../features/api/blogPostsApiSlices";
import parse from "html-react-parser";

function AboutUs({ title }) {
  useEffect(() => {
    window.scroll(0, 0);
  });
  const { data } = useGetAboutBlogyQuery();
  return (
    <>
      <title>{title}</title>
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-stretch retro-layout">
            <p className="text-justify text-dark">
              {data && parse(data[0]?.about)}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
