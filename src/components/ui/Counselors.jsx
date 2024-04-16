import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useState } from "react";
import CounselorCard from "./CounselorCard";

const Counselors = ({ data = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState({});

  return (
    <>
      {data.length === 0 ? (
        <p>Data Not Found</p>
      ) : (
        data.map((item) => (
          <div key={item.id} onClick={() => setModalData(item)}>
            <div onClick={onOpen}>
              <CounselorCard data={item} />
            </div>
          </div>
        ))
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay bg="rgba(0, 0, 0, 0.55)" />
        <ModalContent>
          <ModalHeader>কাউন্সিলর</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div
              className="flex flex-col items-center gap-y-2 max-w-max mx-auto p-5"
              style={{
                background:
                  "radial-gradient(rgb(222 255 222 / 78%), rgb(221 221 223 / 39%))",
                borderTopLeftRadius: "2.8rem",
              }}
            >
              {/* Photo of Counselor */}
              <img src={modalData.image || 'Data Not Found'} alt={modalData.name || 'Counselor'} />
              {/* Name of Counselor */}
              <p>{modalData.name || 'Data Not Found'}</p>
              {/* Word No */}
              <p>Word No: {modalData.word || 'Data Not Found'}</p>
              {/* Phone Number */}
              <div className="flex items-center gap-x-2">
                <span>Phone:</span>
                <a
                  href={`tel:+88${modalData.mobile || 'Data Not Found'}`}
                  className="transition-all ease-in-out duration-300 hover:text-secondary-color hover:scale-110 hover:translate-x-1"
                >
                  {modalData.mobile || 'Data Not Found'}
                </a>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Counselors;
