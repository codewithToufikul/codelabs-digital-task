
import getHelpImg from '../../../../assets/Rectangle 24.png'
import SectionTag from "../../../../ShareComponent/SectionTag";
import AppointmentBtn from "../../../../ShareComponent/AppointmentBtn";

const GetHelpSections = () => {
    return (
        <div className=" grid grid-cols-2 mt-[160px]">
            <div className=" space-y-6">
            <SectionTag text={'Who we are'}></SectionTag>
            <h2 className="text-5xl font-semibold">We Help To Get <br /> Solutions</h2>
            <div className=" max-w-[470px]">
            <p className=" text-lg ">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
            </p>
            </div>
            <AppointmentBtn></AppointmentBtn>
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