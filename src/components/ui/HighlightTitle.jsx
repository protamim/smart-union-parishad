import { Link } from "react-router-dom";

const HighlightTitle = ({path, text, linkClass, h3Class}) => {
  return (
    <>
      <h3 className={`bg-primary-color py-1 px-2 ${h3Class}`}>
        <Link
          to={path}
          className={`text-white transition-all ease-in-out duration-300 hover:underline hover:opacity-85 ${linkClass}`}
        >
          {text}
        </Link>
      </h3>
    </>
  );
};

export default HighlightTitle;
