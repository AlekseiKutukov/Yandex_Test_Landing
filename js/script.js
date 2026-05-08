const initParticipants = () => {
  const listContainer = document.querySelector(".participants__list");

  if (!listContainer) return;

  function renderParticipants() {
    listContainer.innerHTML = participants
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
  }

  renderParticipants();
};

// Запуск при загрузке страницы
document.addEventListener("DOMContentLoaded", initParticipants);
