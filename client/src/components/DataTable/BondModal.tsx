import { formatDate } from "@/utils/date";
import { camelCaseToNormal } from "@/utils/naming";
import {
  Box,
  Button, FormControl, FormLabel, Input, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";

export type BondModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: any;
};


export function BondModal({ isOpen, onClose, data }: BondModalProps) {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const allFormData: any = e.target;
    console.log((allFormData[6] as HTMLInputElement).value, data);

    const date = new Date((allFormData[6] as HTMLInputElement).value).toISOString();
    const newData = data;

    newData.settlementDate = date;
  }

  const renderFields = (ky: string) => {
    if (ky === "securityId") {
      return <></>;
    }

    if (ky === "settlementDate") {
      return <>
        <FormLabel>{camelCaseToNormal(ky)}:</FormLabel>
        <Input type='date' required />
      </>
    }

    return <>
      <FormLabel>{camelCaseToNormal(ky)}:</FormLabel>
      <Input value={ky === 'tradeDate' ? formatDate(new Date(data[ky])) : data[ky]} readOnly />
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
                    {/* {console.log(ky)} */}
                    {/* {ky === 'settlementDate' ?
                      <Input type='date' required />
                      : <Input value={ky === 'tradeDate' ? formatDate(new Date(data[ky])) : data[ky]} readOnly />} */}
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
