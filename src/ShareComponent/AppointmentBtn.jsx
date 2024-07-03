import { GoArrowUpRight } from "react-icons/go";

const AppointmentBtn = () => {
    return (
        <button className=' bg-yellow-400 p-3 px-5 font-semibold  rounded-2xl text-lg flex items-center justify-center gap-1'><p className=' font-semibold'>Appointment</p> <span className=' font-semibold'><GoArrowUpRight size={25} /></span></button>
    );
};

export default AppointmentBtn;