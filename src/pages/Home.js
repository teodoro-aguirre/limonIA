// Pantalla principal que se le muestra al usuario

const Home = () => {
    const view = `
        <section class="home__animated">
            <div class="home-container">
                <div class="home-container__title">
                    <h1>Limón IA APP</h1>
                    <p>Detección de plagas y enfermedades de citrus latifolia mediante una aplicación 
                    móvil con aprendizaje profundo a partir de redes neuronales convolucionales</p>
                </div>
                <div class="home-container__img">
                    <img src="./assets/img/telefono-celular.png" alt="cel">
                </div>
            </div>
            <div class="limones">
                <div class="limon"></div>
                <div class="limon-2"></div>
                <div class="limon"></div>
                <div class="limon-2"></div>
                <div class="limon"></div>
                <div class="limon-2"></div>
            </div>
        </section>
    `;

    return view;
}

export default Home;