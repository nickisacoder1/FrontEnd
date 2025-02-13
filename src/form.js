import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { sendTextMessageToBandEnd } from "./twilio.js";

function TextForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mensaje, setMensajeChange] = useState("");

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleMensajeChange(e) {
    setMensajeChange(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    sendTextMessageToBandEnd(phoneNumber, mensaje);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="group">
          <Form.Label className="Label"> Numero Telefono </Form.Label>
          <Form.Control
            className="tlf"
            type="text"
            placeholder="Darme el numero por favor!"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="group">
          <Form.Label className="Label"> Mensaje </Form.Label>
          <Form.Control
            className="msj"
            as="textarea"
            placeholder="Qué quieres decir a Jake?"
            value={mensaje}
            onChange={(e) => handleMensajeChange(e)}
          ></Form.Control>
        </Form.Group>

        <Button className="btn" variant="primary" type="submit">
          Manda Mensaje
        </Button>
      </Form>
    </div>
  );
}

export default TextForm;
