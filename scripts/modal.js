
const filmes = {
  "premonicao": {
    img: "./imgs/premonicao.jpg",
    sinopse: "Um jovem tem a premonição de que seu avião vai explodir e salva várias pessoas, mas a morte os persegue.",
    link: "./html/premonicao.html"
  },
  "minecraft": {
    img: "./imgs/mine.webp",
    sinopse: "Baseado no famoso jogo, uma aventura épica por mundos cúbicos e perigos ocultos.",
    link: "./html/minecraft.html"
  },
  "bailarina": {
    img: "./imgs/ballerina.jpg",
    sinopse: "Uma órfã sonha em se tornar bailarina em Paris e enfrenta grandes desafios pelo caminho.",
    link: "./html/bailarina.html"
  },
  "thelastofus": {
    img: "./imgs/thelast.webp",
    sinopse: "Em um mundo pós-apocalíptico, Joel e Ellie lutam para sobreviver enquanto enfrentam infectados e humanos hostis.",
    link: "./html/thelastofus.html"
  },
  "rick": {
    img: "./imgs/rick.png",
    sinopse: "Um cientista excêntrico e seu neto vivem aventuras bizarras pelo multiverso.",
    link: "./html/rick.html"
  },
  "gameofthrones": {
    img: "./imgs/gameofthrones.jpg",
    sinopse: "Famílias nobres disputam o Trono de Ferro enquanto ameaças sombrias se aproximam do norte.",
    link: "./html/gameofthrones.html"
  }
};

document.querySelectorAll("figure").forEach(fig => {
  fig.addEventListener("click", () => {
    const key = fig.querySelector("a").dataset.filme;
    const filme = filmes[key];
    if (filme) {
      document.getElementById("modal-img").src = filme.img;
      document.getElementById("modal-sinopse").textContent = filme.sinopse;

      const botaoAssistir = document.getElementById("modal-assistir");
      botaoAssistir.onclick = () => {
        window.location.href = filme.link;
      };

      document.getElementById("modal").style.display = "flex";
    }
  });
});


  document.querySelector(".close").onclick = function () {
  document.getElementById("modal").style.display = "none";
};


window.onclick = function (event) {
if (event.target == document.getElementById("modal")) {
  document.getElementById("modal").style.display = "none";
}
};

document.getElementById("series").addEventListener("click", () => {
  document.querySelectorAll("figure.filme").forEach(el => {
    el.style.display = "none";
  });
  document.querySelectorAll("figure.serie").forEach(el => {
    el.style.display = "inline-block";
  });
});

document.getElementById("filmes").addEventListener("click", () => {
  document.querySelectorAll("figure.filme").forEach(el => {
    el.style.display = "inline-block";
  });
  document.querySelectorAll("figure.serie").forEach(el => {
    el.style.display = "none";
  });
});


function setAtivo(id) {

  document.querySelectorAll(".header-nav a").forEach(link => {
    link.classList.remove("header-nav-active");
  });


  const linkAtivo = document.getElementById(id);
  if (linkAtivo) {
    linkAtivo.classList.add("header-nav-active");
  }
}


document.getElementById("series").addEventListener("click", (e) => {
  e.preventDefault();
  setAtivo("series");

  document.querySelectorAll("figure.filme").forEach(el => el.style.display = "none");
  document.querySelectorAll("figure.serie").forEach(el => el.style.display = "inline-block");
});

// Ao clicar em Filmes
document.getElementById("filmes").addEventListener("click", (e) => {
  e.preventDefault();
  setAtivo("filmes");

  document.querySelectorAll("figure.filme").forEach(el => el.style.display = "inline-block");
  document.querySelectorAll("figure.serie").forEach(el => el.style.display = "none");
});




