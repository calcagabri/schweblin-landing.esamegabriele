
const contenedor = document.getElementById("lista-obras");

fetch("data/obras.json")
  .then((respuesta) => respuesta.json())
  .then((obras) => {
    obras.forEach((obra) => {
      contenedor.innerHTML += `
        <div class="col">
          <div class="card card-obra h-100 border border-2 border-danger">
            <div class="card-body d-flex flex-column">
              <i class="bi ${obra.icono} fs-1 text-danger"></i>
              <p class="text-muted mt-2 mb-1">${obra.genero}, ${obra.anio}</p>
              <h3 class="card-title">${obra.titulo}</h3>
              <p class="card-text mt-auto">${obra.descripcion}</p>
            </div>
          </div>
        </div>`;
    });
  })
  .catch(() => {
    contenedor.innerHTML = '<p class="text-danger">No se pudieron cargar las obras.</p>';
  });


const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});
