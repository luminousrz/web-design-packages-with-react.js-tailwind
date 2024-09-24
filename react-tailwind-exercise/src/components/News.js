import MainBanner from "../stuff/mainBanner.js"
import news from "../assets/news.png"; 

function News(){
    return (
      <div className="md:px-12 px-8 max-w-screen-2xl mx-auto mt-28 font-sniglet mb-28">
        <MainBanner
          heading="Good News!! Special offer for You"
          mainTextOfBanner="by buying our Web Designing package you can have the UI/UX package with the best price in offer. so don't lose it if you like Graphic Design as well. ^-^" firstBtn="Know About Other News" secBtn={`className=hidden`} imageOfBanner={news}
        />
      </div>
    );
}

export default News;