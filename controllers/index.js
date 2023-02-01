import { home } from "./homeController.js"
import registerAdmin from "./auth/adminRegister/adminRegisterController.js"
import registerCustomer from "./auth/customerRegister/customerRegisterController.js"
import registerSeller from "./auth/sellerRegister/sellerRegisterController.js"
import login from "./auth/loginController.js"
import logout from "./auth/logoutController.js"
import addproduct from "./products/addProduct.js"
import allProducts from './products/getAllProducts.js'
import sellerProducts from './products/getSellerProducts.js'
import findSellerProduct from "./products/findSellerProduct.js"
import findAdminProduct from "./products/findAdminProduct.js"
import deleteSellerProduct from "./products/deleteSellerProduct.js"
import deleteProduct from "./products/deleteProduct.js"
import getUserController from "./auth/getUserController.js"
import getAllUser from "./auth/getAllUser.js"
import addcategory from "./products/addCatagorie.js"
import getCategory from "./products/getCategory.js"
import deleteCustomer from "./auth/deleteCustomerController.js"
import deleteSeller from "./auth/deleteSellerController.js"
import order from "./products/orderController.js"
import orderDetails from "./products/getOrderDetailsController.js"
import deleverToAdmin from "./products/orderDeleverToAdmin.js"
import deleverToCustomer from "./products/deleverToCustomer.js"
import updateProfile from "./auth/updateProfile.js"
import ratingController from "./products/ratingController.js"



const allControllers = {
    home,
    registerAdmin,
    registerCustomer,
    registerSeller,
    login,
    logout,
    addproduct,
    allProducts,
    sellerProducts,
    findSellerProduct,
    findAdminProduct,
    deleteSellerProduct,
    deleteProduct,
    getUserController,
    getAllUser,
    addcategory,
    getCategory,
    deleteCustomer,
    deleteSeller,
    order,
    orderDetails,
    deleverToAdmin,
    deleverToCustomer,
    updateProfile,
    ratingController
}


export default allControllers