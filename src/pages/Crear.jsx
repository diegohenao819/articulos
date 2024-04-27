
import "./crear.css"
import { useState } from "react"

const Crear = () => {

  const [mensaje, setMensaje] = useState("")



  const submitForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)


    const url = 'https://articulo-blog.vercel.app/api/crear';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Asegúrate de establecer el tipo de contenido correcto según tu backend
      },
      body: JSON.stringify(data)
    };


    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          setMensaje("Error")
          throw new Error('Network response was not ok');
          
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta del backend:', data);
        setMensaje("Articulo creado")
        // Aquí puedes realizar acciones adicionales con la respuesta del backend
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
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

        {/* <label htmlFor="imagen¿">Imagen</label>
        <input type="file" id="image" name="image" /> */}

        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Crear