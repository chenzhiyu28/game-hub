import useGameTrailerQuery from '../hooks/useGameTrailerQuery';

interface Props {
    id: number;
}

const GameTrailer = ({id}: Props) => {
  const {data: gameTrailor, error, isLoading} = useGameTrailerQuery(id.toString())
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const first = gameTrailor[0];

  if (!first) return null;

  return (
    <video 
        src={first.data[480]}
        poster={first.preview}
        controls
    />
  )
}
 
export default GameTrailer