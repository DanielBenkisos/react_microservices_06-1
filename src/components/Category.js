import "./Category.css"
function Category(props) {
    return (
        <div className={'category'}>
            <div>{props.category}</div>
            <div>{props.count}</div>
        </div>
    );
}

export default Category;