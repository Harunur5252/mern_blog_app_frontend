import React from 'react'

function Comment() {
  return (
    <div className="pt-5 comment-wrap">
      <h3 className="mb-5 heading">6 Comments</h3>
      <ul className="comment-list">
        <li className="comment">
          <div className="vcard">
            <img src="../images/person_1.jpg" alt="Image placeholder" />
          </div>
          <div className="comment-body">
            <h3>Jean Doe</h3>
            <div className="meta">January 9, 2018 at 2:21pm</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              quidem laborum necessitatibus, ipsam impedit vitae autem, eum
              officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
              impedit necessitatibus, nihil?
            </p>
            <p>
              <a href="#" className="reply rounded">
                Reply
              </a>
            </p>
          </div>
        </li>

        <li className="comment">
          <div className="vcard">
            <img src="../images/person_2.jpg" alt="Image placeholder" />
          </div>
          <div className="comment-body">
            <h3>Jean Doe</h3>
            <div className="meta">January 9, 2018 at 2:21pm</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              quidem laborum necessitatibus, ipsam impedit vitae autem, eum
              officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
              impedit necessitatibus, nihil?
            </p>
            <p>
              <a href="#" className="reply rounded">
                Reply
              </a>
            </p>
          </div>

          <ul className="children">
            <li className="comment">
              <div className="vcard">
                <img src="../images/person_3.jpg" alt="Image placeholder" />
              </div>
              <div className="comment-body">
                <h3>Jean Doe</h3>
                <div className="meta">January 9, 2018 at 2:21pm</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                  autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                  voluptas earum impedit necessitatibus, nihil?
                </p>
                <p>
                  <a href="#" className="reply rounded">
                    Reply
                  </a>
                </p>
              </div>

              <ul className="children">
                <li className="comment">
                  <div className="vcard">
                    <img src="../images/person_4.jpg" alt="Image placeholder" />
                  </div>
                  <div className="comment-body">
                    <h3>Jean Doe</h3>
                    <div className="meta">January 9, 2018 at 2:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p>
                      <a href="#" className="reply rounded">
                        Reply
                      </a>
                    </p>
                  </div>

                  <ul className="children">
                    <li className="comment">
                      <div className="vcard">
                        <img
                          src="../images/person_5.jpg"
                          alt="Image placeholder"
                        />
                      </div>
                      <div className="comment-body">
                        <h3>Jean Doe</h3>
                        <div className="meta">January 9, 2018 at 2:21pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p>
                          <a href="#" className="reply rounded">
                            Reply
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="comment">
          <div className="vcard">
            <img src="../images/person_1.jpg" alt="Image placeholder" />
          </div>
          <div className="comment-body">
            <h3>Jean Doe</h3>
            <div className="meta">January 9, 2018 at 2:21pm</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              quidem laborum necessitatibus, ipsam impedit vitae autem, eum
              officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
              impedit necessitatibus, nihil?
            </p>
            <p>
              <a href="#" className="reply rounded">
                Reply
              </a>
            </p>
          </div>
        </li>
      </ul>

      <div className="comment-form-wrap pt-5">
        <h3 className="mb-5">Leave a comment</h3>
        <form action="#" className="p-5 bg-light">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input type="url" className="form-control" id="website" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Post Comment"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment