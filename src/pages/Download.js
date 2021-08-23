// Pagina que mostrará la información acerca de la descarga de la app
const Download = () =>{
    const view = `
        <section class="container-download section">
            <div class="has-text-centered container-download__content">
                <h1 class="container-download__title">DESCARGA NUESTRA APP</h1>
                <p class="container-download__text">Encuentra nuestra aplicación en las diferentes tiendas de aplicaciones.</p>
                <p class="container-download__prox">Proximamente...</p>

                <div class="columns">
                    <div class="column">
                        <img src="./assets/img/googlePlayStore.png" class="img-fluid img_app" alt="">
                    </div>
                    <div class="column">
                        <img src="./assets/img/appStore.png" class="img-fluid img_app" alt="" width="200px">
                    </div>
                    <div class="column">
                        <img src="./assets/img/appGallery.png" class="img-fluid img_app" alt="" width="200px">
                    </div>
                </div>
            </div>
        </section>
    `;

    return view;
}

export default Download;