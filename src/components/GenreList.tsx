import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenresQuery from '../hooks/useGenresQuery';
import useGameQueryStore from '../queryStore';
import getCroppedImageUrl from '../services/image-url';


const GenerList = () => {
  // const {data, isloading, error} = useGenres();
  const {data, error, isloading} = useGenresQuery();
  const selectedGenreID = useGameQueryStore(s => s.gameQuery.genreID);
  const setGenre = useGameQueryStore(s => s.setGenre);

  if (error) return (<Text>error: {error.message}</Text>)

  return (
    <>
    {isloading? <Spinner />: null}
    
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data?.map(genre => 
      <ListItem key={genre.id} paddingY={2} onClick={() => setGenre(genre)}>
        <HStack>
            <Image boxSize="32px" borderRadius={8} objectFit="cover"
              src={getCroppedImageUrl({imageUrl: genre.image_background})}/>
            <Button whiteSpace="normal" textAlign="left" fontWeight={selectedGenreID === genre.id? "bold": "normal"} 
            fontSize="large" variant="link">{genre.name}
            </Button>
        </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenerList
