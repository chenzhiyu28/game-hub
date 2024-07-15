import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App';


interface Props {
  gameQuery: GameQuery
}


const GameHeading = ({gameQuery}: Props) => {
  if (!(gameQuery.genre || gameQuery.platform)) 
    return (<Heading>Games</Heading>)

  let genreName = gameQuery.genre?.name? gameQuery.genre.name:"";
  let platFormName = gameQuery.platform?.name? gameQuery.platform.name: "";
  //const heading = `${gameQuery.genre?.name} ${gameQuery.platform?.name} Games`

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      { genreName+" "+ platFormName + " Games"}
    </Heading>
  )
}

export default GameHeading