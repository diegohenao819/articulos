import "./crear.css";
import { useState } from "react";
import axios from 'axios';
import { Typography,  Button } from '@mui/material';

const Crear = () => {
  const [mensaje, setMensaje] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await axios.post('https://articulo-blog.vercel.app/api/crear', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status !== 200) {
        setMensaje("Error creating article");
        throw new Error('Network response was not ok');
      }

      console.log('Backend response:', response.data);
      setMensaje("Article created successfully");
    } catch (error) {
      console.error('Error during request:', error);
      setMensaje("Failed to create article");
    }
  };

  return (
    <div className="crear">
      <strong>{mensaje}</strong>
      <Typography variant="h3">Create an Article</Typography>
      <Typography variant="body1">Form to create an article</Typography>

      <form onSubmit={submitForm}>
        <Typography component="label" htmlFor="titulo">TITLE</Typography>
        <input type="text" id="titulo" name="titulo" placeholder="Write your title here"/>

        <Typography component="label" htmlFor="contenido">CONTENT</Typography>
        <textarea id="contenido" name="contenido" placeholder="Your content here"></textarea>

        <Typography component="label" htmlFor="file0">IMAGE</Typography>
        <input type="file" id="file0" name="file0" />

        <Button variant="contained" color="primary" type="submit">Create</Button>
      </form>
    </div>
  );
};

export default Crear;
