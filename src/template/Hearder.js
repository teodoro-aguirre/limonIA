import getHash from "../utils/getHash";

// Plantilla de la barra de navegación
const Header = () => {
  let hash = getHash();
  const view = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="../assets/icon/logo5.svg" alt="" width="30" height="24">
                Limon IA
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link  ${ hash == '/' ? 'active' : ''}" href="/">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  ${ hash == '/contacto' ? 'active' : ''}" href="#/contacto">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  ${ hash == '/descarga' ? 'active' : ''}" href="#/descarga">Descarga</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

  return view;
};

export default Header;
