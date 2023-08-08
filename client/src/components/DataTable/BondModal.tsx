import { TradeDataType } from "@/types";
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
import { FormEvent } from "react";
  
  export type BondModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data: Omit<TradeDataType,'securityId'>;
  };
  


  export function BondModal({ isOpen, onClose, data }: BondModalProps) {

    const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        console.log(e);
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
                        {Object.keys(data).map((ky)=>   
                            <FormControl key={ky}>
                                <FormLabel>{camelCaseToNormal(ky)}:</FormLabel>
                                {/* {console.log(ky)} */}
                            {ky === 'settlementDate'?
                                <Input type='date' required/>
                                :<Input value={ky === 'tradeDate'?formatDate(new Date(data[ky])):data[ky]} readOnly/>}
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
  