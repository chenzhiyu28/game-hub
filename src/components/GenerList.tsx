import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../Entity/Genre';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}


const GenerList = ({onSelectGenre}: Props) => {
  const {data, isLoading, error} = useGenres();

  return (
    <>
    {isLoading? <Spinner />: null}
    {error === " "? null: <Text>error: {error}</Text>}
    <List>
      {data.map(genre => 
      <ListItem key={genre.id} paddingY={2} onClick={() => onSelectGenre(genre)}>
        <HStack>
            <Image boxSize="32px" borderRadius={8} 
              src={getCroppedImageUrl({url: genre.image_background})}/>
            <Button fontSize="large" variant="link">{genre.name}</Button>
        </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenerList
