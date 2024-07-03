import BannerBottomSection from "../Component/BannerBottomSection/BannerBottomSection";
import BannerSection from "../Component/BannerSection/BannerSection";
import GetHelpSections from "../Component/GetHelpSections/GetHelpSections";
import Navbar from "../Component/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className=" max-w-[1160px] mx-auto mt-3">
            <Navbar></Navbar>
            <BannerSection></BannerSection>
            <BannerBottomSection></BannerBottomSection>
            <GetHelpSections></GetHelpSections>
            </div>
        </div>
    );
};

export default Home;