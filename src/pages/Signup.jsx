import React, { useRef } from "react";
import axios from "axios";
import "../css/signup.css"
import { Link } from 'react-router-dom';

function Signup() {
  const firstname = useRef("");
  const username = useRef("");
  const email = useRef("");
  const address = useRef("");
  const password = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const Data = {
        firstname: firstname.current.value,
        username: username.current.value,
        password: password.current.value,
        email: email.current.value,
        address: address.current.value,
      };
     
      const response = await axios.post("http://localhost:5000/user/signup", Data);
      console.log(response.data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <input type="text" name="firstname" ref={firstname} placeholder="First Name" />
        <input type="text" name="username" ref={username} placeholder="Username" />
        <input type="password" name="password" ref={password} placeholder="Password" />
        <input type="text" name="email" ref={email} placeholder="Email" />
        <input type="text" name="address" ref={address} placeholder="Address" />
        <button type="submit" className="signup-button">Create Account</button>
        <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </form>
     
    </div>
  );
}

export default Signup;



// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
//   Button,
// } from "@material-tailwind/react";
 
// export default function Signup() {
//   return (

//     <Card className="w-96 mt-20 mx-auto">
//       <CardHeader
//         variant="gradient"
//         color="gray"
//         className="mb-4 grid h-28 place-items-center"
//       >
//         <Typography variant="h3" color="white">
//           Sign In
//         </Typography>
//       </CardHeader>
//       <CardBody className="flex flex-col gap-4">
//         <Input label="Email" size="lg" />
//         <Input label="Password" size="lg" />
//         <div className="-ml-2.5">
//           <Checkbox label="Remember Me" />
//         </div>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button variant="gradient" fullWidth>
//           Sign In
//         </Button>
//         <Typography variant="small" className="mt-6 flex justify-center">
//           Don&apos;t have an account?
//           <Typography
//             as="a"
//             href="#signup"
//             variant="small"
//             color="blue-gray"
//             className="ml-1 font-bold"
//           >
//             Sign up
//           </Typography>
//         </Typography>
//       </CardFooter>
//     </Card>
//   );
// }
