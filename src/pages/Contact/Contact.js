import React from "react";
import { useState, useRef } from "react";
import axios from "axios";

function Contact() {
  const formId = process.env.API_SECRET;
  const formSparkUrl = "https://submit-form.com/";
  const support = "yourfriends@atompi.ca";
  //function here so we can reset recaptcha form when it has been submitted
  const recapthchaRef = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState([]);

  const submitForm = async (e) => {
    //prevent the page from reloading when form is clicked
    e.preventDefault();
    setSubmitting(true);
    // wait for the data to go through to FormSpark
    await postSubmission();
    setSubmitting(false);
    //reset form when alert is closed
    setName("");
    setEmail("");
    setMessage("");
  };

  const postSubmission = async () => {
    const uri = `${formSparkUrl}${formId}`;
    const payload = {
      name: { name },
      email: { email },
      message: { message },
    };

    try {
      const result = await axios.post(uri, payload);
      console.log(result);
      setSuccess({
        text: "Thanks, I'll be in touch shortly! Have a great day :)",
      });
    } catch (error) {
      console.log(error);
      setSuccess({
        text: `Sorry, there was a problem. Please try again or email me directly at ${support}`,
      });
    }
  };
  return (
    <div>
      <div>
        <h1>Contact</h1>
      </div>
      <div>{success.text}</div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">
          Name:
          <input
            autoFocus
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="message">
          {" "}
          Message:
          <input
            value={message}
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
