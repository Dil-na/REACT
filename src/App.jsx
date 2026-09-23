import ClassComp from "./Components/ClassComp"
import FunctionalComp from "./Components/FunctionalComp"
import CounterClass from "./Components/CounterClass"
import MountingCounter from "./Components/lifecyclemethod/Mounting"
import UnMountingCounter from "./Components/lifecyclemethod/UnMounting"
import UpdatingCounter from "./Components/lifecyclemethod/Updating"
import UseNavigateComp from "./Components/reactRouterDomCpm/UseNavigatteComp"
import UseParamsComp from "./Components/reactRouterDomCpm/UseParamsComp"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/reactRouterDomCpm/Home"
import About from "./Components/reactRouterDomCpm/About"
import LINKcomponent from "./Components/reactRouterDomCpm/LINKcomponent"
import Test from "./Components/reactRouterDomCpm/test"
import NestedRoute from "./Components/reactRouterDomCpm/NestedRoute"
import Navbar from "./Components/reactRouterDomCpm/Navbar"
import ShowHide from "./Components/Hooks/UseState/ShowHide"
import UseEffectHook from "./Components/Hooks/useEffect/useEffectHook"
import UseStateHook from "./Components/Hooks/UseState/UseStateHook"
import UseEffectCount from "./Components/Hooks/useEffect/UseEffectCount"
import UseEffectApi from "./Components/Hooks/useEffect/UseEffectApi"

function App() {


  return (
    <>
      {/* <ClassComp /> 
      <FunctionalComp />
      <CounterClass />
      <MountingCounter />
      <UnMountingCounter />
      <UpdatingCounter /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClassComp />} />
          <Route path="/functional" element={<FunctionalComp />} />
          <Route path="/counter" element={<CounterClass />} />
          <Route path="/mounting" element={<MountingCounter />} />
          <Route path="/unmounting" element={<UnMountingCounter />} />
          <Route path="/updating" element={<UpdatingCounter />} />

{/* react router dom */}
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/LINKcomponent" element={<LINKcomponent/>} />
          <Route path="/Test" element={<Test/>} />

          <Route path="/useNavigate" element={<UseNavigateComp />} />  
          <Route path="/useParams/:id" element={<UseParamsComp />} />
          <Route path="/nested" element={<NestedRoute />}>
          <Route path="home" element={<Home />} />
          
          </Route>

          {/* Navbar */}
          <Route path="/navbar" element={<Navbar/>}>
          <Route index element = {<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="counterclass" element={<CounterClass/>}/>
          </Route>
          <Route path="/usestatehook" element={<UseStateHook/>}/>
          <Route path="/ShowHide" element={<ShowHide/>}/>
          <Route path="/useEffect" element={<UseEffectHook/>}/>
          <Route path="/useEffect" element={<UseEffectCount/>}/>
          <Route path="/useEffect" element={<UseEffectApi/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
