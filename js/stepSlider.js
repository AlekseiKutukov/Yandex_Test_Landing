const initStepsSlider = () => {
  const grid = document.querySelector(".steps-grid");
  const prevBtnSteps = document.querySelector(".steps-prev");
  const nextBtnSteps = document.querySelector(".steps-next");
  const dots = document.querySelectorAll(".dot");

  if (!grid || !prevBtnSteps || !nextBtnSteps) return;

  let currentStep = 0;
  const totalSteps = dots.length;

  const updateSlider = () => {
    // Сдвигаем ленту на ширину экрана * индекс
    grid.style.transform = `translateX(-${currentStep * 100}%)`;

    // Обновляем активную точку
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentStep);
    });

    // Управление состоянием кнопок (отключение на границах)
    prevBtnSteps.disabled = currentStep === 0;
    nextBtnSteps.disabled = currentStep === totalSteps - 1;
  };

  // Вешаем события
  nextBtnSteps.addEventListener("click", () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      updateSlider();
    }
  });

  prevBtnSteps.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateSlider();
    }
  });

  // Инициализируем начальное состояние кнопок
  updateSlider();
};

document.addEventListener("DOMContentLoaded", () => {
  initStepsSlider();
});
