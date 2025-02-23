import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App';


interface Props {
  gameQuery: GameQuery
}


const GameHeading = ({gameQuery}: Props) => {
  if (!(gameQuery.genreID || gameQuery.platformID)) 
    return (<Heading>Games</Heading>)

  let genreName = gameQuery.genreName? gameQuery.genreName:"";
  let platFormName = gameQuery.platformName? gameQuery.platformName: "";
  //const heading = `${gameQuery.genre?.name} ${gameQuery.platform?.name} Games`

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      { genreName+" "+ platFormName + " Games"}
    </Heading>
  )
}

export default GameHeading