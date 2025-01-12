import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../Entity/Platform"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";


interface Props {platforms: Platform[];}

const PlatFormIconList = ({platforms}: Props) => {
  const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe
  }
  return (
    <HStack marginY={2.5}> 
      {platforms.map(platform => 
       <Icon as={iconMap[platform.slug]} color='gray.500' key={platform.id}/>
      )}
    </HStack>
  )
}

export default PlatFormIconList