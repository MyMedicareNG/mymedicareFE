import logo from "../assets/images/logo.png";

const Sidebar = () => {
  return (
    <div className='w-full flex flex-row items-center'>
      <nav className='w-[30%]'>
        <section className="desktopView hidden lg:flex border-r-2 border-neutral-50 bg-white">
          <div className="menuItem my-5">
            <div className="logo flex flex-row items-center space-x-2 mb-8">
              <img src={logo} alt="MyMedicare" className="w-[20%]"/>
              <h2 className="text-primary-100 text-lg font-bold">MyMedicare</h2>
            </div>
          </div>
        </section>
        <section className="mobileView">
          
        </section>
      </nav>
      <div className="children">

      </div>
    </div>
  )
}

export default Sidebar
