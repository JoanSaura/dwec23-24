import { useState } from "react";

const Inicio = () => {

    const [blogs, setBlogs] = useState([
        {titulo : "Mi nueva web", body : "Placeholder", autor:"Joan", id:1},
        {titulo : "Porque no se acaba ya la dichosa guerra", body : "De Rusia y Ucrania", autor:"Joan", id:2},
        {titulo : "El Futbol es ZZZZ", body : "Viva el Golf", autor:"Joan", id:3},
        {titulo : "Berserk es God", body : "Vagabond tambien", autor:"Joan", id:4},


    ])

    return ( 
        <div className="home" >
            {blogs.map((blog) => {
                return(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titulo}</h2>
                    <h4>{blog.body}</h4>
                    <p>Escrito por : {blog.autor}</p>
                </div>)
            })}
        </div>
     );
}

export default Inicio;
