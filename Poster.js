// --- УБИРАЕМ КАЧЕСТВО, РЕЙТИНГ, TV ---
(function hideBadges() {
    const style = document.createElement('style');
    style.textContent = `
        /* Качество: 4K / WEB-DL / TS */
        .card__quality,
        .quality,
        .brief__quality,
        .tag--quality,
        .info__quality {
            display: none !important;
        }

        /* Рейтинг */
        .card__vote,
        .vote,
        .rating,
        .card-vote,
        .rate {
            display: none !important;
        }

        /* Надпись TV */
        .card__type,
        .type,
        .badge-tv,
        .card--tv .card__type {
            display: none !important;
        }

        /* Убираем твои лейблы "Сериал" / "Фильм" */
        .content-label {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
})();
