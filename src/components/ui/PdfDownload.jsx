const PdfDownload = ({ icon, fileName, file }) => {
  return (
    <>
      <a
        href={file}
        download={fileName}
        className="flex items-center justify-center text-xl transition-all ease-in-out duration-300 hover:text-primary-color"
      >
        {icon}
      </a>
    </>
  );
};

export default PdfDownload;
