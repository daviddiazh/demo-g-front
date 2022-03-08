import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {privateNavbar} from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../app/middleware/payloadProjects"

const PrivateLayout = () => {

    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    useEffect(()=>{
        app.auth().onAuthStateChanged((user)=>{
            if(user){
                dispatch(getUser(user.multiFactor.user.uid))
            }else{
                navigate("/")
            }
        })
    },[])

    return (
        <div>
            {state.user
        ?(
        <main className="">
            <Navbar elements={privateNavbar} url="/private/HomePage"/>
        
            <div className=""> 
                <div className="">
                    <Outlet/>
                </div>
            </div>
               
            <Footer/> 
        </main>
        )
        :
        null}
        </div>
    )
}

export default PrivateLayout