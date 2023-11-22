import React from "react";
import parse from "html-react-parser";

function BlogContent({ blog }) {
  return (
    <>
      <div className="post-content-body">
        <div dangerouslySetInnerHTML={{ __html: blog?.descriptionOne }}></div>

        <div className="row my-4">
          <div className="col-md-12 mb-4">
            <img
              src={blog?.blogImg}
              alt="Image placeholder"
              className="img-fluid rounded"
            />
          </div>
          {/* <div className="col-md-6 mb-4">
            <img
              src="../images/img_2_horizontal.jpg"
              alt="Image placeholder"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 mb-4">
            <img
              src="../images/img_3_horizontal.jpg"
              alt="Image placeholder"
              className="img-fluid rounded"
            />
          </div> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog?.descriptionTwo }}></div>
      </div>

      <div className="pt-5">
        <p>
          Categories: <a href="#">{blog?.category}</a>, Tags:{" "}
          <a href="#">{blog?.tag}</a>
        </p>
      </div>
    </>
  );
}

export default BlogContent;
