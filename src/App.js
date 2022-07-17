import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Sigin from "./routes/Signin/signin.component";

const Shop = () => {
  return (<h1>Hello ich bin Shopseite</h1>)
}

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />}></Route>
      <Route path='shop' element={<Shop />}></Route>
      <Route path='signIn' element={<Sigin />}></Route>
    </Route>
  </Routes>);
}

export default App;
