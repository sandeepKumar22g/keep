import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

const Note = (props) => {
  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return (
    <>
      <Card style={{ width: "18rem"}} className="m-3">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.content}
          </Card.Text>
          <Button onClick={deleteNote}> <Delete/> </Button>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Note;
