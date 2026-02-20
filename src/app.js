function animateMetric(el) {
  const target = Number(el.dataset.target || 0);
  const start = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / 950, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(target * eased));
    if (t < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

document.querySelectorAll(".metric").forEach(animateMetric);

document.getElementById("demoBtn")?.addEventListener("click", () => {
  document.querySelectorAll(".card").forEach((card, i) => {
    card.animate(
      [
        { transform: "translateY(0)", filter: "brightness(1)" },
        { transform: "translateY(-6px)", filter: "brightness(1.1)" },
        { transform: "translateY(0)", filter: "brightness(1)" },
      ],
      {
        duration: 520,
        delay: i * 70,
        easing: "cubic-bezier(0.2, 0.9, 0.2, 1)",
      },
    );
  });
});