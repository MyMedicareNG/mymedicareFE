
import logo from "../assets/images/logo.png";
import google from "../assets/icons/google.jpg";
import doctor from "../assets/images/doctor-1.png";
import Slider from "../components/slider";
import { Link} from "react-router-dom";


const OtpVerification = () => {
  
  return (
    <section className='signup w-full h-screen bg-white'>
      <div className='lg:mx-8 sm:px-3 overflow-hidden flex flex-row justify-between '>
        <div className='registration lg:w-[40%] lg:mx-16  sm:mx-0 sm:w-full flex-col align-middle justify-center h-full'>
            <div className='logo mt-12'>
                <img 
                    src={logo} 
                    alt="MyMedicare"
                    className="w-[15%]" 
                />
            </div>
            <div className="topText mt-20">
                <h2 className="text-3xl text-neutral-100 font-semibold mb-2">OTP Verification</h2>
                <p className="text-neutral-50 first-letter:capitalize leading-relaxed tracking-wide">to ensure your security, please enter the <span className="capitalize">one time password</span>(OTP) sent to your registered email.</p>
            </div>
          
            <div className="otpCode flex flex-row gap-x-4 items-center w-full mt-10 mb-5">
                <div>
                    <input type="text" className="border-none outline-none bg-neutral-50/50 lg:w-[50%] sm:w-full rounded-md lg:py-5 sm:py-5 text-center text-2xl font-bold"/>
                </div>
                <div>
                    <input type="text" className="border-none outline-none bg-neutral-50/50 lg:w-[50%] sm:w-full rounded-md lg:py-5 sm:py-5 text-center text-2xl font-bold"/>
                </div>
                <div>
                    <input type="text" className="border-none outline-none bg-neutral-50/50 lg:w-[50%] sm:w-full rounded-md lg:py-5 sm:py-5 text-center text-2xl font-bold"/>
                </div>
                <div>
                    <input type="text" className="border-none outline-none bg-neutral-50/50 lg:w-[50%] sm:w-full rounded-md lg:py-5 sm:py-5 text-center text-2xl font-bold"/>
                </div>
            </div>
            
            <p className="first-letter:capitalize text-neutral-50 text-center mb-12">didn't receive the OTP? <span className="capitalize font-bold text-primary-100">resend</span></p>

            <div className="submit w-full text-center mb-5">
              <button className="font-bold capitalize text-lg outline-none hover:border-4 active:border-4 bg-primary-100 rounded-lg text-white w-full py-4 hover:bg-transparent hover:text-primary-100 hover:border-primary-100  active:bg-transparent active:text-primary-100 active:border-primary-100 ">
                submit
              </button>
            </div>

            <div className="cancel w-full text-center my-2">
              <button className="font-bold capitalize text-lg outline-none border-4 active:border-4 hover:bg-primary-100 rounded-lg hover:text-white w-full py-4 bg-transparent text-primary-100 border-primary-100  active:bg-primary-100 active:text-white  ">
                cancle
              </button>
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

export default OtpVerification
