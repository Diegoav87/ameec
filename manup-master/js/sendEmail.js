function sendEmail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    const serviceId = "service_2pftymb";
    const templateId = "template_ij8m448";

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            document.getElementById("name").value = "",
                document.getElementById("email").value = "",
                document.getElementById("subject").value = "",
                document.getElementById("message").value = "",
                console.log(res);
            alert("Mensaje enviado");
        })
        .catch(err => {
            console.log(err);
            alert("Hubo un error, por favor intente de nuevo")
        })
}

