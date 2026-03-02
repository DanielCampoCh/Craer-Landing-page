document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let correo = document.getElementById("correo").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    if (!correo || !nombre || !asunto || !mensaje) {
        alert ("por favor, cmpleta todos los campos");
        return;
    }

    let InformacionContacto = JSON.parse (localStorage.getItem("InformacionContacto")) || [];
    InformacionContacto.push({correo,nombre,asunto,mensaje});

    localStorage.setItem("InformacionContacto", JSON.stringify(InformacionContacto));

    alert("Su informacion se guardo correctamente");

    location.reload()

});
