import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


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
      const next = [ ...prev ];
      next.fill(false);
      next[idx] = true;
      return next;
    })
  };

  const collapseCategory = () => {
    setExpanded(prev => {
      const next = [ ...prev ];
      next.fill(false);
      return next;
    })
  }

  // useEffect(() => {
  //   let expandedCategory = document?.querySelector('.expanded-cat');
  //   let expandedDescription = document?.querySelector('.expanded-description');
  //   window.requestAnimationFrame(() => {
  //     let fullHeight = expandedDescription?.getBoundingClientRect();
  //     // if (expandedDescription) expandedDescription.style.maxHeight = "100%";
  //     if (expandedCategory) expandedCategory.style.maxHeight = "100%";
  //     console.log(expandedDescription?.style);
  //     console.log(fullHeight?.height);
  //   })
  // }, [expanded])


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

            <p 
              style={expanded[idx] ? {display: "inline-block"} : {display: "-webkit-box"}} 
              className={expanded[idx] ? "expanded-description" : ""} 
              >
              {category.description}
            </p>

            {expanded[idx] && <a href={category.wikiLink} target="_blank" rel="noreferrer noopener" >Source: Wikipedia</a>}

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
            {category.game_id.map((game, gameIdx) => (
              <Link to={`/games/${game.nameURL}`} key={game._id + gameIdx + "images"} >
                <img 
                  src={game.imageUrls[0]} alt={game.name} 
                  style={{width: `calc(100% / ${category.game_id.length})`}}
                  className={expanded[idx] ? "expanded" : ""}
                  />
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
};

export default CategoriesList;