import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Signup () {
    function handleregister() {
        alert("success");
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var contact = document.getElementById('contact').value;
        var address = document.getElementById('address').value;
        // var conformpassword = document.getElementById('conformpasswordInput').value;
        if (username != '' && email != ''&& password != '' && contact != '' && address != '')
        console.log(username,email,password,contact)
         {
          fetch('http://13.48.194.120:8000//registre/', {
            method: 'POST',
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
              contact: contact,
              address: address,
  
            })
          }).then(res => res.json())
            .then(data => {
              if (data.error) {
              }
              else {
              }
            })
        }
      }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      REGISTRATION
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGISTRATION HERE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="username">
              <Form.Label>USER NAME</Form.Label>
              <Form.Control
                type="user name"
                placeholder=" enter username"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>CONTACT</Form.Label>
              <Form.Control
                type="mobile number"
                placeholder="enter contact number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>ADDERESS</Form.Label>
              <Form.Control
                type="address"
                placeholder="enter address"
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleregister}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;