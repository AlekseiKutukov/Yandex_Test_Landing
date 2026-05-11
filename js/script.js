const initParticipants = () => {
  const listContainer = document.querySelector(".participants__list");
  const nextBtn = document.querySelector(".btn-next");
  const prevBtn = document.querySelector(".btn-prev");
  const currentNum = document.querySelector(".slider-counter .current");
  const totalNum = document.querySelector(".slider-counter .total");

  if (!listContainer) return;

  // 1. Рендерим обертку внутри контейнера
  listContainer.innerHTML = `<div class="participants__track"></div>`;
  const track = listContainer.querySelector(".participants__track");

  function renderParticipants() {
    track.innerHTML = participants
      .map(
        (p, index) => `
      <div class="participant-card">
        <div class="participant-card__avatar">
          <img src="./assets/images/content/person.png" alt="${p.name}">
        </div>
        <h3 class="participant-card__name">${p.name}</h3>
        <p class="participant-card__status">${p.status}</p>
        <a href="#" class="participant-card__btn">Подробнее</a>
      </div>
    `,
      )
      .join("");
    totalNum.textContent = participants.length;
  }

  renderParticipants();

  let currentIndex = 0;
  const gap = 0;
  const autoPlayTime = 4000;

  function getVisibleCount() {
    return window.innerWidth <= 1000 ? 1 : 3;
  }

  function updateSlider() {
    const visibleCount = getVisibleCount();
    const cardWidth = 100 / visibleCount;

    // Смещение ленты
    track.style.transform = `translateX(-${currentIndex * cardWidth}%)`;

    // Обновление счетчика (показываем индекс последней видимой карточки)
    let displayIndex = currentIndex + visibleCount;
    if (displayIndex > participants.length) displayIndex = participants.length;
    currentNum.textContent = displayIndex;
  }

  function nextSlide() {
    const visibleCount = getVisibleCount();
    if (currentIndex + visibleCount < participants.length) {
      currentIndex++;
    } else {
      currentIndex = 0; // Зацикливание в начало
    }
    updateSlider();
  }

  function prevSlide() {
    const visibleCount = getVisibleCount();
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = participants.length - visibleCount; // Зацикливание в конец
    }
    updateSlider();
  }

  // Слушатели событий
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer();
  });

  // Автоматическая смена
  let timer = setInterval(nextSlide, autoPlayTime);

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, autoPlayTime);
  }

  // Корректное отображение при ресайзе
  window.addEventListener("resize", updateSlider);
  updateSlider();
};

document.addEventListener("DOMContentLoaded", initParticipants);
