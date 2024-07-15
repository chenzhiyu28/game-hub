import laughing from "../assets/laughing.webp"
import suprising from "../assets/suprising.webp"
import researching from "../assets/researching.webp"
import { Image, ImageProps } from "@chakra-ui/react"


interface Props{
    rating: number
}

const Emoji = ({rating}: Props) => {
  if (rating < 3) return null;

  const emojiMap : {[key: number]: ImageProps } = {
    3: {src: laughing, alt: "laughing", boxSize: "25px"},
    4: {src: suprising, alt: "suprising", boxSize: "25px"},
    5: {src: researching, alt: "researching", boxSize: "25px"}
  }

  return (
    <Image {...emojiMap[rating]} boxSize="25px" marginTop={1}/>
  )
}

export default Emoji