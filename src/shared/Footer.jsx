import { footerTopImage } from "../assets";

const Footer = () => {
  return (
    <>
      <div className="rounded-t-xl" style={{background: 'linear-gradient(179deg, #8e53a280, #8cc63f4f)'}}>
        {/* Top */}
        <div className="mb-10 pt-6">
          <img src={footerTopImage} alt="shadinota dibosh" className="w-full" />
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
    </>
  );
};

export default Footer;
