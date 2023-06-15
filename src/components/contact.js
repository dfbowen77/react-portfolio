// import the neccessary react and bootstrap components
import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Stack} from 'react-bootstrap'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [nameErrorMessage, setNameErrorMessage] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState(false)
    const [textErrorMessage, setTextErrorMessage] = useState(false)
    const [successMessageSent, setSuccessMessageSent] = useState(false)

    // Handles changes to the name form component
    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameErrorMessage(false);
    };

    // Handles changes to the email form component
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailErrorMessage(false);
    };

    // Handles changes to the textbox form component
    const handleTextChange = (e) => {
        setText(e.target.value);
        setTextErrorMessage(false);
    };

      // Regex is used to validate the email address
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevents the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    let valid = true;

    // Validates the name, email, and text fields
    if (name.length <= 1) {
      setNameErrorMessage(true);
      valid = false;
    }
    if (!validateEmail(email)) {
      setEmailErrorMessage(true);
      valid = false;
    }
    if (text.length < 1) {
      setTextErrorMessage(true);
      valid = false;
    }

    // if after checking all the validation and valid is still true, then this resets all the form fields and sends a success message  
    if (valid) {
      setName("");
      setEmail("");
      setText("");
      setSuccessMessageSent(true);
    }
  };

  // Render the contact form
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="contact-header">Contact Me</h2>
            {successMessageSent && (
              <div className="alert alert-success" role="alert">
                Thank you for contacting me!
              </div>
            )}
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="my-5">
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Enter your name'
                  className={nameErrorMessage ? "is-invalid" : ""}
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {nameErrorMessage && (
                  <div className="invalid-feedback">
                    Please submit a valid name. 
                  </div>
                )}
              </Form.Group>
              <Form.Group className="my-5">
                <Form.Label htmlFor="email">Email:</Form.Label>
                {/* Form.Control is a part of react.bootstrap and it allows you to upgrade input boxes and text areas with custom styling  */}
                <Form.Control
                  type="email"
                  placeholder='email@example.com'
                  className={emailErrorMessage ? "is-invalid" : ""}
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailErrorMessage && (
                  <div className="invalid-feedback">
                    Please submit a valid email.
                  </div>
                )}
              </Form.Group>
              <Form.Group className="my-5">
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder='Send me a message!'
                  className={textErrorMessage ? "is-invalid" : ""}
                  id="message"
                  name="message"
                  rows="5"
                  value={text}
                  onChange={handleTextChange}
                />
                {textErrorMessage && (
                  <div className="invalid-feedback">
                    Please submit a valid message.
                  </div>
                )}
              </Form.Group>
              <Button type="submit" className="custom-send-message-button my-5">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// exports the Contact function for use in other parts of the application.
export default Contact;