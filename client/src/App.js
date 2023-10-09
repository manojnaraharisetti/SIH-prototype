import PanchyatHome from "./admin/PanchyatHome";
import PanchyatLogin from "./admin/PanchyatLogin";
import PanchyatAdd from "./admin/PanchyatAdd";
import PanchayatView from "./admin/PanchayatView";
import { Route, Routes } from "react-router-dom";
import Navbar from "./client/Navbar/Navbar";
import Categories from "./client/Categories/Categories";
import DistrictWiseProducts from "./client/DistrictWiseProducts/DistrictWiseProducts"
import Home from "./client/Home/Home";
import SelfAdd from "./self/SelfAdd"
import SelfHome from "./self/SelfHome"
import SelfLogin from "./self/SelfLogin"
import SelfProfile from "./self/SelfProfile"
import { CustomProvider } from './self/Context';
import Districtmapfulllist from "./client/DistrictWiseFullList/Distritmapfulllist"
import Districtindepth from "./client/DistrictWiseFullList/Districtindepth";
import About from "./client/About/About";
import RouteMaps from "./client/RoutingMaps/RouteMaps";
import Docs from "./client/Docs";
import { useState } from "react";
import ImageView from "./client/360degimage/ImageView";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <>
      <div className="content">
        <CustomProvider>
          <Navbar language={language}
            handleSetLanguage={language => {
              setLanguage(language);
              storeLanguageInLocalStorage(language);
            }} />
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="categories" element={<Categories />} />
            <Route
              path="district-wise-products"
              element={<DistrictWiseProducts />}
            />
            <Route path="/districtindepth" element={<Districtindepth language={language} />} />
            <Route path="/districtindepthmap" element={<Districtmapfulllist />} />
            <Route path="/routemaps" element={<RouteMaps />} />
            <Route path="/panchayatlogin" element={<PanchyatLogin />} />
            <Route path="/panchayathome" element={<PanchyatHome />} />
            <Route path="/panchayatadd" element={<PanchyatAdd />} />
            <Route path="/panchayatview" element={<PanchayatView />} />
            <Route path="/selfadd" element={<SelfAdd />} />
            <Route path="/selfhome" element={<SelfHome />} />
            <Route path="/selflogin" element={<SelfLogin />} />
            <Route path="/selfprofile" element={<SelfProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/image" element={<ImageView />} />

          </Routes>
        </CustomProvider>
      </div>

    </>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
