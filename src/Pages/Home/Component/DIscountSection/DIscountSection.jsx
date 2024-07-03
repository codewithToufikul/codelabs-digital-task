import { GoArrowUpRight } from "react-icons/go";
import AppointmentBtn from "../../../../ShareComponent/AppointmentBtn";
import logo from '../../../../assets/logo light.png';

import './style.css'

const DiscountSection = () => {
  return (
    <div className="relative mt-[130px] p-16 rounded-3xl bg-cover bg-center bg-image">
      <div className="flex justify-end">
        <img src={logo} alt="Logo" />
      </div>
      <div className="max-w-[500px] space-y-7">
        <h1 className="text-5xl z-20 text-white font-semibold leading-[70px]">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h1>
        <div className="flex gap-7">
          <AppointmentBtn />
          <button className="bg-transparent hover:bg-yellow-400 hover:border-none p-3 px-5 font-semibold border-[1px] border-white rounded-2xl text-lg flex items-center justify-center gap-1">
            <p className="font-semibold text-white">Learn More</p>
            <span className="font-semibold text-white">
              <GoArrowUpRight size={25} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
