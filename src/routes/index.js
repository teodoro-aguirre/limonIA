import Header from "../template/Hearder";
import Home from '../pages/Home';
import Download from "../pages/Download";
import Contact from "../pages/Contact";
import Error404 from "../template/Error404";
import getHash from "../utils/getHash";
import Footer from "../template/Footer";

// Se declaran las rutas a utilizar
const routes = {
    '/': Home,
    '/contacto': Contact,
    '/descarga': Download,
}

// Se muestra el contenido según la ruta obtenida en content
// El header queda estatico
const router = async() => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
    
    let route = getHash();
    console.log(route)
    // Valida si la ruta existe dentro del arreglo, en caso contrario
    // retorna a la página de error 404
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render(); 
    
}

export default router;