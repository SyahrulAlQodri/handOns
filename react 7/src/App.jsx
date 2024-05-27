import { BrowserRouter, Route, Routes }  from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { routeList } from "./routes/routeList";
// import DetailMenu from "./page/DetailMenu"
// import Home from "./page/Home";
// import Login from "./page/Login";
// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home/>} /> 
//       <Route path="/login" element={<Login/>} />
//       <Route path="/menu/:id" element={<DetailMenu/>} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

const App = () => {
  const element = useRoutes (routeList);
  return element;
}

export default App;