import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props{
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({term, children}: Props) => {

  return (
    <Box marginY={5}> 
        <Heading fontSize="large" color="darkgray">{term}</Heading>
        <dd>{children}</dd>
    </Box>
  )
}

export default DefinitionItem