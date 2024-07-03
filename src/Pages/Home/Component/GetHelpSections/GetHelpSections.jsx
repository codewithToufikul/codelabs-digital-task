import { GoArrowUpRight } from "react-icons/go";
import getHelpImg from '../../../../assets/Rectangle 24.png'

const GetHelpSections = () => {
    return (
        <div className=" grid grid-cols-2 mt-[160px]">
            <div className=" space-y-6">
            <p className=' w-fit bg-transparent  p-3 px-5 border-[1px] border-black rounded-2xl text-lg flex items-center justify-center gap-1 font-semibold'>Who we are</p>
            <h2 className="text-5xl font-semibold">We Help To Get <br /> Solutions</h2>
            <div className=" max-w-[470px]">
            <p className=" text-lg ">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
            </p>
            </div>
            <button className=' bg-yellow-400 p-3 px-5 font-semibold  rounded-2xl text-lg flex items-center justify-center gap-1'><p className=' font-semibold'>Appointment</p> <span className=' font-semibold'><GoArrowUpRight size={25} /></span></button>
            </div>
            <div className=" relative">
                <img src={getHelpImg} alt="" />
                <div className=" absolute bottom-0 -left-[90px] max-w-[395px] p-7 rounded-3xl space-y-4 bg-[#343268]">
                    <h1 className=" text-3xl text-white">Our mission is simple</h1>
                    <p className=" text-slate-300">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default GetHelpSections;