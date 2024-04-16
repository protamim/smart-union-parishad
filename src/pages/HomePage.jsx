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
  dengue,
  digitalBangladesh,
  homeSlider1,
  homeSlider2,
  homeSlider3,
  hotline106,
  hotline1090,
  hotline333,
  hotline999,
  latestDay,
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
import { application_form, birthReg, circular } from "../../public";
import { FaRegFilePdf } from "react-icons/fa";
import ShebaCard from "../components/ui/ShebaCard";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CounselorCard from "../components/ui/CounselorCard";
import SmartLink from "../components/ui/SmartLink";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import WelcomeHome from "../components/ui/WelcomHome";
import Counselors from "../components/ui/Counselors";

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
  { id: 1, image: `${counselor1}`, name: "রফিকুল ইসলাম", word: 3, mobile: '01718908020' },
  { id: 2, image: `${counselor2}`, name: "মোঃ জসীম উদ্দীন ভূইয়া", word: 4, mobile: '01871908236' },
  { id: 3, image: `${counselor3}`, name: "রাসেল সিকদার", word: 8, mobile: '01414842030' },
  { id: 4, image: `${counselor4}`, name: "মোঃ আক্তার হোসেন", word: 1, mobile: '01618206030' },
  { id: 5, image: `${counselor5}`, name: "মোঃ হামিদুল্লাহ", word: 2, mobile: '01915728731' },
  { id: 6, image: `${counselor6}`, name: "মোঃ মাহবুবুর রহমান", word: 9, mobile: '01354896387' },
  { id: 7, image: `${counselor7}`, name: "আনোয়ার হোসেন", word: 7, mobile: '01545987230' },
  { id: 8, image: `${counselor8}`, name: "আমির হোসেন ভুঁইয়া" , word: 5, mobile: '01817918032'},
  { id: 9, image: `${counselor9}`, name: "আতিকুর রহমান", word: 6, mobile: '01785692361' },
];

const ASON_COUNSELORS = [
  { id: 1, image: `${asonCounselor1}`, name: "মিসেস লায়লা পারভিন", word: 3, mobile: '01818235184' },
  { id: 2, image: `${asonCounselor2}`, name: "মোসাঃ মাহফুজা বেগম", word: 2, mobile: '01458625878' },
  { id: 3, image: `${asonCounselor3}`, name: "মিসেস জোসনা বেগম", word: 6, mobile: '01512368967' },
];

const ABENDONPOTRO = [
  { id: 1, title: "জন্ম নিবন্ধন ফরম", path: `${birthReg}` },
  { id: 2, title: "মৃত্যু নিবন্ধন ফরম", path: `${birthReg}` },
  { id: 3, title: "মৃত্যু সনদ ফরম", path: `${birthReg}` },
  {
    id: 4,
    title: "জন্ম/মৃত্যু সনদ বাতিল/সংশোধনের আবেদনপত্র",
    path: `${birthReg}`,
  },
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

const IMPORTANT_LINKS = [
  { id: 1, title: "রাষ্ট্রপতির কার্যালয়", path: `${birthReg}` },
  { id: 2, title: "প্রধানমন্ত্রীর কার্যালয়", path: `${birthReg}` },
  { id: 3, title: "মন্ত্রীপরিষদ বিভাগ", path: `${birthReg}` },
  {
    id: 4,
    title: "বাংলাদেশ জাতীয় তথ্য বাতায়ন",
    path: `${birthReg}`,
  },
  { id: 5, title: "জনপ্রশাসন মন্ত্রণালয়", path: `${birthReg}` },
  {
    id: 6,
    title: "বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) - মন্ত্রিপরিষদ বিভাগ",
    path: `${birthReg}`,
  },
  { id: 7, title: "কর্মী পরিচলন তথ্য সিস্টেম", path: `${birthReg}` },
  { id: 8, title: "জন্ম নিবন্ধন যাচাই", path: `${birthReg}` },
  { id: 9, title: "ইউনিয়নের ওয়েব-পোর্টাল", path: `${birthReg}` },
];

const E_SHEBA = [
  { id: 1, title: "Birth and Death Registration", path: `${birthReg}` },
  { id: 2, title: "Online Invoice Verification", path: `${birthReg}` },
  { id: 3, title: "Verify Visa", path: `${birthReg}` },
  {
    id: 4,
    title: "e-Tax Payment",
    path: `${birthReg}`,
  },
  {
    id: 5,
    title: "Updating national identity card information",
    path: `${birthReg}`,
  },
];

const UPDATED_NOTICE = [
  {
    id: 1,
    title: "চাকুরির আবেদন ফরম",
    date: "১১-০২-২০২৪",
    path: `${application_form}`,
  },
  {
    id: 2,
    title:
      "আরবান প্রাইমারী হেলথ কেয়ার ডেলিভারী প্রজেক্ট ২য় পর্যায় এর নিয়োগ বিজ্ঞপ্তি",
    date: "১১-০২-২০২৪",
    path: `${application_form}`,
  },
  {
    id: 3,
    title: "তারাব পৌরসভায় পানি শাখায় পুনঃ নিয়োগ বিজ্ঞপ্তি",
    date: "১৮-১০-২০২৩",
    path: `${application_form}`,
  },
  {
    id: 4,
    title:
      "জনাব জেড. এম. আনোয়ার, নির্বাহী প্রকৌশলী, তারাব পৌরসভা এর আন্তর্জাতিক পাসপোর্ট নবায়ন প্রসঙ্গে",
    date: "১৬-০৮-২০২৩",
    path: `${application_form}`,
  },
  {
    id: 5,
    title: "নাবিলা অপসরা এর পাসপোর্ট নবায়নের অনাপত্তি প্রদান প্রসঙ্গে",
    date: "২৫-০৬-২০২৩",
    path: `${application_form}`,
  },
  {
    id: 6,
    title: "ফাতেমা ইসলাম এর পাসপোর্ট নবায়নের অনাপত্তি প্রদান প্রসঙ্গে",
    date: "২৫-০৬-২০২৩",
    path: `${application_form}`,
  },
  {
    id: 7,
    title: "শহর সমন্বয় কমিটি (টিএলসিসি)'র সভা আহবান প্রসঙ্গে",
    date: "১৫-০৬-২০২৩",
    path: `${application_form}`,
  },
  {
    id: 8,
    title: "তারাব পৌরসভায় পানি শাখায় বিভিন্ন পদে নিয়োগ বিজ্ঞপ্তি",
    date: "০৮-০৬-২০২৩",
    path: `${application_form}`,
  },
  {
    id: 9,
    title: "শহর সমন্বয় কমিটি সভার কার্যবিবরনী ১৩ নভেম্বর",
    date: "১৩-১১-২২",
    path: `${application_form}`,
  },
  {
    id: 10,
    title: "শহর সমন্বয় কমিটি সভায় অংশগ্রহন সম্পর্কিত নোটিশ ০৭ নভেম্বর",
    date: "০৭-১১-২২",
    path: `${application_form}`,
  },
  {
    id: 11,
    title: "শহর সমন্বয় কমিটি সভার কার্যবিবরনী ২৫ সেপ্টেম্বর",
    date: "২৫-০৯-২২",
    path: `${application_form}`,
  },
  {
    id: 12,
    title: "শহর সমন্বয় কমিটি সভায় অংশগ্রহন সম্পর্কিত নোটিশ ১৯ সেপ্টেম্বর",
    date: "১৯-০৯-২২",
    path: `${application_form}`,
  },
  {
    id: 13,
    title:
      "জনাব মোঃ নাজমুল ইসলাম, উপ-সহকারী প্রকৌশলী (বিদ্যুৎ) এর বহিঃ বাংলাদেশ সফরের আদেশ",
    date: "১৪-০৯-২২",
    path: `${application_form}`,
  },
  {
    id: 14,
    title: "তারাব পৌরসভায় বিভিন্ন পদে নিয়োগ বিজ্ঞপ্তি",
    date: "২২-০২-২০২২",
    path: `${application_form}`,
  },
  {
    id: 15,
    title:
      "Job Advertisement for 'Field Supervisor' of GOB-UNICEF supported WASH project of Tarabo Municipality",
    date: "১৬-০২-২০২২",
    path: `${application_form}`,
  },
  {
    id: 16,
    title: "তারাব পৌরসভার পুনঃ নিয়োগ বিজ্ঞপ্তি",
    date: "২৭-০৮-২০২০",
    path: `${application_form}`,
  },
  {
    id: 17,
    title: "তারাব পৌরসভার নিয়োগ বিজ্ঞপ্তি",
    date: "২৭-০৮-২০২০",
    path: `${application_form}`,
  },
  {
    id: 18,
    title:
      "জনাব মোঃ নজরুল ইসলাম এর আন্তর্জাতিক পাসপোর্ট নবায়ন এর অনাপত্তি পত্র",
    date: "১৬-০২-২০২০",
    path: `${application_form}`,
  },
  {
    id: 19,
    title: "তারাব পৌরসভার স্যানিটেশন সংক্রান্ত নোটিশ",
    date: "২৩-১২-২০১৯",
    path: `${application_form}`,
  },
  {
    id: 20,
    title:
      "পৌরসভার সকল নাগরিক সুবিধা অনলাইনে পেতে Digital Paurashava.gov.bd তে নিবন্ধন করুন.",
    date: "০৬-১২-২০১৯",
    path: `${application_form}`,
  },
  {
    id: 21,
    title: "তারাব পৌরসভায় স্মার্ট জাতীয় পরিচয়পত্র বিতরন সময়সূচীসূচী",
    date: "২৭-১১-২০১৯",
    path: `${application_form}`,
  },
  {
    id: 22,
    title: "পৌরসভার সকল নাগরিক সুবিধার খরচাদি",
    date: "২৭-১১-২০১৯",
    path: `${application_form}`,
  },
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
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-x-3 gap-y-6">
            <Counselors data={COUNSELORS} />
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
            <Counselors data={ASON_COUNSELORS} />
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
            <span className="mx-auto">
              <img
                src={hotline106}
                alt="106 hotline"
                className="max-w-[150px] w-full"
              />
            </span>
            <span className="mx-auto">
              <img
                src={hotline1090}
                alt="1090 hotline"
                className="max-w-[150px] w-full"
              />
            </span>
            <span className="mx-auto">
              <img
                src={hotline333}
                alt="333 hotline"
                className="max-w-[150px] w-full"
              />
            </span>
            <span className="mx-auto">
              <img
                src={hotline999}
                alt="999 hotline"
                className="max-w-[150px] w-full"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const HomeRightSide = () => {
  return (
    <>
      <div>
        {/* Latest Day */}
        <div className="mb-1">
          <img src={latestDay} alt="laetst news in BD" className="w-full" />
        </div>
        {/* আপডেট নোটিশ */}
        <div className="mb-8">
          <div className="mb-5">
            <HighlightTitle
              text="আপডেট নোটিশ"
              path="#"
              linkClass="font-bold text-xl"
            />
          </div>
          {/* নোটিশ */}
          <div className="overflow-hidden border border-secondary-color h-[15rem] p-2">
            <Marquee direction="up" pauseOnHover={true}>
              {UPDATED_NOTICE.map((item) => (
                <a
                  href={item.path}
                  key={item.id}
                  className="border p-1 bg-pink-100 transition-all ease-in-out duration-300 hover:text-primary-color"
                >
                  <p className="mb-2">{item.title}</p>
                  <span>{item.date}</span>
                </a>
              ))}
            </Marquee>
          </div>
        </div>
        {/* গুরুত্বপূর্ণ লিঙ্ক */}
        <div className="mb-8">
          <div className="mb-5">
            <HighlightTitle
              text="গুরুত্বপূর্ণ লিঙ্ক"
              path="#"
              linkClass="font-bold text-xl"
            />
          </div>
          {/* links */}
          <div className="flex items-start flex-col divide-y-[1px] divide-secondary-color">
            {IMPORTANT_LINKS.map((item) => (
              <SmartLink key={item.id} data={item} />
            ))}
          </div>
        </div>
        {/* কেন্দ্রীয় ই-সেবা */}
        <div className="mb-8">
          <div className="mb-5">
            <HighlightTitle
              text="কেন্দ্রীয় ই-সেবা"
              path="#"
              linkClass="font-bold text-xl"
            />
          </div>
          {/* links */}
          <div className="flex items-start flex-col divide-y-[1px] divide-secondary-color">
            {E_SHEBA.map((item) => (
              <SmartLink key={item.id} data={item} />
            ))}
          </div>
        </div>
        {/*  ডিজিটাল বাংলাদেশ দিবস ২০২৪  */}
        <div className="mb-8">
          <div className="mb-5">
            <HighlightTitle
              text="ডিজিটাল বাংলাদেশ দিবস ২০২৪"
              path="#"
              linkClass="font-bold text-xl"
            />
          </div>
          {/* links */}
          <div>
            <img
              src={digitalBangladesh}
              alt="digital Bangladesh"
              className="w-full"
            />
          </div>
        </div>
        {/*  ডেঙ্গু প্রতিরোধে করণীয় */}
        <div className="mb-8">
          <div className="mb-5">
            <HighlightTitle
              text="ডেঙ্গু প্রতিরোধে করণীয়"
              path="#"
              linkClass="font-bold text-xl"
            />
          </div>
          {/* links */}
          <div>
            <Link
              to="https://bangladesh.gov.bd/site/page/91530698-c795-4542-88f2-5da1870bd50c"
              target="_blank"
            >
              <img src={dengue} alt="Dengue Bangladesh" className="w-full" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <WelcomeHome />
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
          <HomeRightSide />
        </aside>
      </div>
    </>
  );
};

export default HomePage;
