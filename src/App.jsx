import './App.css'
import SideBar from './SideBar/SideBar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HeaderNavbar from './SideBar/HeaderNavbar'
import Analytics from './Component/DashBoarComponent/Analytics'
import Sales from './Component/DashBoarComponent/Sales'
import AvailableProduct from './Component/DashBoarComponent/AvailableProduct'
import AddProduct from './Component/ProductManagment/AddProduct'
import EditProduct from './Component/ProductManagment/EditProduct'
import ViewOrder from './Component/OrderMangment/ViewOrder'
import ShippingStatus from './Component/OrderMangment/ShippingStatus'
import ReturnAndRefund from './Component/OrderMangment/ReturnAndRefund'
import DiscountAndCoupon from './Component/Sales&Marketing/DiscountAndCoupon'
import EmailandSms from './Component/Sales&Marketing/EmailandSms'
import CustomerDetails from './Component/User Managment/CustomerDetails'
function App() {
  return (
    <>
      {/* <DashboardCharts/> */}

      <Router>
        <HeaderNavbar />
        <div className='flex h-[92vh]'>
          <div className='w-[20%] border'>
            <SideBar />
          </div>
          <div className='w-[80%]'>
            <Routes>
              <Route path='/' element={<Analytics />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/sales' element={<Sales />} />
              <Route path='/availbleProduct' element={<AvailableProduct />} />
              <Route path='/addProduct' element={<AddProduct />} />
              <Route path='/editProduct' element={<EditProduct />} />
              <Route path='/vieworder' element={<ViewOrder />} />
              <Route path='/shipping' element={<ShippingStatus />} />
              <Route path='/returnRefund' element={<ReturnAndRefund />} />
              <Route path='/discountandcoupns' element={<DiscountAndCoupon />} />
              <Route path='/email' element={<EmailandSms />} />
              <Route path='/customerDetail' element={<CustomerDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}
export default App