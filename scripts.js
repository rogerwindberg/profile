function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

function toggleIcon() {
  let icon = document.getElementById("ionIcon")
  let iconName = icon.getAttribute("name")
  if (iconName === "chevron-down-outline") {
    icon.setAttribute("name", "chevron-up-outline")
  } else {
    icon.setAttribute("name", "chevron-down-outline")
  }
}

function collapse() {
  const content = document.getElementById("exp-li")
  const list = document.getElementById("list")

  content.classList.toggle("toggle")
  exp.classList.toggle("toggle")
  list.classList.toggle("toggle")
}

// Copia o texto
function copyToClipboard() {
  let text = "@rogerwindberg"

  navigator.clipboard
    .writeText(text)
    .then(function () {
      let popupContent = document.querySelector(".popup-content")
      let copiedMessage = document.getElementById("copiedMessage")

      // Oculta o conteúdo do popup
      popupContent.classList.add("hide-content")

      // Exibe a mensagem de "Copiado"
      copiedMessage.style.display = "flex"

      // Restaura o conteúdo do popup após 2 segundos
      setTimeout(function () {
        popupContent.classList.remove("hide-content")
        copiedMessage.style.display = "none"
        closePopup()
      }, 2000)
    })
    .catch(function (err) {
      console.error("Falha ao copiar o texto: ", err)
    })
}

// Fecha o popup
function closePopup() {
  let popup = document.getElementById("popup")
  popup.style.display = "none"
}

// Mostra o popup quando o ícone do Discord é clicado
let discordIcon = document.getElementById("discord")
discordIcon.addEventListener("click", function () {
  let popup = document.getElementById("popup")
  if (popup.style.display === "flex") {
    popup.style.display = "none"
  } else {
    popup.style.display = "flex"
  }
})
