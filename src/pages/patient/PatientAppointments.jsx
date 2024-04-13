import { useState } from "react";
import { appointments } from "../../components/dummy";


const PatientAppointments = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = appointments.slice(firstIndex, lastIndex);
  const npage = Math.ceil(appointments.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)

  // handle previous page of the table
  const prePage = () => {
    if(currentPage !== 1) {
    setCurrentPage(currentPage - 1)
    }
  };


  //handles current page 
  const changeCPage = (id) => {
    setCurrentPage(id)
  };


  //handles next page
  const nextPage = () => {
  if (currentPage !== npage) {
    setCurrentPage(currentPage + 1)
  }
  };

  return (
    <section className='appointment w-full h-screen lg:p-5 sm:p-0'>
      <main className='lg:p-10 sm:p-2 bg-white rounded-lg w-full h-fit'>
        <div className="flex lg:flex-row sm:flex-col gap-y-5 items-center justify-between lg:mt-0 sm:mt-10 w-full">
          <h2 className="first-letter:capitalize text-2xl font-semibold">your appointments</h2>
          <button className="text-white bg-primary-100 rounded-lg lg:w-40 sm:w-full h-14 first-letter:capitalize font-bold">book appointment</button>
        </div>
        <div className="search lg:w-60 sm:w-full mb-10 lg:mt-0 sm:mt-8">
          <input 
            type="text" 
            className="w-full border-2 text-lg font-semibold border-neutral-50 p-2 focus:border-primary-100 rounded-lg outline-none"
            placeholder="Search by status"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="table w-full h-96 sm:overflow-x-scroll">
          {
            records.filter((item) =>{
              return search.toLocaleLowerCase === ""
              ? item
              : item.status.toLocaleLowerCase().
              includes(search)
            }).map((item, id) =>(
              <table key={id} className="w-full h-fit">
                <tbody className="w-full">
                  <tr className="border-2 border-x-0 border-t-0  border-b border-neutral-50 hover:bg-primary-100/10 cursor-pointer">
                    <td className="flex items-center space-x-2 py-5"><span><img src={item.img} alt="MyMedicare" className="h-10 w-10 rounded-full" /></span><span className="text-lg font-medium capitalize">{item.doctor}</span></td>
                    <td className="text-lg font-medium capitalize py-5 ">{item.speciality}</td>
                    <td className="text-lg font-medium capitalize py-5 ">{item.date}</td>
                    <td className="text-lg font-medium capitalize py-5 ">{item.time}</td>
                  <td className={`text-lg font-medium capitalize py-5  ${item.status === "done" ? "text-green-500" : "text-amber-500"}`}>{item.status}</td>
                  </tr>
                </tbody>
              </table>
            ))
          }
          <div className="w-48 mt-10 flex float-right">
            <nav className="pagination border-2 w-full border-neutral-50 rounded-lg px-1">
              <ul className="paginatioItem flex flex-row items-center space-x-3 w-full py-1 duration-300 cursor-pointer font-bold">
              <li className="hover:bg-primary-100 hover:text-white rounded-md px-3 py-1 duration-300 capitalize font-medium">
                  <a href="#"
                  onClick={prePage}
                  >prev</a>
              </li>
              
              <li className="hover:bg-primary-100 hover:text-white rounded-md px-3 py-1 duration-300 capitalize font-medium">
                  <a href="#"
                  onClick={nextPage}
                  >next page</a>
              </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </section>
  )
}

export default PatientAppointments
