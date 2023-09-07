import { useState } from "react";
import { useSelector } from "react-redux";


const CategoriesList = () => {
  const categories = useSelector(state => Object.values(state?.categories));
  const [expanded, setExpanded] = useState(Array(11).fill(false));

  const generateCategory = (category) => {
    const split = category.name.split("$");

    if (split[0] && split[1]) {
      return split[1] + " (" + split[0] + ")"
    } else {
      return split[0]
    }
  };

  const expandCategory = (idx) => {
    setExpanded(prev => {
      const next = prev;
      next.fill(false);
      next[idx] = true;
      return next;
    })
  };

  const collapseCategory = (idx) => {
    setExpanded(prev => {
      const next = prev;
      next.fill(false);
      return next;
    })
  }


  return (
    <ul id="category-list">
      <div id="game-show-shadow-anchor">
        <div id="game-show-shadow" />
      </div>
      {categories?.map((category, idx) => (
        <li key={category._id + idx} >
          <div className="category-info">
            <h4>
              {generateCategory(category)}
            </h4>

            {/* <p style={expanded[idx] ? {display: "inline"} : {display: "-webkit-box"}}> */}
            <p style={expanded[idx] ? {height: "100%"} : {height: "57px"}}>
              {category.description}

              <br/>

              <a href={category.wikiLink} target="_blank" rel="noreferrer noopener" >Source: Wikipedia</a>
            </p>

            {expanded[idx] ? (
              <span onClick={() => collapseCategory(idx)}>
                Show less
              </span>
            ) : (
              <span onClick={() => expandCategory(idx)}>
                Learn more
              </span>
            )}
          </div>

          <div className="category-images-container">
            {category.game_id.map(game => (
              <img 
                src={game.imageUrls[0]} alt={game.name} 
                style={{width: `calc(100% / ${category.game_id.length})`}}
                className={expanded[idx] ? "expanded" : ""}
                />
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
};

export default CategoriesList;