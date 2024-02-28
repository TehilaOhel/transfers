import { Menu } from "./pages/menu"
import { UseingsPage } from "./pages/useingPage"
import { TransferPage } from "./pages/transfers/TransfersPage"
import { Login } from "./pages/login"
import { MyAccount } from "./pages/myAccount"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Main } from "./main"
import { MakingTransfer } from "./pages/maikingTraansfer"


export const AppRouter = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<Menu />} >
                    <Route path="" element={<Home />} />
                    {/* <Route path="changPass" element={<ChangPass />} /> */}
                    <Route path="transfers" element={<TransferPage />} >
                        {/* <Route path="markUpdate" element={<MarkUpdate />} /> */}
                        {/* <Route path="classMark" element={<ClasseMark />} /> */}
                    </Route>
                    <Route path="useings" element={<UseingsPage />}>
                        {/* <Route path="teoda" element={<Teoda />} /> */}
                    </Route>
                    <Route path="myAccont" element={<MyAccount />}>
                        {/* <Route path=":classNumber" element={<ClassAt />} /> */}
                    </Route>
                    <Route path="makingTransfer" element={<MakingTransfer></MakingTransfer>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        
        </>
}