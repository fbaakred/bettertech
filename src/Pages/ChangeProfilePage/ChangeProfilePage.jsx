import { React, useState, useEffect, useRef } from "react";
import { auth, db} from "../../firebase";
import "./changeprofilepage.css";
import { useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { getDoc, doc, updateDoc} from "firebase/firestore";

const ChangeProfilePage = () => {

  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState([]);
  const inputRef = useRef([]);
  const docRef = doc(db, "users", user.uid);
  let navigate = useNavigate();
  
  const handleClickChange = async () => {
    let displayName = (inputRef.current.displayName.value !== "") ? inputRef.current.displayName.value : userData.displayName
    let email = (inputRef.current.email.value !== "") ? inputRef.current.email.value : userData.email
    let phone = (inputRef.current.phone.value !== "") ? inputRef.current.phone.value : userData.phone
    await updateDoc(docRef,{
      email: email,
      displayName: displayName,
      phone: phone
    });
  }

  const handleClickBack = () => {
    navigate("/profile")
  }
  
  useEffect(() => {
    const getUserData = async () => {
      const docSnap = await getDoc(docRef);
      setUserData({...docSnap.data()});
    };
    getUserData()
  },[docRef]);


  return (
    <div className="page-content page-container" id="page-content"> 
    {user &&
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile" />
                    </div>
                    <h6 className="f-w-600">Name</h6>
                    <input className="input-up" id="displayName" placeholder={userData.displayName} ref = {ref => inputRef.current.displayName = ref}></input>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <input className="input-down" id="email" type="text" placeholder={userData.email} ref = {ref => inputRef.current.email = ref}/>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <input className="input-down" id="phone" placeholder={userData.phone} ref = {ref => inputRef.current.phone = ref}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className = "btn-bottom" onClick={handleClickChange}>Submit Change</button>
                  <button className = "btn-bottom" onClick={handleClickBack}>Back to User Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      }
    </div>
  )
}
export default ChangeProfilePage;