import { Link } from "react-router-dom";

const ShebaCard = ({ data = {} }) => {
  const { id, title, image } = data;
  return (
    <>
      <Link
        to="#"
        title={title || ''}
        className="bg-transparent border border-secondary-color text-center mx-auto px-4 py-5 max-w-[200px] flex flex-col gap-y-4 justify-between h-full group"
      >
        <h3 className="text-lg uppercase font-medium text-primary-color transition-all ease-in-out duration-300 group-hover:text-black group-hover:underline">
          {title || ''}
        </h3>
        <div className="max-w-[160px]">
          <img src={image} alt={title || ''} className="w-full transition-all ease-in-out duration-300 group-hover:scale-105" />
        </div>
      </Link>
    </>
  );
};

export default ShebaCard;
