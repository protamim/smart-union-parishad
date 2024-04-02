import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets";
import { MdHome } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { useState } from "react";

const NAV_ITEMS = [
  {
    id: 1,
    title: "ইউনিয়ন তথ্য",
    path: "#",
    DROPDOWN: [
      { id: 1, title: "সম্মানিত মেয়রদের তালিকা", path: "#" },
      { id: 2, title: "ইউনিয়নের সংক্ষিপ্ত বিবরণ", path: "#" },
      { id: 3, title: "ইউনিয়নের সাংগঠনিক কাঠামো", path: "#" },
      { id: 4, title: "ইউনিয়নের কর্মকর্তা ও কর্মচারী", path: "#" },
      { id: 5, title: "ইউনিয়নের মানচিত্র", path: "#" },
      { id: 6, title: "শিক্ষা বিষয়ক তথ্য", path: "#" },
    ],
  },
  { id: 2, title: "এক নজরে", path: "#" },
  {
    id: 2,
    title: "বিভাগ",
    path: "#",
    DROPDOWN: [
      { id: 1, title: "প্রশাসন বিভাগ", path: "#" },
      { id: 2, title: "প্রকৌশল বিভাগ", path: "#" },
      { id: 3, title: "স্বাস্থ্য বিভাগ", path: "#" },
    ],
  },
  {
    id: 2,
    title: "যোগাযোগ",
    path: "#",
    DROPDOWN: [
      { id: 1, title: "যোগাযোগ", path: "#" },
      { id: 2, title: "মেয়রের প্রোফাইল এবং সংযোগ", path: "#" },
      { id: 3, title: "কাউন্সিলরদের প্রোফাইল এবং সংযোগ", path: "#" },
      { id: 4, title: "কাউন্সিলরদের প্রোফাইল এবং সংযোগ", path: "#" },
      {
        id: 5,
        title: "প্রধান নির্বাহী কর্মকর্তার প্রোফাইল এবং সংযোগ",
        path: "#",
      },
    ],
  },
  { id: 2, title: "সিটিজেন চার্টার", path: "#" },
  { id: 2, title: "নোটিশ", path: "#" },
  { id: 2, title: "সামাজিক সুরক্ষা", path: "#" },
  { id: 2, title: "ডিজিটাল সেবা", path: "#" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };

  return (
    <>
      {/* header top start */}
      <div className="bg-primary-color flex items-center gap-x-6 px-2 py-4 mb-4">
        {/* logo */}
        <Link to="/" className="w-16 h-16 inline-flex bg-white">
          <img
            src={logo}
            alt="parishad logo"
            className="w-full h-full max-w-full"
          />
        </Link>
        <div>
          <h4 className="text-2xl text-white">স্মার্ট ইউনিয়ন পরিষদ</h4>
        </div>
      </div>
      {/* header top end */}

      {/* navbar start */}
      <div className="bg-primary-color flex justify-between items-center px-2 py-3 relative lg:justify-normal lg:gap-x-6">
        {/* home icon */}
        <Link
          to="/"
          className="block text-2xl text-white transition-all duration-300 ease-in-out hover:opacity-65"
        >
          <span>
            <MdHome />
          </span>
        </Link>

        {/* offcanvas bar */}
        <button
          onClick={handleToggle}
          className="text-white text-2xl transition-all duration-300 ease-in-out hover:opacity-65 lg:hidden"
        >
          <span>
            <HiMiniBars3BottomRight />
          </span>
        </button>

        {/* navigation menu for small devices */}
        <div
          style={toggle ? { left: 0 } : { left: "-112%" }}
          className="absolute top-[110%] left-0 bg-primary-color pt-5 pb-8 w-full transition-all ease-in-out duration-300 z-[999] lg:hidden"
        >
          <ul className="text-white">
            {NAV_ITEMS.map((item) => (
              <>
                {item.DROPDOWN ? (
                  <Accordion allowToggle sx={{ width: "100%" }}>
                    <AccordionItem className="border-none">
                      <AccordionButton className="!py-2 !px-4 w-full hover:!bg-violet-400">
                        <li key={item.id} className="block">
                          {item.title}
                        </li>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <ul className="ml-5 space-y-4">
                          {item?.DROPDOWN?.map((subItem) => (
                            <li key={subItem.id}>
                              <NavLink
                                to="#"
                                className="transition-all duration-300 ease-in-out hover:opacity-60 hover:underline"
                              >
                                {subItem.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <li key={item.id}>
                    <NavLink
                      to="#"
                      className="px-4 py-2 block transition-all duration-300 ease-in-out hover:opacity-95 hover:underline hover:bg-violet-400"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>

        {/* navigation for larger devices */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-x-6 text-white">
            {NAV_ITEMS.map((item) => (
              <>
                {/* dropdown */}
                {item.DROPDOWN ? (
                  <>
                    <li
                      key={item.id}
                      className="relative group flex items-center"
                    >
                      <NavLink to="#">{item.title}</NavLink>
                      <span className="text-xl">
                        <MdKeyboardArrowDown />
                      </span>

                      <ul className="absolute left-0 top-[120%] bg-primary-color shadow-xl shadow-violet-300 px-4 pt-6 pb-4 transition-all ease-in-out duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:top-[130%] space-y-4">
                        {item?.DROPDOWN?.map((subItem) => (
                          <li key={subItem.id}>
                            <NavLink
                              to="#"
                              className="text-nowrap transition-all ease-in-out duration-300 hover:opacity-60 hover:underline"
                            >
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </>
                ) : (
                  <li key={item.id}>
                    <NavLink to="#">{item.title}</NavLink>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      {/* navbar end */}
    </>
  );
};

export default Navbar;
