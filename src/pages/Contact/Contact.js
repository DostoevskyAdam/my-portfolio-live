import React from "react";
import { useState } from "react";
import axios from "axios";
import "./contact.scss";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState([]);
  
  const submitForm = async (e) => {
    //prevent the page from reloading
    e.preventDefault();
    const pattern =
      /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    const patternResult = pattern.test(email);

    if (name.trim() === "" || stringContainsNumber(name) || name.length > 40) {
      alert("please enter a valid name");
    } else if (patternResult === false || email.length > 40) {
      alert("please enter a valid email");
    } else if (message === "") {
      alert("don't forget your message!");
    } else if (message.length > 200) {
      alert("please limit your message to 200 characters or less");
    } else {
      setSubmitting(true);
      // wait for the data to go through to FormSpark
      await postSubmission();
      document.getElementById("contactFormId").style.display = "none";
      setSubmitting(false);
      //reset form when alert is closed
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  function stringContainsNumber(myString) {
    let containsAnyNumbers = String(myString);
    for (let i = 0; i < containsAnyNumbers.length; i++) {
      if (
        !isNaN(containsAnyNumbers.charAt(i)) &&
        !(containsAnyNumbers.charAt(i) === " ")
      ) {
        return true;
      }
    }
    return false;
  }

  const postSubmission = async () => {
    const support = "yourfriends@atompi.ca";
    const formId = `${process.env.REACT_APP_API_SPARK}`;
    const formSparkUrl = "https://submit-form.com/";
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
    <>
      <div>
        <h3>{success.text}</h3>
      </div>
      <form onSubmit={submitForm} id="contactFormId">
        <div>
          <label htmlFor="name">
            Name:
            <input
              autoFocus
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message:
            <textarea
              value={message}
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Contact;
