import "./crear.css";
import { useState } from "react";
import axios from 'axios';

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
      <h1>Create an Article</h1>
      <p>Form to create an article</p>

      <form onSubmit={submitForm}>
        <label htmlFor="titulo">Title</label>
        <input type="text" id="titulo" name="titulo" />

        <label htmlFor="contenido">Content</label>
        <textarea id="contenido" name="contenido"></textarea>

        <label htmlFor="file0">Image</label>
        <input type="file" id="file0" name="file0" />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Crear;
