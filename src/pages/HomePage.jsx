import Marquee from "react-fast-marquee";
import {
  homeSlider1,
  homeSlider2,
  homeSlider3,
  sheba1,
  sheba10,
  sheba11,
  sheba12,
  sheba13,
  sheba14,
  sheba2,
  sheba3,
  sheba4,
  sheba5,
  sheba6,
  sheba7,
  sheba8,
  sheba9,
} from "../assets";
import Carousel from "../components/ui/Carousel";
import HighlightTitle from "../components/ui/HighlightTitle";
import HomeNotice from "../components/ui/HomeNotice";
import HomeParishadAbout from "../components/ui/HomeParishadAbout";
import Table, { TData, THeading, TRow } from "../components/ui/Table";
import PdfDownload from "../components/ui/PdfDownload";
import { circular } from "../../public";
import { FaRegFilePdf } from "react-icons/fa";
import ShebaCard from "../components/ui/ShebaCard";

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

const SHEBA = [
  { id: 1, title: "Development Project", image: `${sheba1}` },
  { id: 2, title: "Budget", image: `${sheba2}` },
  { id: 3, title: "APP", image: `${sheba3}` },
  { id: 4, title: "Holding Tax", image: `${sheba4}` },
  { id: 5, title: "Health", image: `${sheba5}` },
  { id: 6, title: "Town Planning", image: `${sheba6}` },
  { id: 7, title: "Electrical", image: `${sheba7}` },
  { id: 8, title: "Conservancy", image: `${sheba8}` },
  { id: 9, title: "Water Supply", image: `${sheba9}` },
  { id: 10, title: "Mechanical", image: `${sheba10}` },
  { id: 11, title: "E-GP", image: `${sheba11}` },
  { id: 12, title: "Trade License", image: `${sheba12}` },
  { id: 13, title: "Birth verify", image: `${sheba13}` },
  { id: 14, title: "COV-19 Vaccine", image: `${sheba14}` },
];

const HomeMainContent = () => {
  return (
    <>
      <div className="mb-6">
        <Carousel data={HomeCarouselData} />
      </div>
      {/* Porishad Overview */}
      <div className="space-y-5 mb-8">
        <HighlightTitle
          path="#"
          text="ইউনিয়নের বার্ষিক ক্রয় পরিকল্পনা ২০২২-২০২৩"
        />
        <HighlightTitle path="#" text="ইউনিয়নের বাজেট ২০২৩-২০২৪" />
        <HighlightTitle
          path="#"
          text="ইউনিয়নের ২০২৩-২০২৪ অর্থবছরের উন্নয়ন কাজের তালিকা"
        />
      </div>
      {/* পরিষদ সম্পর্কে */}
      <HomeParishadAbout />
      {/* ইউনিয়নের নোটিশ */}
      <HomeNotice />
      {/* ইউনিয়নের নিয়োগ বিজ্ঞপ্তি */}
      <div className="mt-6">
        <HighlightTitle
          text="নিয়োগ বিজ্ঞপ্তি"
          path="#"
          h3Class="mb-5"
          linkClass="text-xl font-bold"
        />
        <Table>
          <TRow>
            <THeading>বিষয়বস্তু</THeading>
            <THeading>প্রকাশের তারিখ</THeading>
            <THeading>ডাউনলোড</THeading>
          </TRow>
          <TRow>
            <TData>ইউনিয়নের পানি শাখায় বিভিন্ন পদে নিয়োগ বিজ্ঞপ্তি</TData>
            <TData>০৮-০৬-২০২৩</TData>
            <TData>
              <PdfDownload
                file={circular}
                fileName="Circular"
                icon={<FaRegFilePdf />}
              />
            </TData>
          </TRow>
        </Table>
      </div>
      {/* সেবাসমুহ */}
      <div className="mt-8 border-b-2 border-primary-color">
        <HighlightTitle
          text="সেবাসমূহ"
          path="#"
          linkClass="text-xl font-bold"
          h3Class="max-w-max"
        />
      </div>
      {/* card */}
      <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-center gap-x-5 gap-y-7 mt-6">
        {SHEBA.map((item) => (
          <ShebaCard key={item.id} data={item} />
        ))}
      </div>
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
        <aside className="col-span-12 order-2 lg:order-1 lg:col-span-3">
          <h3>Left Sidebar</h3>
        </aside>
        {/* Main Content */}
        <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 pb-8 max-w-screen-md mx-auto">
          <HomeMainContent />
        </div>
        {/* Right Sidebar */}
        <aside className="order-3 lg:order-3 col-span-12 lg:col-span-3 ">
          <h3>Right Sidebar</h3>
        </aside>
      </div>
    </>
  );
};

export default HomePage;
