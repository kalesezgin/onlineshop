import List from '../../components/category-list/category-list.component'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <List/>
      <Outlet/>
    </div>
  
  )  
}

export default Home
