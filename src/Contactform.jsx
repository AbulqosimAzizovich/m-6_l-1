import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useContactStore from "./ContactStore";
import { toast } from "react-toastify";

function ContactForm() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addContact = useContactStore((state) => state.addContact);

  const handleAddContact = () => {
    if (name && email && telephone) {
      const newContact = { name, email, telephone };
      addContact(newContact);
      handleClose();
      toast.success("Contact added successfully.");
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className=" bg-slate-400 rounded-lg">
          <Modal.Header closeButton>
            <Modal.Title>Add Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formTelephone">
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddContact}>
              Save Contact
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default ContactForm;
