import AppointmentBtn from "../../../../ShareComponent/AppointmentBtn";
import SectionTag from "../../../../ShareComponent/SectionTag";
import image1 from "../../../../assets/Rectangle 27-2.png";
import image2 from "../../../../assets/Rectangle 27-1.png";
import image3 from "../../../../assets/Rectangle 27.png";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div className=" max-w-[1160px] grid grid-cols-1 py-5 px-2 md:grid-cols-2 gap-10 bg-[#ffffec] lg:p-10 lg:px-14 rounded-2xl mx-auto mt-[130px]">
      <div className=" space-y-6">
        <SectionTag text={"Service"} />
        <h2 className=" md:text-4xl text-3xl lg:text-5xl font-semibold">
          Empowering Health, <br /> Enriching Lives
        </h2>
        <div className=" max-w-[470px]">
          <p className=" text-lg ">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
        </div>
        <AppointmentBtn></AppointmentBtn>
      </div>
      <div className=" rounded-3xl relative">
        <img className=" rounded-3xl" src={image1} alt="" />
        <div className="p-4 absolute bottom-5 left-3 lg:left-5 right-2 bg-opacity-70 md:w-[341px] rounded-3xl space-y-3 bg-[#343268]">
          <div className=" flex justify-between items-end">
            <div>
              <h1 className=" text-2xl text-white">Advanced Technology</h1>
              <p className="  text-slate-300">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <button className=" bg-yellow-400 text-white p-2 rounded-full">
              <GoArrowUpRight size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className=" rounded-3xl relative">
        <img className=" rounded-3xl" src={image2} alt="" />
        <div className="p-4 absolute bottom-5 left-3 lg:left-5 right-2 bg-opacity-70 md:w-[341px] rounded-3xl space-y-3 bg-[#343268]">
          <div className=" flex justify-between items-end">
            <div>
              <h1 className=" text-2xl text-white">Online Doctor Meet</h1>
              <p className="  text-slate-300">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <button className=" bg-yellow-400 text-white p-2 rounded-full">
              <GoArrowUpRight size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className=" rounded-3xl relative">
        <img className=" rounded-3xl" src={image3} alt="" />
        <div className="p-4 absolute bottom-5 left-3 lg:left-5 right-2 bg-opacity-70 md:w-[341px] rounded-3xl space-y-3 bg-[#343268]">
          <div className=" flex justify-between items-end">
            <div>
              <h1 className=" text-2xl text-white">Consultancy your health</h1>
              <p className="  text-slate-300">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <button className=" bg-yellow-400 text-white p-2 rounded-full">
              <GoArrowUpRight size={25} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
