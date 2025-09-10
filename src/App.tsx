import { Route, Routes } from "react-router-dom"
import ProductDetail from "./components/b1/ProductDetail"
import Student from "./components/b2/Student"
import Students from "./components/b3/Students"
import Studentss from "./components/b4/Studentss"
import Login from "./components/b5/Login"
import PrivateRouter from "./components/b5/PrivateRouter"
import Account from "./components/b5/Account"
import Logins from "./components/b6/Logins"
import PrivateRouters from "./components/b6/PrivateRouters"
import Accounts from "./components/b6/Accounts"
import Team from "./components/b7/Team"
import Teams from "./components/b7/Teams"
import TeamsIndex from "./components/b7/TeamsIndex"

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/product/:id" element={<ProductDetail/>}/> */}
        {/* <Route path="/student/:name" element={<Student/>}/> */}
        {/* <Route path="/students" element={<Students/>}/> */}
        {/* <Route path="/studentss" element={<Studentss/>}/> */}
        {/* <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateRouter/>}>
          <Route path="/account" element={<Account/>}/>
        </Route> */}
        {/* <Route path="/logins" element={<Logins/>}/>
        <Route element={<PrivateRouters/>}>
        <Route path="/accounts" element={<Accounts/>}/>
        </Route> */}
        <Route path="/teams" element={<Teams/>}>
        <Route index element={<TeamsIndex/>}/>
        <Route path=":teamId" element={<Team/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App


