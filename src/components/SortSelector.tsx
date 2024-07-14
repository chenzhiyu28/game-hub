import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { useState } from "react"
import { BsChevronDown } from "react-icons/bs"


const SortSelector = () => {
  const [selectedSelector, setSelector] = useState(" ")

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      {false? <Spinner />: null}
      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <MenuItem>4</MenuItem>
        <MenuItem>5</MenuItem>
        <MenuItem>6</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector