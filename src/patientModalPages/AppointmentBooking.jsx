import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCalendarMonth} from "react-icons/md";

const AppointmentBooking = ({handleCancel, handleClose}) => {
    const [post, setPost] = useState([]);
    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            appointmentType: ""
        },


        onSubmit: async (values) =>{
            try {
                const response = await axiosClient.post("", values);
                setPost(response.data);
            } catch (error) {
                console.log("Error posting data", error);
            }
        },   
        
        
        validationSchema: Yup.object({
            date: Yup.string()
            .required("Required"),
            time: Yup.string()
            .required("Required"),
            appointmentType: Yup.string()
            .required("Required"),
        })
    })
  return (
    <div className="lg:w-[50%] sm:w-full bg-white rounded-lg">
        <div className="w-full shadow-xl p-5">
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-5">
                    <MdOutlineCalendarMonth size={30}/>
                    <h1 className="font-bold capitalize text-3xl ">Book a slot</h1>
                </div>
                <IoMdClose size={25} onClick={handleClose} className="cursor-pointer text-red-500 font-bold"/>
            </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="p-5">
            <div className="flex flex-row w-full items-center space-x-4 my-4">
                <div className="appointmentDate w-[50%]">
                    <div className="w-full items-center justify-between flex flex-row">
                        <label className="capitalize font-bold text-lg">date</label>
                        {
                            formik.touched.date && formik.errors.date ? <p className="text-red-500 text-sm font-bold">{formik.errors.date}</p>: null
                        }
                    </div>
                    <div className="mt-3">
                        <input 
                            type="date"
                            className="outline-none border-2 border-neutral-50 focus:border-primary-100 px-3 py-2 w-full rounded-md"
                            id = "date"
                            value = {formik.values.date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    
                </div>
                
                <div className="appointmentTime w-[50%]">
                    <div className="flex flex-row items-center justify-between w-full">
                        <label className="capitalize font-bold text-lg">time</label>
                        {
                            formik.touched.time && formik.errors.time ? <p className="text-red-500 text-sm font-bold">{formik.errors.time}</p>: null
                        }
                    </div>
                    <div className="mt-3">
                        <input 
                            type="time"
                            className="outline-none border-2 border-neutral-50 focus:border-primary-100 px-3 py-2 w-full rounded-md"
                            id = "time"
                            value = {formik.values.time}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                </div>
            
            </div>
            <div className="appointmentType mb-4">
                <div className="flex flex-row items-center justify-between w-full">
                    <label className="capitalize font-bold text-lg">Appointment type</label>
                    {
                        formik.touched.appointmentType && formik.errors.appointmentType ? <p className="text-red-500 text-sm font-bold">{formik.errors.appointmentType}</p>: null
                    }
                </div>
                <div className="mt-3">
                    <select 
                        placeholder="Please select appointment type"
                        className="outline-none border-2 border-neutral-50 focus:border-primary-100 px-3 py-2 w-full rounded-md"
                        id = "appointmentType"
                        value = {formik.values.appointmentType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option></option>
                    </select>
                </div>
            </div>
            
            <div className="flex flex-row items-center space-x-3 w-full">
                <div 
                    onClick={handleCancel}
                    className="cancelAppointment w-full text-center my-2">
                <button className="font-bold capitalize text-lg outline-none border-2 border-primary-100 active:bg-primary-100 bg-transparent hover:bg-primary-100 rounded-lg text-primary-100 hover:text-white w-full   active:bg-transparent active:text-primary-100 active:border-primary-100 h-16">
                    cancel
                </button>
                </div>
                <div className="bookAppointment w-full text-center my-2">
                <button className="font-bold capitalize text-lg outline-none hover:border-2 active:border-2 bg-primary-100 rounded-lg text-white w-full hover:bg-transparent hover:text-primary-100 hover:border-primary-100 active:bg-transparent active:text-primary-100 active:border-primary-100 h-16">
                    book appointment
                </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AppointmentBooking
