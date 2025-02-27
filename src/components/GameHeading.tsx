import { Heading } from '@chakra-ui/react'
import useGameQueryStore from '../queryStore';


const GameHeading = () => {
  const genreID = useGameQueryStore(s => s.gameQuery.genreID);
  const genreName = useGameQueryStore(s => s.gameQuery.genreName);
  const platformID = useGameQueryStore(s => s.gameQuery.platformID);
  const platformName = useGameQueryStore(s => s.gameQuery.platformName);

  if (!(genreID || platformID)) 
    return (<Heading>Games</Heading>)


  //const heading = `${gameQuery.genre?.name} ${gameQuery.platform?.name} Games`

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      { (genreName? genreName:"") +" "+ (platformName? platformName:"") + " Games"}
    </Heading>
  )
}

export default GameHeading