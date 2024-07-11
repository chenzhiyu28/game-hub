import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';


const GenerList = () => {
  const {data} = useGenres();

  return (
    <List>
      {data.map(genre => 
      <ListItem key={genre.id} paddingY={2}>
        <HStack>
            <Image boxSize="32px" borderRadius={8} 
              src={getCroppedImageUrl({url: genre.image_background})}/>
            <Text fontSize="large">{genre.name}</Text>
        </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenerList