import { useSelector } from "react-redux";


const CategoriesList = () => {
  const categories = useSelector(state => Object.values(state?.categories));

  return (
    <>
      {categories?.map(category => "hello")}
    </>
  )
};

export default CategoriesList;