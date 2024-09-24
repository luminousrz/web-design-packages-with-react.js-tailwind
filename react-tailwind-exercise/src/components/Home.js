import creative from "../assets/creative.png"
import MainBanner from "../stuff/mainBanner";

export default function Home(){
    return (
      <div className="md:px-12 px-8 max-w-screen-2xl mx-auto mt-28 font-sniglet" id="home">
        <MainBanner
          heading="by having this course you can develop and customize your own website :)"
          mainTextOfBanner="Everything You Need to Get Started About Web Designing is Here So Don't Waste Your Time !!
          We're Waiting For You .."
          firstBtn="Get Started"  imageOfBanner={creative}
        />
      </div>
    );
}