// import React, { Component } from "react";
// import axios from 'axios';
// import './App.css';


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName:'',
//         lastName:'',
//         email:'',
//         password:'',
//         confirmpassword:'',
//         nic:'',
//         address:'',
//         contactNumbers:'',
//         childName:'',
//         childSchool:'',
      
        
//     }

//     this.changefirstName=this.changefirstName.bind(this)
//     this.changelastName=this.changelastName.bind(this)
//     this.changeemail=this.changeemail.bind(this)
//     this.changepassword=this.changepassword.bind(this)
//     this.changeconfirmpassword=this.changeconfirmpassword.bind(this)
//     this.changenic=this.changenic.bind(this)
//     this.changeaddress=this.changeaddress.bind(this)
//     this.changecontactNumbers=this.changecontactNumbers.bind(this)
//     this.changechildName=this.changechildName.bind(this)
//     this.changechildSchool=this.changechildSchool.bind(this)
//     this.onSubmit=this.onSubmit.bind(this)

//   }

//   changefirstName(event) {
//     this.setState({
//       firstName:event.target.value
//     })
//   }

//   changelastName(event) {
//     this.setState({
//       lastName:event.target.value
//     })
//   }

//   changeemail(event) {
//     this.setState({
//       email:event.target.value
//     })
//   }

//   changepassword(event) {
//     this.setState({
//       password:event.target.value
//     })
//   }
//   changeconfirmpassword(event) {
//     this.setState({
//       confirmpassword:event.target.value
//     })
//   }
//   changenic(event) {
//     this.setState({
//      nic:event.target.value
      
//     })
//   }
//   changeaddress(event) {
//     this.setState({
//       address:event.target.value
//     })
//   }
//   changecontactNumbers(event) {
//     this.setState({
//       contactNumbers:event.target.value
//     })
//   }
 
//   changechildName(event) {
//     this.setState({
//       childName:event.target.value
//     })
//   }
//   changechildSchool(event) {
//     this.setState({
//       childSchool:event.target.value
//     })
//   }
  
//   onSubmit(event) {
//     event.preventDefault()

//     const registered = {
//       firstName:this.state.firstName,
//       lastName:this.state.lastName,
//       email:this.state.email,
//       password:this.state.password,
//       confirmpassword:this.state.confirmpassword,
//       nic:this.state.nic,
//       address:this.state.address,
//       contactNumbers:this.state.contactNumbers,
//       childName:this.state.childName,
//       childSchool:this.state.childSchool,
   

//     }

//     axios.post('http://localhost:3000/parent/signup', registered)
//       .then(response => console.log(response.data))

//     this.setState({
//       firstName:'',
//       lastName:'',
//       email:'',
//       password:'',
//       confirmpassword:'',
//       nic:'',
//       address:'',
//       contactNumbers:'',
//       childName:'',
//       childSchool:'',
     
      
//     })
//   }

//   render() {
//     return (
      


//         <div className="container">
//           <div className="right"> <img src='https://klfdradio.com/media/2021/09/pexels-photo-4543110.jpeg'></img></div>

//           <div className="left">
//             <h2 className="signup">School Student Sign Up</h2>
//             <form className="fm" onSubmit={this.onSubmit}>
//               <input type="text"
//                 placeholder="Guardian First Name"
//                 onChange={this.changefirstName}
//                 value={this.state.firstName}
//                 className="form-control"
//                 rule="you must enter the Name"
//               />
//               <br />
//               <input type="text"
//                 placeholder="Guardian Last Name"
//                 onChange={this.changelastName}
//                 value={this.state.lastName}
//                 className="form-control"
//               />
//               <br />
//               <input type="email"
//                 placeholder="E-mail"
//                 onChange={this.changeemail}
//                 value={this.state.email}
//                 className="form-control"


//               />
//               <br />
//               <input type="password"
//                 placeholder="Password"
//                 onChange={this.changepassword}
//                 value={this.state.password}
//                 className="form-control"
//               />
//               <br />
//               <input type="password"
//                 placeholder="Confirm Password"
//                 onChange={this.changeconfirmpassword}
//                 value={this.state.confirmpassword}
//                 className="form-control"
//               />
//               <br />
//               <input type="text"
//                 placeholder="NIC Number"
//                 onChange={this.changenic}
//                 value={this.state.nic}
//                 className="form-control"
//               />
//               <br />
//               <input type="text"
//                 placeholder="Address"
//                 onChange={this.changeaddress}
//                 value={this.state.address}
//                 className="form-control"
//               />
//               <br />
//               <input type="text"
//                 placeholder="Mobile Number"
//                 onChange={this.changecontactNumbers}
//                 value={this.state.contactNumbers}  
//                 className="form-control"
//               />
            
//               <h3 className="signup">Children Details</h3>
             
//               <input type="text"
//                 placeholder="Child Name"
//                 onChange={this.changechildName}
//                 value={this.state.childName}
//                 className="form-control"
//               />
//               <br />
//               <input type="text"
//                 placeholder="Student School"
//                 onChange={this.changechildSchool}
//                 value={this.state.childSchool}
//                 className="form-control"
//               />
//               <br />
//               <p className="para">If you have two or more children please use separate registrations. </p>

//               <br />
//               <input type='submit' className="btn" value='Register' />
//             </form>
//           </div>
//         </div>
    
//     );
//   }
// }

// export default App;


import axios from "axios";
import React from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./Styles/ParentSignUp.css";

export default function ParentSignUp() {
  //const history = useNavigate();
  const [inputs, setInputs] = useState({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            //confirmpassword:'',
            nic:'',
            address:'',
            contactNumbers:'',
            childName:'',
            childSchool:'',
            tag:"Parent"
  });

  const [errorInput1, SetErrorInput] = useState("");

  const handleChange = (e) => {
    console.log(inputs);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //SUCCESSFULL VALIDATION
  const [message, setMessage] = useState("");

  const handlValidation = () => {
    setMessage("REGISTRATION SUCCESSFULL");
  };

  const [ErrMessage, setErrMessage] = useState("");

  const sendRequest = async () => {
     //leets validatoin
     const re = /^[A-Za-z]+$/;
     //const number = /^[0-9]+$/;
     //email validation
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     if (!inputs.firstName) 
     {
      alert("Parent Name is required");
     } 
     else if (!re.test(inputs.lastName)) 
     {
      alert("Enter only letters");
     }
     else if (!inputs.email) 
     {
      alert("Ëmail is required");
     } 
     else if (!inputs.password) 
     {
      alert("Password is required");
     }
     else if (inputs.password.length < 4 || inputs.password.length>10) 
     {
         alert("Password should be more than 4 characters");
     }
     else if (!inputs.nic) 
     {
      alert("NIC is required");
     }
     else if (!inputs.address) 
     {
      alert("Address is required");
     }
     else if (!inputs.contactNumbers) {
      alert("Phone  number is required");
    } 
    else if (inputs.contactNumbers.length < 10) 
    {
      alert("Phone  number should have 10 characters ");
    }
     else if (!inputs.childName) 
     {
      alert("child Name is required");
     } 
     else if (!inputs.childSchool) 
     {
      alert("child School is required");
     }
    // else if (inputs.password.match(inputs.ConformPassword))
        // {
        //     alert("Password is not matching");
        // }
   
    else 
    {
      await axios
      .post('http://localhost:3000/parent/signupDetails', {
        firstName:String(inputs.firstName),
        lastName:String(inputs.lastName),
        email:String(inputs.email),
        password:String(inputs.password),
        //confirmpassword:String(inputs.confirmpassword),
        nic:String(inputs.nic),
        address:String(inputs.address),
        contactNumbers:String(inputs.contactNumbers),
        childName:String(inputs.childName),
        childSchool:String(inputs.childSchool),
        tag:String(inputs.tag)
        
      })
      .then(res=>{
        console.log(res.data)
          // setErrMessage(res.data)
    
      })

    //CAllING VALIDITY FUNCTIONS
   handlValidation();
   // window.location.reload(2000);
};
     }
     

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
    sendRequest()
    // .then(() => history("/login"));
};

  

  return (
    <div>
      <div className="validity"> {message}</div>
      <div className="Errvalidity"> {ErrMessage}</div>

      <div>
        {/* <section> */}
          <div className="container">
          <div className="imgx">
            <img src="https://klfdradio.com/media/2021/09/pexels-photo-4543110.jpeg'" />
          </div>
            <div className="left">
              <form className="signup" onSubmit={handleSubmit}>
                <h2>School Student Sign up</h2>
              

                <div className="SignupInputBox">
             
                <input type="text"
                 placeholder="Guardian First Name"
                    className="own"
                    value={inputs.firstName}
                    onChange={handleChange}
                    // required
                    name="firstName"
                  />
                </div>

                <div className="SignupInputBox">
                <input type="text"
    placeholder="Guardian Last Name"
                    className="own"
                    value={inputs.lastName}
                    onChange={handleChange}
                    // required
                    name="lastName"
                  />
                </div>

                <div className="SignupInputBox">
                <input type="email"
                 placeholder="E-mail"
                    className="own"
                    value={inputs.email}
                    onChange={handleChange}
                    name="email"
                  />
                  
                </div>

                <div className="SignupInputBox">
                <input type="password"
                 placeholder="Password"
                    className="own"
                    value={inputs.password}
                    onChange={handleChange}
                    // required
                    name="password"
                  />
                </div>

                {/* <div className="SignupInputBox">
                <input type="password"
                placeholder="Confirm Password"
                    className="own"
                    value={inputs.confirmpassword}
                    onChange={handleChange}
                    name="confirmpassword"
                    /required
                    
                  />
                </div> */}

                <div className="SignupInputBox">
                <input type="text"
                 placeholder="NIC Number"
                    className="own"
                    value={inputs.nic}
                    onChange={handleChange}
                    // required
                    name="nic"
                  />
                </div>

                <div className="SignupInputBox">
                <input type="text"
                 placeholder="Address"
                    className="own"
                    value={inputs.address}
                    onChange={handleChange}
                    // required
                    name="address"
                  />
                </div>

                <div className="SignupInputBox">
                <input type="text"
                placeholder="Mobile Number"
                    className="own"
                    value={inputs.contactNumbers}
                    onChange={handleChange}
                    // required
                    name="contactNumbers"
                  />
                   <h3 className="signup">Children Details</h3>
                </div>

                <div className="SignupInputBox">
                <input type="text"
                 placeholder="Child Name"
                    className="own"
                    value={inputs.childName}
                    onChange={handleChange}
                    // required
                    name="childName"
                  />
                </div>

                <div className="SignupInputBox">
                <input type="text"
                placeholder="Student School"
                    className="own"
                    value={inputs.childSchool}
                    onChange={handleChange}
                    // required
                    name="childSchool"
                  />
                  {/* <div className="SignupInputBox">
                  <input
                    type="password"
                    placeholder="Conform password"
                    className="own"
                    value={inputs.ConformPassword}
                    onChange={handleChange}
                    required
                  />
                </div> */}
                </div>
                <p className="para">If you have two or more children please use separate registrations. </p>
                <input
                  type="submit"
                  className="SignupButton"
                  value="SIGN UP ME"
                />
              </form>
            </div>
          </div>

         
        {/* </section> */}
      </div>
    </div>
  );
}