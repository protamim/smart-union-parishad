import { Link } from "react-router-dom";
import {
  bKashLogo,
  footerTopImage,
  masterCardLogo,
  nagadLogo,
  pubaliBankLogo,
  rocketLogo,
  upayLogo,
  visaCardLogo,
} from "../assets";

const Footer = () => {
  return (
    <>
      <div
        className="rounded-t-xl"
        style={{ background: "linear-gradient(179deg, #8e53a280, #8cc63f4f)" }}
      >
        {/* Top */}
        <div className="mb-10 pt-6">
          <img src={footerTopImage} alt="shadinota dibosh" className="w-full" />
        </div>
        <div className="border-t border-secondary-color">
          {/* Payment Methods */}
          <div className="px-3 py-5 flex items-center flex-col gap-6 md:!flex-row md:justify-center md:items-center md:gap-9">
            <p className="font-normal text-black text-xl">We Accept</p>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {/* bKash */}
              <Link
                to="https://www.bkash.com/"
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-125"
              >
                <img src={bKashLogo} alt="bKash Logo PNG" className="w-11" />
              </Link>
              {/* Nagad */}
              <Link
                to="https://nagad.com.bd/"
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-125"
              >
                <img src={nagadLogo} alt="Nagad Logo PNG" className="w-11" />
              </Link>
              {/* Rocket */}
              <Link
                to="https://www.dutchbanglabank.com/rocket/rocket.html"
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-125"
              >
                <img src={rocketLogo} alt="Rocket Logo PNG" className="w-11" />
              </Link>
              {/* Upay */}
              <Link
                to="https://www.upaybd.com/"
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-125"
              >
                <img src={upayLogo} alt="upay Logo PNG" className="w-11" />
              </Link>
              {/* Pubali Bank */}
              <Link
                to="https://www.pubalibangla.com/"
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-125"
              >
                <img
                  src={pubaliBankLogo}
                  alt="Pubali bank Logo PNG"
                  className="w-11"
                />
              </Link>
              {/* Master Card */}
              <Link
                to="https://www.mastercard.com/global/en.html"
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-125"
              >
                <img
                  src={masterCardLogo}
                  alt="Master card Logo PNG"
                  className="w-11"
                />
              </Link>
              {/* Visa Card */}
              <Link
                to="https://bd.visa.com/"
                target="_blank"
                className="transition-all ease-in-out duration-300 hover:scale-125"
              >
                <img
                  src={visaCardLogo}
                  alt="Visa card Logo PNG"
                  className="w-11"
                />
              </Link>

              
            </div>
          </div>
          {/* bottom */}
          <div className="py-4 px-3 ">
            <p className="text-center space-x-2">
              <span>Copyright &copy; 2024 | All right &reg; reserved by</span>
              <a
                href="#"
                className="text-secondary-color transition-all ease-in-out duration-300 underline hover:text-slate-800 hover:opacity-70"
              >
                Smart Union Parishad.
              </a>
              <span>Developed by</span>
              <a
                href="https://www.facebook.com/protamim32/"
                target="_blank"
                className="text-secondary-color transition-all ease-in-out duration-300 underline hover:text-slate-800 hover:opacity-70"
              >
                Protamim
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
