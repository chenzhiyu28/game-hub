import { game } from '../Entity/Game'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatFormIconList from './PlatFormIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    game: game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl({imageUrl: game.background_image})}/>
      <CardBody>
        <HStack justify="space-between" marginBottom={3}>
          <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
