import Marquee from "react-fast-marquee";
import { homeSlider1, homeSlider2, homeSlider3 } from "../assets";
import Carousel from "../components/ui/Carousel";

const Welcome = () => {
  return (
    <>
      <div className="bg-slate-300 h-14 relative mt-3 flex items-center overflow-hidden">
        <h4 className="bg-primary-color max-w-max absolute left-0 top-0 h-full flex items-center pl-2 pr-6 text-white font-medium">
          স্বাগতম
        </h4>
        {/* text slider */}
        <div className="ml-[90px]">
          <Marquee autoFill={true} pauseOnHover={true}>
            <p className="text-sm text-black mr-5">
              আপনার ইউনিয়ন কর নিয়মিত পরিশোধ করুন।
            </p>
            <p className="text-sm text-black mr-5">মাদক মুক্ত সমাজ গঠন করুন।</p>
            <p className="text-sm text-black mr-5">
              যে কোন স্থাপনা নির্মাণের জন্য ইউনিয়নের অনুমোদন গ্রহন করুন এবং
              পরিকল্পিত নগরায়ণে সহায়তা করুন।
            </p>
            <p className="text-sm text-black mr-5">
              আবর্জনা সঠিক স্থানে ফেলুন।
            </p>
            <p className="text-sm text-black mr-5">
              আপনার সন্তানের জন্ম নিবন্ধন সম্পন্ন কর।
            </p>
            <p className="text-sm text-black mr-5">
              সময়মতো পানির বিল পরিশোধ করুন।
            </p>
            <p className="text-sm text-black mr-5">
              আপনার ইউনিয়নকে পরিচ্ছন্ন রাখুন।
            </p>
          </Marquee>
        </div>
      </div>
    </>
  );
};

const HomeCarouselData = [
  {
    id: 1,
    title: "ইউনিয়ন পরিষদের নিয়ন্ত্রণে জনসমাগম",
    description:
      "মহালের ইউনিয়ন পরিষদের প্রতিষ্ঠানিক মূল্যায়নের জন্য স্থানীয় জনগণ এবং প্রতিনিধিরা একত্রে আসছেন। এই সমাগমে পরিষদের ভবিষ্যতের পরিকল্পনা নির্ধারণ ও অনুমোদন করা হবে।",
    photo: `${homeSlider1}`,
  },
  {
    id: 2,
    title: "মহিলা উন্নয়নে ইউনিয়ন পরিষদের পক্ষে নতুন প্রকল্প",
    description:
      "ইউনিয়ন পরিষদের নেতৃত্বে একটি নতুন প্রকল্প চালু হচ্ছে যা মহিলা উন্নয়নে বিশেষ গুরুত্ব দেয়ার উদ্দেশ্যে। এই প্রকল্পের বিষয়বস্তু ও উদ্দেশ্য নিয়ে আলোচনা করা হবে পরিষদের সাধারণ সভায়।",
    photo: `${homeSlider2}`,
  },
  {
    id: 3,
    title: "ইউনিয়ন পরিষদের শিক্ষা প্রকল্পে নতুন আলোক",
    description:
      "পরিষদের নেতৃত্বে চালিত একটি শিক্ষা প্রকল্পের চূড়ান্ত পরিকল্পনা ও অনুমোদন করা হবে। এই প্রকল্পের মাধ্যমে স্থানীয় শিক্ষার্থীদের শিক্ষার মান উন্নতি ও সম্প্রচার উন্নীত করা হবে।",
    photo: `${homeSlider3}`,
  },
];

const HomeMainContent = () => {
  return (
    <>
      <Carousel data={HomeCarouselData} >
        {/* <CarouselContainer className="h-[25rem]">
          {HomeCarouselData.map((item) => (
            <Slide key={item.id} className="relative h-full">
              <img
                src={item.photo}
                alt={item.title}
                className="absolute w-full h-full top-0 left-0"
              />
              <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.5)]">
                <h3 className="absolute bottom-[30%] left-1/2 -translate-x-1/2 text-white font-bold w-[80%] text-center text-xl">
                  {item.title}
                </h3>
                <p className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-sm text-white w-full text-center px-3">
                  {item.description}
                </p>
              </div>
            </Slide>
          ))}
        </CarouselContainer> */}
      </Carousel>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Welcome />
      {/* Home Layout */}
      <div className="grid grid-cols-12 bg-slate-100 mt-8">
        {/* left sidebar */}
        <aside className="col-span-12 order-2 lg:order-1 lg:col-span-3 border border-green-400">
          <h3>Left Sidebar</h3>
        </aside>
        {/* Main Content */}
        <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 border border-yellow-400">
          <HomeMainContent />
        </div>
        {/* Right Sidebar */}
        <aside className="order-3 lg:order-3 col-span-12 lg:col-span-3 border border-indigo-500">
          <h3>Right Sidebar</h3>
        </aside>
      </div>
    </>
  );
};

export default HomePage;
