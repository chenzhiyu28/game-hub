import { game } from '../Entity/Game'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import PlatFormIconList from './PlatFormIconList';

interface Props {
    game: game;
}

const GameCard = (game: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.game.background_image}/>
      <CardBody>
        <Heading fontSize="2xl">{game.game.name}</Heading>
        <PlatFormIconList platforms={game.game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  )
}

export default GameCard
