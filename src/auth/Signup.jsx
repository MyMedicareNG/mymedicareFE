 //Title: Sign up form 
  //Author: Damilare Ajayi


import { useState } from "react";
import logo from "../assets/images/logo.png";
import google from "../assets/icons/google.jpg";
import doctor from "../assets/images/doctor-1.png";
import Slider from "../components/slider";
import { Link} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PiEyeClosedLight, PiEyeLight} from "react-icons/pi";
import { axiosClient } from "../axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [post, setPost] = useState([]);

  
  //Formik for form management and Yup for validation

   //Password function for character validation
   const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },

    onSubmit: async (values) =>{
      try {
        const response = await axiosClient.post("");
        setPost(response.data);
      } catch (error) {
        console.log("Error posting data", error);
      }
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
      .required("Required")
      .max(20, "Must be 20 characters or less."),
      lastName: Yup.string()
      .required("Required")
      .max(20, "Must be 20 characters or less."),
      email: Yup.string()
      .email("Invalid email address")
      .required("Required!"),
      password: Yup.string()
      .required("Required!")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
      .matches(/[^\w]/, getCharacterValidationError("symbol"))
    })
  })
  return (
    <section className='signup w-full h-screen bg-white'>
      <div className='lg:mx-8 sm:px-3 sm:py-5 flex flex-row justify-between '>
        <div className='registration lg:w-[40%] sm:w-full lg:mx-16 lg:mt-3 flex-col align-middle justify-center h-full '>
            <div className='logo'>
                <img 
                    src={logo} 
                    alt="MyMedicare"
                    className="w-[20%]" 
                />
            </div>
            <div className="topText py-2">
                <h2 className="text-3xl text-neutral-100 font-semibold capitalize">create account</h2>
                <p className="text-neutral-50 first-letter:capitalize leading-relaxed tracking-wide">join us to explore our services</p>
            </div>
            <div className="googleSignup sm:w-full rounded-lg border-4 border-neutral-50 cursor-pointer">
              <div className="flex flex-row items-center justify-center space-x-1 py-4 ">
                <img src={google} alt="MyMedicare" />
                <p className="first-letter:capitalize last-letter:capitalize text-neutral-50">continue with google</p>
              </div>
            </div>
            <p className="flex flex-col items-center justify-center py-2 text-neutral-50 my-1">or</p>
            <div className="signupForm w-full"> 
          <form>
            <div className="name w-full flex flex-row items-center space-x-3 mb-1">
              <div className="firstName flex flex-col mb-1 sm:w-[50%]">
                <label className="capitalize text-neutral-100 text-xl font-semibold mb-1">first name</label>
                <input 
                  id = "firstName"
                  value = {formik.values.firstName}
                  onChange = {formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="John"
                  className="outline-none border-4 border-neutral-50 px-2 py-3 w-full text-lg font-medium rounded-lg focus:border-primary-100"
                />
                {
                  formik.touched.firstName && formik.errors.firstName ? <p className="text-red-500 text-sm font-bold">{formik.errors.firstName}</p>: null
                }
              </div>
              <div className="lastName flex flex-col mb-1 sm:w-[50%]">
                <label className="capitalize text-neutral-100 text-xl font-semibold mb-1">last name</label>
                <input 
                  id = "lastName"
                  value = {formik.values.lastName}
                  onChange = {formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder="Doe"
                  className="outline-none border-4 border-neutral-50 px-2 py-3 w-full text-lg font-medium rounded-lg focus:border-primary-100"
                />
                {
                  formik.touched.lastName && formik.errors.lastName ? <p className="text-red-500 text-sm font-bold">{formik.errors.lastName}</p>: null
                }
              </div>
            </div>
    
              <div className="email flex flex-col mb-1">
                  <label className="capitalize text-neutral-100 text-xl font-semibold mb-1">email</label>
                  <input 
                    id = "email"
                    value = {formik.values.email}
                    onChange = {formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    placeholder="Jessie@email.com"
                    className="outline-none border-4 border-neutral-50 px-2 py-3 w-full text-lg font-medium rounded-lg focus:border-primary-100"
                  />
                  {
                  formik.touched.email && formik.errors.email ? <p className="text-red-500 text-sm font-bold">{formik.errors.email}</p>: null
                  }
                </div>
        
            {/* <div className="contact flex flex-row items-center space-x-4 mb-3">
              <div className="countryCode w-[30%] flex flex-col">
              <label className="capitalize text-neutral-100 text-xl font-semibold">country code</label>
                <select className="outline-none border-4 border-neutral-50 px-2 py-4 w-full text-lg font-medium rounded-lg focus:border-primary-100">
                  <option value="" ></option>
                </select>
              </div>
              <div className="phoneNumber">
                <label className="capitalize text-neutral-100 text-xl font-semibold mb-1">phone number</label>
                <input 
                  type="text" 
                  placeholder="0000 000 0000"
                  className="outline-none border-4 border-neutral-50 px-2 py-3 w-full text-lg font-medium rounded-lg focus:border-primary-100"
                />
              </div>
            </div> */}

            <div className="password flex flex-col mb-1">
              <label className="capitalize text-neutral-100 text-xl font-semibold mb-1">password</label>
              <div className="border-neutral-50 rounded-lg border-4 focus:border-primary-100 flex flex-row items-center">
                <input 
                  id = "password"
                  value = {formik.values.password}
                  onChange = {formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={showPassword ? "password": "text"}
                  placeholder="*********"
                  className="outline-none border-none px-2 py-3 w-full text-lg font-medium rounded-lg "
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="cursor-pointer font-bold text-primary-100 mx-2"
                >
                  {
                    showPassword && showPassword ?
                    (<PiEyeClosedLight size={28}/>):(<PiEyeLight size={28}/>)
                  }
                </span>
              </div>
              {
              formik.touched.password && formik.errors.password ? <p className="text-red-500 text-sm font-bold">{formik.errors.password}</p>: null
              }
            </div>

            <div className="terms flex flex-row space-x-3 mb-2">
              <input type="checkbox" className="w-5"/>
              <p className="first-letter:capitalize text-md text-neutral-50">i agree to the <span>
                <Link className="text-primary-100" to={"/terms-&-conditions"}>terms & conditions</Link>
                </span></p>
            </div>
            <div className="createAccount w-full text-center">
              <button className="font-bold capitalize text-lg outline-none hover:border-4 active:border-4 bg-primary-100 rounded-lg text-white w-full py-4 hover:bg-transparent hover:text-primary-100 hover:border-primary-100  active:bg-transparent active:text-primary-100 active:border-primary-100 ">
                create account
              </button>
            </div>

            <div className="signIn mt-2 text-center">
              <p className="text-md first-letter:capitalize text-neutral-50">already have an account? <Link className="text-primary-100 first-letter:capitalize" to={"/sign-in"}>sign in</Link></p>
            </div>
          </form>
        </div>
        </div>
        <div className="signupImage bg-primary-100 rounded-3xl lg:w-[55%] sm:w-0 h-screen lg:flex hidden">
          <div className="px-5 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center space-x-3 mt-8">
              <img src={logo} alt="MyMedicare" className="w-[30%]"/>
              <h2 className="text-white text-3xl font-medium">MyMedicare</h2>
            </div>
            <img src={doctor} alt="MyMedicare"/>
            <div className="xl:mx-20 sm:mx-0">
              <Slider autoSlide={true} autoSlideInterval={1000}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
