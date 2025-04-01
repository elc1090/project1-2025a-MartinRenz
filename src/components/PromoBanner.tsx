import { useEffect, useState } from "react";
import "./PromoBanner.css"; // Importando o CSS para estilização

function PromoModal() {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours} h ${minutes} m ${secs} s`;
  };

  if (!isVisible) return null;

  return (
    <div className="promo-banner">
      <div className="promo-content">
        <span className="promo-text">
          <strong>Somente hoje</strong> | Promoção relâmpago de 24 horas! Cursos a partir de R$ 29,90 cada.
          <br />
          <strong>Termina em {formatTime(timeLeft)}.</strong>
        </span>
      </div>
      <button className="close-btn" onClick={() => setIsVisible(false)}>
        &times;
      </button>
    </div>
  );
}

export default PromoModal;