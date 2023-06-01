import PrivateRouter from "./pages/privateRoute";

import About from "./pages/about/about";
import Article from "./pages/article/article";
import Course from "./pages/course/course";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Panel from "./pages/panel/panel";
import Setting from "./pages/setting";

const Routes = [
{path : "/" , element : <Home />},
{path : "/about" , element : <About />},
{path : "/article/*" , element : <Article /> , children :[
   {path :"php" , element : <h1>php article</h1>} ,
   {path : "js" , element : <h1>javascript article</h1>} ,
   {path : "react" , element : <h1>react article</h1>} ,
]},
{path : "/course/:courseId" , element : <Course />},
{path : "/login" , element : <Login />},
{path : "/panel" , element :<PrivateRouter><Panel /></PrivateRouter>},
{path : "/setting" , element :<PrivateRouter><Setting /></PrivateRouter> }










]
export default Routes