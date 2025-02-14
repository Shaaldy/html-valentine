function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
  
    // Случайное положение, цвет, размер и скорость
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 13 + 3 + "s";
    heart.style.width = heart.style.height = Math.random() * 45 + 10 + "px";
  
    // Случайный цвет
    const colors = ["#ff304f", "#ff5678", "#ff85a2", "#ff99cc"];
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  function sendLove(name = "Sofa") {
    let message = document.getElementById("message");
    
    // Основное сообщение (остаётся на экране)
    message.innerHTML = `You're Loved ${name} ❤️ <br> 
      <span id="guest" style="font-size: 0.8em; color: #ff304f;">BN</span>`;
    message.style.opacity = "1";
  
    // Скрытие только подписи "Special Guest" через 5 секунд
    setTimeout(() => {
      let guestText = document.getElementById("guest");
      if (guestText) guestText.style.opacity = "0";
    }, 3000);
  
    // Создание сердец с задержкой
    let maxHearts = 500;
    for (let i = 0; i < maxHearts; i++) {
      setTimeout(createHeart, i * 100);
    }
  }
  
  // Запуск с именем Sofa
  sendLove();
  