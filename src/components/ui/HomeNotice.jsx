import { FaRegFilePdf } from "react-icons/fa";
import { application_form } from "../../../public";
import HighlightTitle from "./HighlightTitle";
import PdfDownload from "./PdfDownload";
import Table, { TData, THeading, TRow } from "./Table";

const HomeNotice = () => {
  return (
    <>
      <div>
        <div className="mb-5">
          <HighlightTitle path="#" text="নোটিশ" linkClass="font-bold text-xl" />
        </div>
        {/* Table */}
        <Table>
          {/* table heading */}
          <TRow>
            <THeading>বিষয়বস্তু</THeading>
            <THeading>প্রকাশের তারিখ</THeading>
            <THeading>ডাউনলোড</THeading>
          </TRow>
          {/* Table data 1 */}
          <TRow>
            <TData>চাকুরির আবেদন ফরম</TData>
            <TData>১১-০২-২৪</TData>
            <TData>
              <PdfDownload
                file={application_form}
                fileName="application_form"
                icon={<FaRegFilePdf />}
              />
            </TData>
          </TRow>
          {/* Table data 2 */}
          <TRow>
            <TData>
              আরবান প্রাইমারী হেলথ কেয়ার ডেলিভারী প্রজেক্ট ২য় পর্যায় নিয়োগ
              বিজ্ঞপ্তি
            </TData>
            <TData>১১-০২-২৪</TData>
            <TData>
              <PdfDownload
                file={application_form}
                fileName="application_form"
                icon={<FaRegFilePdf />}
              />
            </TData>
          </TRow>
          <TRow>
            <TData>শহর সমন্বয় কমিটি (টিএলসিসি)&apos;র সভা আহবান প্রসঙ্গে</TData>
            <TData>২৫-০৯-২২</TData>
            <TData>
              <PdfDownload
                file={application_form}
                fileName="application_form"
                icon={<FaRegFilePdf />}
              />
            </TData>
          </TRow>
        </Table>
      </div>
    </>
  );
};

export default HomeNotice;
