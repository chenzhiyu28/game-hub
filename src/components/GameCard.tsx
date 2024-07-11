import { game } from '../Entity/Game'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatFormIconList from './PlatFormIconList';
import CriticScore from './CriticScore';

interface Props {
    game: game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
