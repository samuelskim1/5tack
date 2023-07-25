const CategoryButton = ({category}) => {
    console.log(category)
    return (
        <div className="category-button">
            <p>{category.name.split('$')[0]}</p>
        </div>
    )
}

export default CategoryButton;