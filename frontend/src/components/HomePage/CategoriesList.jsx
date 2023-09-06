import { useEffect } from "react";
import { useSelector } from "react-redux";


const CategoriesList = () => {
  const categories = useSelector(state => Object.values(state?.categories));

  const generateCategory = (category) => {
    const split = category.name.split("$");

    if (split[0] && split[1]) {
      return (
        <li>
          {split[1]} ({split[0]})
        </li>
      )
    } else {
      return (
        <li>
          {split[0]}
        </li>
      )
    }
  };


  useEffect(() => {
    
  }, [categories])


  return (
    <ul id="category-list">
      {categories?.map(category => (
        generateCategory(category)
      ))}
    </ul>
  )
};

export default CategoriesList;