import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"

const PlatformSelector = () => {
  const {data, error} = usePlatforms();

  if (error !== " ") return <Text>{error}</Text>
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem key={platform.name}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector