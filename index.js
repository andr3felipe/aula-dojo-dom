const img1 = document.getElementById("gatinho1");
img1.addEventListener("mouseover", () => {
  img1.src =
    "https://chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg";
});

img1.addEventListener("mouseout", () => {
  img1.src =
    "https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg";
});

const container = document.getElementById("container-color");

function changeColorAndSize() {
  container.style.backgroundColor = "#00f";
  container.style.width = "400px";
}

function normalColorAndSize() {
  container.style.backgroundColor = "red";
  container.style.width = "200px";
}

let contador = 0;
function incrementar() {
  atualizar(++contador);
}

function decrementar() {
  atualizar(--contador);
}

function atualizar(count) {
  const contador = document.getElementById("contador");
  contador.innerHTML = count;
}

function resetar() {
  atualizar((count = 0));
}

function changeText() {
  const text = document.getElementById("texto");
  text.innerText = "Code Dojo DOM";
}
