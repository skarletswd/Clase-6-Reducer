import { useRef } from "react";

function Tareas() {

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputRef.current.value);
    }

    return (
      <>
        <h1>Tareas</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Titulo</label>
            <input type="text" id="title" ref={inputRef}/>
            <button type="submit">Enviar</button>

        </form>
      </>
    )
  }
  
  export default Tareas;
  