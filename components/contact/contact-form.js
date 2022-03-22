import { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetail) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetail),
    headers: { "Content-Type": "application/Json" },
  });
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Something went wrong");
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();
  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      // cleanup function mean if we have a timer and if we have the second one, we need to clear
      // the first one, so we will always have only 1 timer and this clean up function will run
      // every time useEffect run
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);
  async function sendMessageHandler(e) {
    // Optionally add client-side validation
    e.preventDefault();
    try {
      setRequestStatus("pending");
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;
  if (requestStatus === "pending")
    notification = {
      title: "Pending",
      message: "Waiting to process your request",
      status: "pending",
    };
  if (requestStatus === "success")
    notification = {
      title: "Success",
      message: "Successfully sent your message",
      status: "success",
    };
  if (requestStatus === "error")
    notification = {
      title: "Error",
      message: requestError,
      status: "error",
    };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" required value={enteredEmail} onChange={(event) => setEnteredEmail(event.target.value)} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" required value={enteredName} onChange={(event) => setEnteredName(event.target.value)} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required value={enteredMessage} onChange={(event) => setEnteredMessage(event.target.value)}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
    </section>
  );
}
