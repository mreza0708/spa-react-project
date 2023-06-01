import { Link, Outlet,  } from "react-router-dom"
import MyNavbar from "../../components/navbar/nav"
import './article.css'
function Article(){
  return(
    <div className="articlewrapper" >
    <MyNavbar />

    <h1>صفحه مقالات</h1>
    <hr />
    <div className="btn-container">
    <Link to='php' className="linkBtn">php article</Link>
    <Link to='js' className="linkBtn"> js article</Link>
    <Link to='react' className="linkBtn"> react article</Link>
    </div>
   <hr />
   
     <Outlet />

  </div>      

)


}

export default Article
