// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import star2 from '../../../../assets/star2.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTag from "../../../../ShareComponent/SectionTag";

const Testimonial = () => {
  return (
    <>
      <div className="mb-8 px-2 mt-[130px] space-y-3">
        <SectionTag text={"Testimonial"} />
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold">What they say about us</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mb-10 bg-[#ffffec] rounded-3xl w-full sm:w-[371px] p-6 space-y-5">
            <h1 className="text-2xl font-semibold">Expertise and Compassion Combined</h1>
            <p className="text-sm">
              I can`t thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-14 rounded-full">
                  <span className="text-xl"><img src="https://t3.ftcdn.net/jpg/03/53/59/46/360_F_353594684_Ca3p9RIc3xgQ1Y6ff7Jk6nVe54v9NbpQ.jpg" alt="Sarah D" /></span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg"><span className="text-xl font-semibold">Sarah D,</span> IT Professional</h3>
                <div className="gap-1 flex">
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffffec] rounded-3xl w-full sm:w-[371px] p-6 space-y-5">
            <h1 className="text-2xl font-semibold">Life-Saving Care, Life-Changing Experience</h1>
            <p className="text-sm">
              My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.
            </p>
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-14 rounded-full">
                  <span className="text-xl"><img src="https://media.gettyimages.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?s=612x612&w=gi&k=20&c=1HfBFwGahEb6rPkGrSYHRD65_f4DZ16v8O7T7BJvmtE=" alt="Michael R" /></span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg"><span className="text-xl font-semibold">Michael R, </span>Business Executive</h3>
                <div className="gap-1 flex">
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffffec] rounded-3xl w-full sm:w-[371px] p-6 space-y-5">
            <h1 className="text-2xl font-semibold">A Partner in Health and Wellness</h1>
            <p className="text-sm">
              As a busy professional, I appreciate and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they`ve become my trusted partner in health and
            </p>
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-14 rounded-full">
                  <span className="text-xl"><img src="https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg" alt="David S" /></span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg"><span className="text-xl font-semibold">David S,</span> Lawyer</h3>
                <div className="gap-1 flex">
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffffec] rounded-3xl w-full sm:w-[371px] p-6 space-y-5">
            <h1 className="text-2xl font-semibold">Expertise and Compassion Combined</h1>
            <p className="text-sm">
              I can`t thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-14 rounded-full">
                  <span className="text-xl"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_6Agi5pnn0cb_gve9Cmf5wWKrkUCc_9PVJHENU7SWjQqDbEKZmpd1_JplHX0ntjE1j0&usqp=CAU" alt="Sarah D" /></span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg"><span className="text-xl font-semibold">Sarah D,</span> IT Professional</h3>
                <div className="gap-1 flex">
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
