import { useEffect } from "preact/hooks";

export default function BinaryRain() {
  useEffect(() => {
    const container = document.querySelector(".binary-rain");
    if (!container) return;

    // Clear existing digits
    container.innerHTML = "";

    // Create new digits
    const digits = "01";
    const columns = Math.floor(window.innerWidth / 20);
    const rows = Math.floor(window.innerHeight / 20);

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const digit = document.createElement("div");
        digit.className = "binary-digit";
        digit.textContent = digits[Math.floor(Math.random() * digits.length)];
        digit.style.left = `${i * 20}px`;
        digit.style.top = `${-j * 20}px`;
        digit.style.animationDuration = `${5 + Math.random() * 10}s`;
        digit.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(digit);
      }
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div class="binary-rain"></div>;
}
