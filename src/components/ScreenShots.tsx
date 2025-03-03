import { GridItem, SimpleGrid, Image } from '@chakra-ui/react';
import useScreenShots from '../hooks/useGameScreenShotsQuery';

interface Props {
    id: number;
}

const ScreenShots = ({id}: Props) => {

  const {data: screenShots, error, isLoading} = useScreenShots(id);

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {screenShots?.map(screenShot =>
        <GridItem key={screenShot.id}><Image key={screenShot.id} src={screenShot.image}/></GridItem>
      )}
    </SimpleGrid>
  )
}

export default ScreenShots