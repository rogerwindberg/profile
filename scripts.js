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

// Abre o Discord e exibe o perfil do usuário
function openDiscordApp() {
  let userId = "246838387154092032"

  // Verifica se o usuário possui o Discord instalado
  if (window.navigator && window.navigator.msLaunchUri) {
    // para Web Browser
    window.navigator.msLaunchUri("discord://user?id=" + userId)
  } else if (
    window.navigator &&
    window.navigator.userAgent.match(/(android|iphone|ipad)/i)
  ) {
    // para dispositivos Andorid e iOS
    window.location.href = "discord://user?id=" + userId
  } else {
    // para outros dispositivos ou Web Browsers
    window.open("https://discord.com/users/" + userId)
  }
}
