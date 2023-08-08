import { useEffect, useRef } from "react";
import './AuthCards.scss';


const AuthCards = ({ card1, card2 }) => {
  const firstCard = useRef();
  const secondCard = useRef();

  useEffect(() => {
    firstCard?.current?.classList.remove('hidden');
    firstCard?.current?.classList.add('animated');
    secondCard?.current?.classList.remove('hidden');
    secondCard?.current?.classList.add('animated');
  }, [])
  
  return (
    <main id="auth-cards-background">
      <div id="auth-cards-container">
        <section className="auth-card left-card hidden fadeInUp" ref={firstCard}>
          {card1 || ""}
        </section>

        <section className="auth-card right-card hidden fadeInUp" ref={secondCard}>
          {card2 || ""}
        </section>
      </div>
    </main>
  )
};

export default AuthCards;