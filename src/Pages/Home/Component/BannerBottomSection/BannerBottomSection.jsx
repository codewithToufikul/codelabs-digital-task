import circle from "../../../../assets/circle (1).png";
import camera from "../../../../assets/circle (2).png";
import cardImg from "../../../../assets/cdd.png";
import star from "../../../../assets/star.png";
import coin from '../../../../assets/coin.png'

const BannerBottomSection = () => {
  return (
    <div className="grid-cols-5 mt-12 gap-5 grid">
      <div className=" border-2 shadow-lg rounded-3xl p-5 space-y-3  col-span-1">
        <h1 className=" text-5xl font-semibold">90%</h1>
        <p className=" text-lg font-medium">
          Patient satisfaction rate, reflecting our commitment.
        </p>
        <div className=" w-[180px] flex justify-center">
          <img className=" w-full" src={circle} alt="" />
        </div>
      </div>
      <div className=" col-span-3 flex flex-col gap-2 justify-between">
        <div>
          <h1 className=" text-6xl text-center font-medium">
            Comprehensive Care <br /> for Every Patient
          </h1>
        </div>
        <div className=" gap-3 grid grid-cols-3">
          <div className=" shadow-lg rounded-3xl border-2 p-4">
            <h1 className=" text-5xl font-semibold mb-2">500+</h1>
            <p className=" flex-1 text-lg font-medium">
              Board-certified <br /> doctors
            </p>
            <div className=" mt-[-10px] flex justify-end">
              <img className="" src={cardImg} alt="" />
            </div>
          </div>
          <div className=" flex items-end justify-center">
          <div className=" space-y-2 h-fit shadow-lg rounded-3xl border-2 px-6 p-4">
            <div className=" flex items-center">
              <h1 className=" text-5xl font-semibold">4.8</h1>
              <img src={star} alt="" />
            </div>
            <p className=" flex-1 text-lg font-medium">Over 20,000 Patient</p>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className=" shadow-lg rounded-3xl border-2 p-4">
            <h1 className=" text-5xl font-semibold mb-2">$5000</h1>
            <p className=" flex-1 text-lg font-medium">
            Money spend <br />
            for poor patient
            </p>
            <div className=" mt-[-10px] flex justify-end ">
              <img className="w-[100px] " src={coin} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col border-2 shadow-lg rounded-3xl p-5 space-y-3  col-span-1">
        <h1 className=" text-5xl font-semibold">50+</h1>
        <p className=" flex-1 text-lg font-medium">
          Free lession video <br />
          for patient
        </p>
        <div className=" w-[180px] flex justify-center">
          <img src={camera} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerBottomSection;
