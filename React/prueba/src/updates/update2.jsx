import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const EditModal = ({ show, handleClose, categoryId }) => {
  const [formData, setFormData] = useState({  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        console.log(categoryId)
        const response = await fetch(`http://localhost:5000/departamento/${categoryId}`);
        const result = await response.json();
        setFormData({
          nombre: result.nombre,
          descripcion: result.descripcion,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategory();
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/departamento/${categoryId}`, {
        method: "PUT",
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

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Departamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            name="nombreDepartamento"
            placeholder="Nombre"
            value={formData.nombreDepartamento}
            onChange={handleChange}
          />
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
