import BannerBottomSection from "../Component/BannerBottomSection/BannerBottomSection";
import BannerSection from "../Component/BannerSection/BannerSection";
import FaqSection from "../Component/FaqSection/FaqSection";
import GetHelpSections from "../Component/GetHelpSections/GetHelpSections";
import Navbar from "../Component/Navbar/Navbar";
import Services from "../Component/Services/Services";
import Testimonial from "../Component/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <div className=" max-w-[1160px] mx-auto mt-3">
            <Navbar></Navbar>
            <BannerSection></BannerSection>
            <BannerBottomSection></BannerBottomSection>
            <GetHelpSections></GetHelpSections>
            <Services></Services>
            <Testimonial></Testimonial>
            <FaqSection></FaqSection>
            </div>
        </div>
    );
};

export default Home;