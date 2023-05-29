import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [feedback, setFeedback] = useState("");
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const [rating, setRating] = useState(0);
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const submitAlert = () => {
    alert(
      "Thank you for such an amazing feedback! Unfortunately we are not able to see your response, but we believe that a few more month and we know how do it :)"
    );
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h1 className="contact-heading">
          Contact the developers of the website:{" "}
        </h1>
        <div className="contact-info">
          <div className="contact-card">
            <h2 className="contact-name">Natalie Zablotska</h2>
            <p className="LinkedIn-link">
              <a href="https://www.linkedin.com/in/nataliia-zablotska/">
                LinkedIn{" "}
              </a>
            </p>
          </div>

          <div className="contact-card">
            <h2 className="contact-name">Huimin Lin</h2>
            <p className="LinkedIn-link">
              <a href="https://www.linkedin.com/in/huimin-lin-509b3b101/">
                LinkedIn
              </a>
            </p>
          </div>
          <div className="contact-card">
            <h2 className="contact-name">Lavanya Pedapati</h2>
            <p className="LinkedIn-link">
              <a href="https://www.linkedin.com/in/lavanya-pedapati-94567616/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="feedback-form">
          <h2 className="feedback-heading">Leave Feedback</h2>
          <form onSubmit={submitAlert}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <div className="textarea-container">
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-group rating-container">
              <label htmlFor="rating">Rating:</label>
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    className={`star ${value <= rating ? "filled" : ""}`}
                    onClick={() => handleRatingChange(value)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;