import { AddCircleOutline } from "@mui/icons-material";
import { Button } from "@mui/material";

import React, { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
const Create = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name

    setNote((preValue) => {
      return ({ ...preValue, 
        [name] : value });
    });
  };

  const add = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    })
  };

  return (
    <>
      <div style={{ backgroundColor: "whitesmoke", padding: "5px" }}>
        <Form>
          <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter your Title here"
              value={note.title}
              onChange={inputEvent}
              name="title"
            />
          </Form.Group>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Notes"
            className="m-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Enter your notes here"
              value={note.content}
              onChange={inputEvent}
              name="content"
            />
          </FloatingLabel>
          <Button variant="outlined" className="m-3" onClick={add}>
           
            <AddCircleOutline />
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Create;
