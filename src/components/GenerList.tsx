import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../Entity/Genre';
import { useState } from 'react';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenerList = ({onSelectGenre}: Props) => {
  const {data, isLoading, error} = useGenres();
  const [selectedGenreID, setID] = useState<number>(-1);

  if (error !== " ") return (<Text>error: {error}</Text>)

  return (
    <>
    {isLoading? <Spinner />: null}
    
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map(genre => 
      <ListItem key={genre.id} paddingY={2} onClick={() => {onSelectGenre(genre); setID(genre.id)}}>
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
