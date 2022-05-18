import logo from './logo.svg';
import './App.css';
import Detail from './component/detailBrand';
import Home from './component/Home';
import Populer from './component/populer';
import Terbaru from './component/terbaru';
import Spesification from './component/Spesification';
import Coment from './component/Coment';
import Search from './component/search';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/populer" element={<Populer />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/coment" element={<Coment />} />
        <Route path="/detail/">
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/spesification/">
          <Route path=":id" element={<Spesification />} />
        </Route>
        <Route path="/cari/">
          <Route path=":id" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}
function NoPage() {
  return (
    <p>Data tidak ditemukan</p>
  )
}
export default App;
