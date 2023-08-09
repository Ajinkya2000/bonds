import bondsapi from "@/endpoints/bondsapi";
import { TradeDataType } from "@/types";
import { formatDate } from "@/utils/date";
import { camelCaseToNormal } from "@/utils/naming";
import {
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid
} from "@chakra-ui/react";
import { FormEvent } from "react";

export type BondModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: TradeDataType;
};


export function BondModal({ isOpen, onClose, data }: BondModalProps) {

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const allFormData: any = e.target;

    const date = new Date((allFormData[6] as HTMLInputElement).value).toISOString();
    const newData = data;

    newData.settlementDate = date;

    const res = await bondsapi.post("/trade", newData);
    location.reload();
  }

  const renderFields = (ky: string) => {
    if (ky === "securityModel") {
      return <></>;
    }

    if (ky === "settlementDate") {
      return <>
        {/* {console.log(formatDate(new Date(data.settlementDate)))} */}
        <FormLabel>{camelCaseToNormal(ky)}:</FormLabel>
        <Input type='date' required />
      </>
    }

    return <>
      <FormLabel>{camelCaseToNormal(ky)}:</FormLabel>
      <Input bg="gray.100" value={ky === 'tradeDate' ? formatDate(new Date(data[ky])) : data[ky]} readOnly />
    </>
  }

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="frm" onSubmit={handleSubmit}>
              <SimpleGrid columns={1} spacing={10}>
                {Object.keys(data).map((ky) =>
                  <FormControl key={ky}>
                    {renderFields(ky)}
                  </FormControl>
                )}
              </SimpleGrid>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button form='frm' colorScheme="blue" mr={3} type='submit'>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
