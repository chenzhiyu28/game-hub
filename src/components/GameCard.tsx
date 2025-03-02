import { Game } from '../Entity/Game'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatFormIconList from './PlatFormIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

interface Props {
    game: Game;
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
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`} state={{id: game.id}}>
            {game.name}<Emoji rating={game.rating_top}></Emoji>
          </Link>
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
