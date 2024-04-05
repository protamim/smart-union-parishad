export const THeading = ({ children }) => {
  return (
    <>
      <th className="p-2 border border-gray-500 text-center">{children}</th>
    </>
  );
};

export const TData = ({ children }) => {
  return (
    <>
      <td className="p-2 border border-gray-500 text-center">{children}</td>
    </>
  );
};

export const TRow = ({children}) => {
  return (
    <>
      <tr>
        {children}
      </tr>
    </>
  );
};

const Table = ({children}) => {
  return (
    <>
      <table className="w-full">
        {children}
      </table>
    </>
  );
};

export default Table;
