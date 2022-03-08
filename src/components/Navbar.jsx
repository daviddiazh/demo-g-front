import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import { app } from "../service/firebase"
import {logoutAction} from "../actions/AuthorActions"
import { useDispatch } from "react-redux"


const Navbar = ({elements}) => {

  const state = useSelector(state=>state.auth)
  const dispatch = useDispatch();

  const handler=()=>{
    app.auth().signOut()
    dispatch(logoutAction())
  }

  return (
    <div>
      <nav>
        <div>
          <img src="" alt="Logo" />
        </div>
        <div>
          <ul className="">
            {elements.map((item, index) => {
                return(
                    <li key={index} className="">
                        <Link
                        className="" style={{marginLeft: "20px"}}
                        to={item.url}
                        >
                            <span>{item.titulo}</span>
                        </Link>
                    </li>
                )
            })}
          </ul>
        </div>
        { state.user 
          ? <button style={{marginRight: "50px"}} className="btn btn-danger" onClick={handler}>Salir</button> 
          : null 
        }
      </nav>
    </div>
  )
}

export default Navbar