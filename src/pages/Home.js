// Pantalla principal que se le muestra al usuario

const Home = () => {
    const view = `
        <section class="home__animated">
            <div class="home-container columns">
                <div class="home-container__title column is-8">
                    <h1 class="animate__animated animate__backInDown">Limón IA APP</h1>
                    <p class="animate__animated animate__backInLeft">Detección de plagas y enfermedades de citrus latifolia mediante una aplicación 
                    móvil con aprendizaje profundo a partir de redes neuronales convolucionales</p>
                </div>
                <div class="home-container__img column is-4">
                    <img src="./assets/img/telefono-celular.png"  class="animate__animated animate__bounceInDown" alt="cel">
                </div>
            </div>
            <div class="limones">
                <div class="limon"></div>
                <div class="limon-2"></div>
                <div class="limon"></div>
                <div class="limon-2"></div>
                <div class="limon-2"></div>
                <div class="limon"></div>
            </div>
        </section>
        <section class="content_1 section">
            <div class="columns is-vcentered">
                <div class="column has-text-centered">
                    <h2 class="title-section1">Soluciones de Inteligencia Artificial que aspira a transformar el sector agro tecnológico.</h2>
                    <img src="./assets/icon/logo1.svg" class="img-fluid" width="250px" />
                </div>
                <div class="column">
                <p class="content_text">Brindamos soluciones tecnológicas, apoyando a empresas, organizaciones e industrias a incursionar en la nueva economía de la transformación digital, mediante el desarrollo de software, y hardware a la medida.</p>
                </div>
            </div>
        </section>
        <section class="section content_2">
            <div class="has-text-centered"><h1>Capturas de la aplicación</h1></div>
            <div id="carouselCaptures" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner contenedor_capturas">
                    <div class="carousel-item active has-text-centered">
                        <img src="./assets/captures/capture-login.jpeg" class="img-capture img-fluid" alt="...">
                        <img src="./assets/captures/capture-home.jpeg" class="img-capture img-fluid" alt="...">
                    </div>
                    <div class="carousel-item has-text-centered">
                        <img src="./assets/captures/capture-takephoto.jpeg" class="img-capture img-fluid" alt="...">
                        <img src="./assets/captures/capture-result.jpeg" class="img-capture img-fluid" alt="...">
                    </div>
                    <div class="carousel-item has-text-centered">
                        <img src="./assets/captures/capture-takephoto2.jpeg" class="img-capture img-fluid" alt="...">
                        <img src="./assets/captures/capture-result-2.jpeg" class="img-capture img-fluid" alt="...">
                    </div>
                    <div class="carousel-item has-text-centered">
                        <img src="./assets/captures/capture-menu.jpeg" class="img-capture img-fluid" alt="...">
                        <img src="./assets/captures/capture-faqs.jpeg" class="img-capture img-fluid" alt="...">
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptures" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptures" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <div class="content_servicio">
            <div class="content_servicio-title">
                <h1>Servicios</h1>
            </div>
        </div>
        <section class="content_3 section">
            <div class="has-text-centered content_3-text">
                <h1>Detección de anomalías</h1>
                <p>Podemos conocer el comportamiento de cada cultivo para cada día 
                del año a través de inteligencia artificial. Esto nos permite identificar 
                dónde el comportamiento del mismo no es adecuado identificando 
                plagas, malezas, zonas no pobladas, etc.</p>
            </div>
            <div class="has-text-centered">
                <a href="#/contacto" class="button_contact">Contáctanos</a>
            </div>
        </section>
        <section class="section">
            <div class="columns has-text-centered">
                <div class="column">
                    <h1 class="content_4-title">Visión</h1>
                    <p class="content_4-content">Ser la empresa líder mundial en el procesado de inteligencia artificial 
                    orientada a la agrotecnologia. Así, contribuir a una agricultura sostenible, que no sea dañina para 
                    el medio ambiente y que ayude a cambiar el entorno social que la rodea</p>
                </div>
                <div class="column">
                    <h1 class="content_4-title">Misión</h1>
                    <p class="content_4-content">Dar servicio constante y no sentirnos proveedores si no una oficina de 
                    tecnología experta en Tecnología IA que camina hombro con hombro 
                    con nuestro cliente. </p>
                </div>
                <div class="column">
                    <h1 class="content_4-title">Valores</h1>
                    <p class="content_4-content">Pasión, trabajo duro, sentido de familia, compromiso, fidelidad, 
                    profesionalidad, lealtad y honestidad</p>
                </div>
            </div>
        </section>
    `;

    return view;
}

export default Home;