const initTickers = () => {
  const tickers = document.querySelectorAll(".run-line");

  const tickerText =
    "Дело помощи утопающим — дело рук самих утопающих! &nbsp;•&nbsp; Шахматы двигают вперед не только культуру, но и экономику! &nbsp;•&nbsp; Лед тронулся, господа присяжные заседатели! &nbsp;•&nbsp;";

  const tickerHTML = `
    <div class="run__wrapper">
      <div class="run__item">${tickerText}</div>
      <div class="run__item">${tickerText}</div>
    </div>
  `;

  tickers.forEach((ticker) => {
    ticker.innerHTML = tickerHTML;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initTickers();
});
