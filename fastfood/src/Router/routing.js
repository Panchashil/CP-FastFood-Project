import { createBrowserRouter } from "react-router-dom";
import ProctedRouting from "./ProctedRouting";
import ProductAddComp from "../Menu/ProductAddComp"
import ProductUpdateComp from "../Menu/ProductUpdateComp"
import AdminCtrlComp from "../LoginComponents/AdminCtrlComp";
import RegistrationComp from "../LoginComponents/RegistrationComp";
import MenuPageComp from "../Menu/MenuPageComp";
import MenuContainer from "../Menu/MenuContainer";
import LoginComp from "../LoginComponents/LoginComp";
import UserUpdate from "../LoginComponents/UserUpdate";
import AddCart from "../Menu/AddCart";
import ContactForm from "../LandingPage/ContactForm"
import FinalPageComp from "../Menu/FinalPageComp"
import AddFoodItems from "../Menu/AddFoodItems"
// import LandingComp from "../LandingPage/LandingComp";
import About from "../LandingPage/About";
import LandingComp from "../LandingPage/LandingComp";
import PageNotFound from '../LandingPage/PageNotFound'

const router = createBrowserRouter([
    
    // {path:" ",element:<AdminCtrlComp/>},
   
    // {path:"landing",element:<LandingComp/>},

    // {path:"menu",element:<MenuPageComp / >, 
    // children:[
    //     {path:"MenuContainer",element:<MenuContainer />},
    // ]},

    {path:"",element:<LandingComp />},
    {path:"Registration",element:<RegistrationComp />},
    {path:"logincomp",element:<LoginComp></LoginComp>},
    {path:"MenuContainer",element:<MenuContainer />},
    {path:"landingpage",element:<LandingComp />},
    {path:"about",element:<About/>},
    {path:"contact",element:<ContactForm />},
    {path:"productDB",element:<MenuContainer />},
    {path:"productAdd",element:<ProductAddComp />},
    {path:"productUpdate",element:<ProductUpdateComp />},
    {path:"productUpdate/:id",element:<ProductUpdateComp />},
    {path:"landingpage",element:<LandingComp />},
    {path:"logincomp",element:<LoginComp></LoginComp>},
    {path:"AdminCtrl",element:<AdminCtrlComp></AdminCtrlComp>},
    {path:"UserUpdate",element:<UserUpdate></UserUpdate>},
    {path:"UserUpdate/:id",element:<UserUpdate></UserUpdate>},
    {path:"Registration",element:<RegistrationComp />},
    {path:"MenuContainer",element:<MenuContainer />},
    {path:"cart",element:<AddCart />},
    {path:"cart/:id",element:<AddCart />},
    {path:"about",element:<About/>},
    {path:"contact",element:<ContactForm />},
    {path:"finalpage",element:<FinalPageComp />},
    {path:"addFood",element:<AddFoodItems />},
    {path:"addFood/:id",element:<AddFoodItems />},
    

    {path:"productAdd",element:<ProductAddComp />},
    {path:"productUpdate",element:<ProductUpdateComp />},
    {path:"productUpdate/:id",element:<ProductUpdateComp />},
    {path:"mydashboard",
       
        element:<ProctedRouting Component={MenuContainer} /> ,
         children: [
            {path:"productDB",element:<MenuContainer />},
            {path:"productAdd",element:<ProductAddComp />},
            {path:"productUpdate",element:<ProductUpdateComp />},
            {path:"productUpdate/:id",element:<ProductUpdateComp />},
            {path:"landingpage",element:<LandingComp />},
            {path:"logincomp",element:<LoginComp></LoginComp>},
            {path:"AdminCtrlComp",element:<AdminCtrlComp></AdminCtrlComp>},
            {path:"UserUpdate",element:<UserUpdate></UserUpdate>},
            {path:"UserUpdate/:id",element:<UserUpdate></UserUpdate>},
            {path:"Registration",element:<RegistrationComp />},
            {path:"MenuContainer",element:<MenuContainer />},
            {path:"cart",element:<AddCart />},
            {path:"cart/:id",element:<AddCart />},
            {path:"about",element:<About/>},
            {path:"contact",element:<ContactForm />},
            {path:"finalpage",element:<FinalPageComp />},
            {path:"addFood",element:<AddFoodItems />},
            {path:"addFood/:id",element:<AddFoodItems />},

         ]},

         {path:"*",element:<PageNotFound />}


])

export default router;