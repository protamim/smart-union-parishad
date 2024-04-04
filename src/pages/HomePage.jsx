import Marquee from "react-fast-marquee";

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

const HomePage = () => {
  return (
    <>
      <Welcome />
    </>
  );
};

export default HomePage;
