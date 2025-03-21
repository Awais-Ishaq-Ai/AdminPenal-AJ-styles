import { useContext } from 'react'
import './App.css'
import { Context } from './Context/ContextProvider'
import SideBar from './SideBar/SideBar'
import DashboardCharts from './Charts/DashboardCharts '
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HeaderNavbar from './SideBar/HeaderNavbar'
import Analytics from './Component/DashBoarComponent/Analytics'
import Sales from './Component/DashBoarComponent/Sales'
import AvailableProduct from './Component/DashBoarComponent/AvailableProduct'
function App() {
  return (
    <>
      {/* <DashboardCharts/> */}

      <Router>
        <HeaderNavbar />
        <div className='flex h-[92vh]'>
          <div className='w-[24%] border'>
            <SideBar />
          </div>
          <div className='w-[76%]'>
            <Routes>
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/sales' element={<Sales />} />
              <Route path='/availbleProduct' element={<AvailableProduct />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}
export default App