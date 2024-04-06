const SmartLink = ({ data = {} }) => {
  const { path, title } = data;
  return (
    <>
      <a
        href={path || ''}
        download={title || ''}
        className="py-2 w-full transition-all ease-in-out duration-300 hover:bg-[rgba(140_198_63/_17%)] pl-2 hover:underline"
      >
        {title || ''}
      </a>
    </>
  );
};

export default SmartLink;
