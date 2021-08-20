// Pantalla principal que se le muestra al usuario

const Home = () => {
    const view = `
        <section class="home__animated">
            <div class="home-container columns">
                <div class="home-container__title column is-three-quarters-desktop">
                    <h1>Limón IA APP</h1>
                    <p>Detección de plagas y enfermedades de citrus latifolia mediante una aplicación 
                    móvil con aprendizaje profundo a partir de redes neuronales convolucionales</p>
                </div>
                <div class="home-container__img column">
                    <img src="./assets/img/telefono-celular.png" alt="cel">
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
        <section>
            <div class="columns">
                <div class="column has-text-centered">
                    <h2 class="title-section1">Hola</h2>
                </div>
                <div class="column ">
                </div>
            </div>
        </section>
    `;

    return view;
}

export default Home;