import "./crear.css";
import { useState } from "react";

const Crear = () => {
  const [mensaje, setMensaje] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const url = 'https://articulo-blog.vercel.app/api/crear';

    // Remove the Content-Type header to let the browser set it automatically
    // along with the correct boundary for multipart/form-data
    const options = {
      method: 'POST',
      body: formData // Send the FormData object directly
    };

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          setMensaje("Error creating article");
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Backend response:', data);
        setMensaje("Article created successfully");
      })
      .catch(error => {
        console.error('Error during request:', error);
        setMensaje("Failed to create article");
      });
  }

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
  )
}

export default Crear;
