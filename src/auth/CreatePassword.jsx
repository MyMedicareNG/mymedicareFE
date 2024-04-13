import { useState } from "react";
import logo from "../assets/images/logo.png";
import doctor from "../assets/images/doctor-1.png";
import Slider from "../components/slider";
import { PiEyeClosedLight, PiEyeLight} from "react-icons/pi";



const CreatePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState({
        lowercase: false,
        uppercase: false,
        character: false,
        length: false,
        match: false,
    });
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [progressColor, setProgressColor] = useState('');
    const [validationStrengthText, setValidationStrengthText] = useState('');
    
    const handleChangeConfirmPassword = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setIsValid((prevState) => ({ ...prevState, match: newConfirmPassword === password }));
    };

    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        const hasUppercase = /[A-Z]/.test(newPassword);
        const hasLowercase = /[a-z]/.test(newPassword);
        const hasCharacter = /\W|_/.test(newPassword);
        const hasLength = newPassword.length >= 8;

        setIsValid({ uppercase: hasUppercase, lowercase: hasLowercase, character: hasCharacter, length: hasLength });
        calculatePasswordStrength(newPassword);
    };

    const calculatePasswordStrength = (password) => {
        const strength = (isValid.uppercase + isValid.lowercase + isValid.character + isValid.length) * 25;
        setPasswordStrength(strength);

        if (strength < 50) {
            setProgressColor('red');
            setValidationStrengthText('Weak');
        } else if (strength >= 50 && strength < 75) {
            setProgressColor('yellow');
            setValidationStrengthText('Medium');
        } else {
            setProgressColor('green');
            setValidationStrengthText('Strong');
        }
    };


  return (
    <section className="signup w-full h-screen bg-white">
    <div className="lg:mx-8 sm:px-3 sm:py-5 lg:py-0 flex flex-row justify-between h-full">
      <div className="passwordCreation custom-scrollbar-container overflow-y-auto lg:mx-16 lg:w-[40%] sm:w-full flex-col align-middle justify-center h-full">
        <div className="logo">
          <img src={logo} alt="MyMedicare" className="w-[20%]" />
        </div>
        <div className="topText py-2">
          <h2 className="text-3xl text-neutral-100 font-semibold">Welcome to MyMedicare</h2>
          <p className="text-neutral-50 first-letter:capitalize leading-relaxed tracking-wide">
            Login to your account to continue exploring our services
          </p>
        </div>

        <div className="signupForm w-full">
          <form>
            <div className="newPassword flex flex-col mb-2">
              <label className="capitalize text-neutral-100 text-xl font-semibold mb-2">new password</label>
              <div className="border-neutral-50 rounded-lg border-2 focus:border-primary-100 flex flex-row items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="*********"
                  className="outline-none border-none p-2 w-full text-lg font-medium rounded-lg "
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="cursor-pointer font-bold text-primary-100 mx-2"
                >
                  {showPassword ? <PiEyeClosedLight size={28} /> : <PiEyeLight size={28} />}
                </span>
              </div>
            </div>

            <div className="confirmPassword flex flex-col mb-2">
              <label className="capitalize text-neutral-100 text-xl font-semibold mb-2">confirm password</label>
              <div className="border-neutral-50 rounded-lg border-2 focus:border-primary-100 flex flex-row items-center">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  placeholder="*********"
                  className="outline-none border-none p-2 w-full text-lg font-medium rounded-lg "
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="cursor-pointer font-bold text-primary-100 mx-2"
                >
                  {showConfirmPassword ? <PiEyeClosedLight size={28} /> : <PiEyeLight size={28} />}
                </span>
              </div>
            </div>

            <div className="passwordStrength flex flex-row items-center space-x-5">
              <h2 className="font-medium text-lg capitalize">password strength</h2>
              <div className="progress-container w-40 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="progress-bar h-full" style={{ width: `${passwordStrength}%`, backgroundColor: progressColor }} />
              </div>
              <h2 
                className={`${validationStrengthText === 'Weak' ? 'text-neutral-50' : validationStrengthText === 'Medium' ? 'text-amber-400' : 'text-green-500'}`}>
                  {validationStrengthText}
               </h2>
            </div>

            <div className="validationChecks">
              <p className="py-2 first-letter:capitalize font-bold text-neutral-50">must contain at least</p>
              <div className="flex items-center mt-2 space-x-3">
                <input
                  type="checkbox"
                  id="uppercaseCheckbox"
                  checked={isValid.uppercase}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  disabled={!isValid.uppercase}
                />
                <span className={`mr-2 ${isValid.uppercase ? 'text-green-500' : 'text-neutral-50'}`}>
                  One Uppercase character
                </span>
              </div>
              <div className="flex items-center mt-2 space-x-3">
                <input
                  type="checkbox"
                  id="lowercaseCheckbox"
                  checked={isValid.lowercase}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  disabled={!isValid.lowercase}
                />
                <span className={`mr-2 ${isValid.lowercase ? 'text-green-500' : 'text-neutral-50'}`}>
                  One Lowercase character
                </span>
              </div>

              <div className="flex items-center mt-2 space-x-3">
                <input
                  type="checkbox"
                  id="characterCheckbox"
                  checked={isValid.character}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  disabled={!isValid.character}
                />
                <span className={`mr-2 ${isValid.character ? 'text-green-500' : 'text-neutral-50'}`}>
                  One Special character
                </span>
              </div>

              <div className="flex items-center mt-2 space-x-3">
                <input
                  type="checkbox"
                  id="lengthCheckbox"
                  checked={isValid.length}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  disabled={!isValid.length}
                />
                <span className={`mr-2 ${isValid.length ? 'text-green-500' : 'text-neutral-50'}`}>
                  Minimum 8 characters
                </span>
              </div>
            </div>

            <div className="submitPassword w-full text-center my-2">
              <button className="font-bold capitalize text-lg outline-none hover:border-2 active:border-2 bg-primary-100 rounded-lg text-white w-full hover:bg-transparent hover:text-primary-100 hover:border-primary-100 active:bg-transparent active:text-primary-100 active:border-primary-100 h-16">
                submit
              </button>
            </div>

            <div className="cancelPassword w-full text-center my-2">
              <button className="font-bold capitalize text-lg outline-none border-2 border-primary-100 active:bg-primary-100 bg-transparent hover:bg-primary-100 rounded-lg text-primary-100 hover:text-white w-full   active:bg-transparent active:text-primary-100 active:border-primary-100 h-16">
                cancel
              </button>
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

export default CreatePassword
