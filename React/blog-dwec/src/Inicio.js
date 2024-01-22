import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Inicio = () => {

    const { nota , cargando, error} = useFetch('http://localhost:8000/Blogs');

    return (
        <div className="home">
            {cargando && <div>Cargando...</div>}
            {error && <div>{error}</div>}
            {nota && <BlogList blogs={nota} titulo="Listado de blogs" />}
        </div>
    );
};

export default Inicio;
