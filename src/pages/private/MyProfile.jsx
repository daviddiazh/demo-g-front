import { useSelector } from "react-redux"

const MyProfile = () => {

  const user = useSelector(state => state.auth.user)

  console.log(user)

  return (
    <div>
        <div className="">
                <div className="">
                  <img className="" src={user.photo} alt="Profile" width={90}/>
                  <div className="">
                    <h1 className=""> {user.name}</h1>
                  </div>
                </div>
                
              </div>
    </div>
  )
}

export default MyProfile