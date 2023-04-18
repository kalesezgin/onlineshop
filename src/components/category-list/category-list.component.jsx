import CategoryItem from '../category-item/category-item.component.jsx'
import CategoryListModel from '../../models/category-list.model';

const List = () =>{ 

  return (<div className = 'categories-container'>
    {CategoryListModel.map((category) => (
      <CategoryItem key = {category.id} category={category}/>
    ))}
    </div>
  )
}
export default List
