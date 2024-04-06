import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";

const CounselorCard = ({data = {}}) => {
    const { id, name, image } = data;
  return (
    <>
      <Link title={name || ''}>
        <Card className="h-full group overflow-hidden">
          <CardHeader className="!p-2">
            <img
              src={image || ''}
              alt={name}
              className="w-full max-w-full transition-all ease-in-out duration-300 group-hover:scale-110"
            />
          </CardHeader>
          <CardBody className="!p-2">
            <h5 className="text-black text-xs transition-all ease-in-out duration-300 group-hover:text-primary-color group-hover:font-medium">
              {name || ''}
            </h5>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default CounselorCard;
