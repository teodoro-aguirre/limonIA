// Página que mostrará formulario de contacto
const Contact = () => {
    const view = `
        <section class="section container-contacto">
            <h1 class="title has-text-centered">¿Quieres una demo? Envianos un mensaje :)</h1>
            <div class="columns is-vcentered">
                <div class="column">
                    <form  action="#/enviado" id="form_contact">
                        <div class="mb-3">
                            <label for="FormControlCorreo" class="form-label label_form">Correo Electronico de contacto</label>
                            <input type="email" class="form-control input_form" id="FormControlCorreo" placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="FormControlAsunto" class="form-label label_form">Asunto</label>
                            <input type="text" class="form-control input_form" id="FormControlAsunto" placeholder="Asunto General">
                        </div>
                        <div class="mb-3">
                            <label for="FormControlMensaje" class="form-label label_form">Mensaje</label>
                            <textarea class="form-control input_form" id="FormControlMensaje" rows="3"></textarea>
                        </div>
                        <div class="has-text-centered">
                            <button type="submit" class="btn btn-primary mb-3 button_form">Enviar mensaje</button>
                        </div>
                    </form>
                </div>
                <div class="column has-text-centered">
                    <img src="./assets/icon/logo6.svg" class="img-fluid" width="400px">
                </div>
            </div>
        </section>
    `;

    return view;
}

export default Contact;