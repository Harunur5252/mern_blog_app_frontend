function UserBio({ dashboardUser }) {
  return (
    <div className="sidebar-box">
      <div className="bio text-center">
        <img
          src={dashboardUser?.profile?.image}
          alt="Image Placeholder"
          className="img-fluid mb-3"
        />
        <div className="bio-body">
          <h2>
            {dashboardUser?.profile?.firstName}{" "}
            {dashboardUser?.profile?.lastName}
          </h2>
          <p className="mb-4">{dashboardUser?.profile?.bio}</p>
          <p>
            <a
              href={dashboardUser?.profile?.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm rounded px-2 py-2"
            >
              Read my bio
            </a>
          </p>
          <p className="social">
            <a href={dashboardUser?.profile?.social?.facebook} className="p-2">
              <span className="fa fa-facebook fa-fade">Facebook</span>
            </a>
            <a href={dashboardUser?.profile?.social?.twitter} className="p-2">
              <span className="fa fa-twitter">Twitter</span>
            </a>
            <a href={dashboardUser?.profile?.social?.instagram} className="p-2">
              <span className="fa fa-instagram">Instagram</span>
            </a>
            <a href={dashboardUser?.profile?.social?.youtube} className="p-2">
              <span className="fa fa-youtube-play">Youtube</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserBio;
