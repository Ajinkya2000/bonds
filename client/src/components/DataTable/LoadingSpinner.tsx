import { Box, Spinner, Flex } from "@chakra-ui/react";

export function LoadingSpinner(){
    return (
        <Flex height='100vh' justify='center' alignItems='center'>
           <Spinner size='xl'/> 
        </Flex>
    )
}