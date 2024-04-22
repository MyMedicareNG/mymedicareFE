import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h2>welcome to our home page</h2>
      <Link to={"/sign-up"}>sign up</Link>
      <Link to={"/sign-in"}>sign in</Link>
      <Link to={"/create-password"}>create password</Link>
      <Link to={"/otp-verification"}>otp-verification</Link>
      <Link to={"/patient-dashboard"}>dashboard</Link>
    </div>
  )
}

export default Home
