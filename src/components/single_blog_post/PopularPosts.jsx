
function PopularPosts() {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Popular Posts</h3>
      <div className="post-entry-sidebar">
        <ul>
          <li>
            <a href="">
              <img
                src="../images/img_1_sq.jpg"
                alt="Image placeholder"
                className="me-4 rounded"
              />
              <div className="text">
                <h4>
                  There’s a Cool New Way for Men to Wear Socks and Sandals
                </h4>
                <div className="post-meta">
                  <span className="mr-2">March 15, 2018 </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="../images/img_2_sq.jpg"
                alt="Image placeholder"
                className="me-4 rounded"
              />
              <div className="text">
                <h4>
                  There’s a Cool New Way for Men to Wear Socks and Sandals
                </h4>
                <div className="post-meta">
                  <span className="mr-2">March 15, 2018 </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="../images/img_3_sq.jpg"
                alt="Image placeholder"
                className="me-4 rounded"
              />
              <div className="text">
                <h4>
                  There’s a Cool New Way for Men to Wear Socks and Sandals
                </h4>
                <div className="post-meta">
                  <span className="mr-2">March 15, 2018 </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PopularPosts