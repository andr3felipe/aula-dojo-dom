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

function changeColorAndSize(){
    container.style.backgroundColor = "#00f";
    
}