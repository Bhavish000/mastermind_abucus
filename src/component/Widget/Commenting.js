import React from 'react';

const Commenting = () => {
    return (
        <div className="comment-area">
            <div className="comment-full">
                <h3 className="reply-title"> Comments Section </h3>
                <p>
                    <span>Speak Your Mind </span>
                </p>
                <form id="contact-form" method="post" action="mailer.php">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="form-group">
                                <label>Name*</label>
                                <input type="text" className="form-control" required />
                            </div>
                        </div>
                        
                        <div className="col-md-12 col-sm-12 mb-35">
                            <div className="form-group">
                                <label>Your comment here...</label>
                                <textarea cols="20" rows="5" className="textarea form-control" required></textarea>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="submit-btn">
                    <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                </div>
            </div>
        </div>
    )
}

export default Commenting;