function UserBio() {
  return (
    <div className="sidebar-box">
      <div className="bio text-center">
        <img
          src="../images/person_2.jpg"
          alt="Image Placeholder"
          className="img-fluid mb-3"
        />
        <div className="bio-body">
          <h2>Hannah Anderson</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem facilis sunt repellendus excepturi beatae porro
            debitis voluptate nulla quo veniam fuga sit molestias minus.
          </p>
          <p>
            <a href="#" className="btn btn-primary btn-sm rounded px-2 py-2">
              Read my bio
            </a>
          </p>
          <p className="social">
            <a href="#" className="p-2">
              <span className="fa fa-facebook fa-fade">Facebook</span>
            </a>
            <a href="#" className="p-2">
              <span className="fa fa-twitter">Twitter</span>
            </a>
            <a href="#" className="p-2">
              <span className="fa fa-instagram">Instagram</span>
            </a>
            <a href="#" className="p-2">
              <span className="fa fa-youtube-play">Youtube</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserBio;
