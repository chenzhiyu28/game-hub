import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatformsQuery from "../hooks/usePlatformsQuery";
import useGameQueryStore from "../queryStore";


const PlatformSelector = () => {
  const {data, error, isLoading} = usePlatformsQuery();
  const setPlatform = useGameQueryStore(s => s.setPlatform);
  const platformName = useGameQueryStore(s => s.gameQuery.platformName)

  if (error) return <Text>{error?.message}</Text>
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{platformName? platformName:"Platforms"}</MenuButton>
      {isLoading? <Spinner />: null}
      <MenuList>
        {data?.map(platform => 
        <MenuItem key={platform.id} onClick={() => setPlatform(platform)} >
          {platform.name}
        </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector