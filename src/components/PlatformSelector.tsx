import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../Entity/Platform";
import usePlatformsQuery from "../hooks/usePlatformsQuery";

interface Prop {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatfrom: string | undefined;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatfrom}: Prop) => {
  // const {data, error, isLoading} = usePlatforms();
  // if (error !== " ") return <Text>{error}</Text>


  const {data, error, isLoading} = usePlatformsQuery();
  if (error) return <Text>{error?.message}</Text>

  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatfrom? selectedPlatfrom:"Platforms"}</MenuButton>
      {isLoading? <Spinner />: null}
      <MenuList>
        {data?.map(platform => 
        <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)} >
          {platform.name}
        </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector