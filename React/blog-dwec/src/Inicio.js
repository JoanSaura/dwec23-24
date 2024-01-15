import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Inicio = () => {

    const handleEliminarBlog = (id) => {
        const nuevoBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(nuevoBlog);
    }

    const [Nombre, setNombre] = useState("Pepito");

    const [blogs, setBlogs] = useState([
        {titulo : "Mi nueva web", body : "Placeholder", autor:"Joan", id:1},
        {titulo : "Porque no se acaba ya la dichosa guerra", body : "De Rusia y Ucrania", autor:"Joan", id:2},
        {titulo : "El Futbol es ZZZZ", body : "Viva el Golf", autor:"Sidney", id:3},
        {titulo : "Berserk es God", body : "Vagabond tambien", autor:"Joan", id:4},
    ])

    //Props
    //Tres motivos : Hara de nuestro componente Blocklist algo mucho mas reutilizable

    //useEffect

    useEffect(() => {
        console.log(blogs);
    }, [Nombre]);

    return (    
        <div className="home" >
          <Bloglist  blogs = {blogs}  titulo = "Listado de blogs"  handleEliminarBlog = {handleEliminarBlog} />
        <p>{Nombre}</p>
        <button onClick={ () => setNombre("King Jon Un")}>Cambio de nombre</button>
        </div>
     );
}

export default Inicio;
