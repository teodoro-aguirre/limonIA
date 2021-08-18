// Plantilla de la barra de navegación
const Header = () => {
    const view = `
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#/contacto">Contacto</a></li>
            <li><a href="#/descarga">Descarga</a></li>
        </ul>
    `;

    return view;
};

export default Header;