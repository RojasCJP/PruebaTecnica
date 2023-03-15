import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const FormModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/producto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setFormData({});
    handleClose();
  };

  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Agregar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombreProducto"
              value={formData.nombreProducto}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Id Categoria</Form.Label>
            <Form.Control
              type="number"
              name="idCategoria"
              value={formData.idCategoria}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
