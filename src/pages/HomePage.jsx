import Marquee from "react-fast-marquee";
import {
  asonCounselor1,
  asonCounselor2,
  asonCounselor3,
  awerness,
  chairman,
  counselor1,
  counselor2,
  counselor3,
  counselor4,
  counselor5,
  counselor6,
  counselor7,
  counselor8,
  counselor9,
  homeSlider1,
  homeSlider2,
  homeSlider3,
  hotline106,
  hotline1090,
  hotline333,
  hotline999,
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
import { birthReg, circular } from "../../public";
import { FaRegFilePdf } from "react-icons/fa";
import ShebaCard from "../components/ui/ShebaCard";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CounselorCard from "../components/ui/CounselorCard";
import SmartLink from "../components/ui/SmartLink";

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

const COUNSELORS = [
  { id: 1, image: `${counselor1}`, name: "রফিকুল ইসলাম" },
  { id: 2, image: `${counselor2}`, name: "মোঃ জসীম উদ্দীন ভূইয়া" },
  { id: 3, image: `${counselor3}`, name: "রাসেল সিকদার" },
  { id: 4, image: `${counselor4}`, name: "মোঃ আক্তার হোসেন" },
  { id: 5, image: `${counselor5}`, name: "মোঃ হামিদুল্লাহ" },
  { id: 6, image: `${counselor6}`, name: "মোঃ মাহবুবুর রহমান" },
  { id: 7, image: `${counselor7}`, name: "আনোয়ার হোসেন" },
  { id: 8, image: `${counselor8}`, name: "আমির হোসেন ভুঁইয়া" },
  { id: 9, image: `${counselor9}`, name: "আতিকুর রহমান" },
];

const ASON_COUNSELORS = [
  { id: 1, image: `${asonCounselor1}`, name: "মিসেস লায়লা পারভিন" },
  { id: 2, image: `${asonCounselor2}`, name: "মোসাঃ মাহফুজা বেগম" },
  { id: 3, image: `${asonCounselor3}`, name: "মিসেস জোসনা বেগম" },
];

const ABENDONPOTRO = [
  { id: 1, title: "জন্ম নিবন্ধন ফরম", path: `${birthReg}` },
  { id: 2, title: "মৃত্যু নিবন্ধন ফরম", path: `${birthReg}` },
  { id: 3, title: "মৃত্যু সনদ ফরম", path: `${birthReg}` },
  { id: 4, title: "জন্ম/মৃত্যু সনদ বাতিল/সংশোধনের আবেদনপত্র", path: `${birthReg}` },
  { id: 5, title: "বিদ্যুৎ প্রত্যয়ন ফরম", path: `${birthReg}` },
  { id: 6, title: "পরিবেশগত ছারপত্র ফরম", path: `${birthReg}` },
  { id: 7, title: "পরিবেশগত অনাপত্তি ফরম", path: `${birthReg}` },
  { id: 8, title: "ইমারত নকশা অনুমোদন ফরম-১", path: `${birthReg}` },
  { id: 9, title: "ইমারত নকশা অনুমোদন ফরম-২", path: `${birthReg}` },
  { id: 10, title: "হোল্ডিং নাম্বার ফরম", path: `${birthReg}` },
  { id: 11, title: "অবস্থানগত অনাপত্তি (এন.ও.সি)ফরম", path: `${birthReg}` },
  { id: 12, title: "প্রিমেসি লাইসেন্স ফরম", path: `${birthReg}` },
  { id: 13, title: "প্রিমাইসিস লাইসেন্স ফরম", path: `${birthReg}` },
  { id: 14, title: "উত্তরাধিকার সনদ ফরম", path: `${birthReg}` },
  { id: 15, title: "ট্রেড লাইসেন্স অ্যাপ্লিকেশান ফরম", path: `${birthReg}` },
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
      <div className="mt-6 mb-6">
        <div className="border-b-2 border-primary-color">
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
      </div>
      {/* সচেতনতা */}
      <div>
        <HighlightTitle text="সচেতনতা" path="#" linkClass="text-xl font-bold" />
        <div className="mt-4 w-full h-[270px]">
          <img
            src={awerness}
            alt="awerness"
            className="max-w-full w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </>
  );
};

const HomeLeftSide = () => {
  return (
    <>
      <div>
        {/* সম্মানিত চেয়ারম্যান */}
        <div className="mb-6">
          <div className="mb-5">
            <HighlightTitle
              text="সম্মানিত চেয়ারম্যান"
              path="#"
              linkClass="text-xl font-bold"
            />
          </div>
          <Card>
            <CardHeader>
              <img
                src={chairman}
                alt="chairman"
                className="w-full max-w-full"
              />
            </CardHeader>
            <CardBody className="!p-2">
              <h4 className="text-xl font-bold text-center">আহসানুল ইসলাম</h4>
            </CardBody>
            <CardFooter className="flex-col justify-center items-center !p-3">
              <h6 className="text-lg font-semibold mb-2">চেয়ারম্যান</h6>
              <p className="text-sm">স্মার্ট ইউনিয়ন</p>
              <span className="text-xs">নারায়ণগঞ্জ</span>
            </CardFooter>
          </Card>
        </div>

        {/* কাউন্সিলরবৃন্দ */}
        <div className="mb-8">
          <div className="mb-5">
            <HighlightTitle
              text="কাউন্সিলরবৃন্দ"
              path="#"
              linkClass="text-xl font-bold"
            />
          </div>
          <div>
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-x-3 gap-y-6">
              {COUNSELORS.map((item) => (
                <Link key={item.id} title={item.name}>
                  <Card className="h-full group overflow-hidden">
                    <CardHeader className="!p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full max-w-full transition-all ease-in-out duration-300 group-hover:scale-110"
                      />
                    </CardHeader>
                    <CardBody className="!p-2">
                      <h5 className="text-black text-xs transition-all ease-in-out duration-300 group-hover:text-primary-color group-hover:font-medium">
                        {item.name}
                      </h5>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* সংরক্ষিত আসনের কাউন্সিলরবৃন্দ */}
        <div className="mb-8">
          <div className="mb-5">
            <HighlightTitle
              text="সংরক্ষিত আসনের কাউন্সিলরবৃন্দ"
              path="#"
              linkClass="text-xl font-bold"
            />
          </div>
          {/* Card */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-2">
            {ASON_COUNSELORS.map((item) => (
              <CounselorCard data={item} key={item.id} />
            ))}
          </div>
        </div>

        {/* গুরুত্বপূর্ণ আবেদনপত্র */}
        <div className="mb-8">
          <div className="mb-5">
            <HighlightTitle
              text="গুরুত্বপূর্ণ আবেদনপত্র"
              path="#"
              linkClass="text-xl font-bold"
            />
          </div>
          {/* links */}
          <div className="flex items-start flex-col divide-y-[1px] divide-secondary-color">
            {ABENDONPOTRO.map((item) => (
              <SmartLink key={item.id} data={item} />
            ))}
          </div>
        </div>

        {/* জরুরি হটলাইন */}
        <div className="mb-8">
        <div className="mb-5">
            <HighlightTitle
              text="জরুরি হটলাইন"
              path="#"
              linkClass="text-xl font-bold"
            />
          </div>
          {/* hotlines */}
          <div className="grid grid-cols-2 items-center gap-x-5 gap-y-8">
            <span  className="mx-auto">
              <img src={hotline106} alt="106 hotline" className="max-w-[150px] w-full" />
            </span>
            <span className="mx-auto"> 
              <img src={hotline1090} alt="1090 hotline" className="max-w-[150px] w-full" />
            </span>
            <span  className="mx-auto">
              <img src={hotline333} alt="333 hotline" className="max-w-[150px] w-full" />
            </span>
            <span  className="mx-auto">
              <img src={hotline999} alt="999 hotline" className="max-w-[150px] w-full" />
            </span>
          </div>
        </div>


      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Welcome />
      {/* Home Layout */}
      <div className="grid grid-cols-12 bg-slate-100 mt-8 gap-y-10">
        {/* left sidebar */}
        <aside className="col-span-12 order-2 lg:order-1 lg:col-span-3 px-3">
          <HomeLeftSide />
        </aside>
        {/* Main Content */}
        <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 pb-8 max-w-screen-md mx-auto px-3">
          <HomeMainContent />
        </div>
        {/* Right Sidebar */}
        <aside className="order-3 lg:order-3 col-span-12 lg:col-span-3 px-3">
          <h3>Right Sidebar</h3>
        </aside>
      </div>
    </>
  );
};

export default HomePage;
