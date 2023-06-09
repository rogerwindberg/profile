// Copia o texto
function copyToClipboard() {
  let text = 'Roger "DexTiger" Windberg#6896'

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
