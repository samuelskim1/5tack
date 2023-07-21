import { useState } from "react";

const Rating = (setRating, setHoverRating, rating, hoverRating) => {
    // const [rating, setRating] = useState(0);
    // const [hoverRating, setHoverRating] = useState(0);
    
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                i += 1;
                return (
                    <span
                        key={i}
                        onClick={() => setRating(i)}
                        onMouseOver={() => setHoverRating(i)}
                        onMouseOut={() => setHoverRating(0)}
                        >
                            {i <= (hoverRating === 0 ? rating : hoverRating) ?
                            <i className="fa-solid fa-star" />
                            : <i className="fa-regular fa-star" />
                            }
                    </span>
                )
            })}
        </div>
    )
}

export default Rating;