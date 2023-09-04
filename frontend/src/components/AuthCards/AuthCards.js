import { useEffect, useRef } from "react";
import './AuthCards.scss';


const AuthCards = ({ card1, card2 }) => {
  const firstCard = useRef();
  const secondCard = useRef();

  return (
    <div id="auth-cards-background">
      <main id="auth-cards-container">
        <section className="auth-card left-card" ref={firstCard}>
          {card1}
        </section>

        <section className="auth-card right-card" ref={secondCard}>
          {card2}
        </section>
      </main>
    </div>
  )
};

export default AuthCards;