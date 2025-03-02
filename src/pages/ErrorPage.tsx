import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { Box, Heading } from '@chakra-ui/react';

const ErrorPage = () => {
  const error = useRouteError();



  return (
    <>
        <NavBar />
        <Box padding={5}>
            <Heading>Oops!</Heading>
            <p>
            {isRouteErrorResponse(error)
                ? "This page does not exist. Please check the URL and try again." 
                : "An unexpected Error occurred!" }
            </p>
        </Box>
    </>
  )
}

export default ErrorPage