import { useEffect } from "react";
import { useSelector } from "react-redux";


const CategoriesList = () => {
  const categories = useSelector(state => Object.values(state?.categories));

  const generateCategory = (category) => {
    const split = category.name.split("$");

    if (split[0] && split[1]) {
      return split[1] + " (" + split[0] + ")"
    } else {
      return split[0]
    }
  };


  useEffect(() => {
    
  }, [categories])


  return (
    <ul id="category-list">
      {categories?.map(category => (
        <li>
          <div className="category-info">
            <h4>
              {generateCategory(category)}
            </h4>

            <div>
              <p>
                {category.description}
              </p>

              <span>
                {category.wikiLink}
              </span>
            </div>
          </div>

          <div className="category-images-container">
            {category.game_id.map(game => (
              <img src={game.imageUrls[0]} alt={game.name} style={{width: `calc(100% / ${category.game_id.length})`}}/>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
};

export default CategoriesList;