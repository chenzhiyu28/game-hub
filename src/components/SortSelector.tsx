import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { useState } from "react"
import { BsChevronDown } from "react-icons/bs"


interface Prop {
    onSelectSortOrder: (order: string) => void;
}

const SortSelector = ({onSelectSortOrder}: Prop) => {
  const [selectedSelector, setSelector] = useState("Relevance")

  const sortOrders = [
    {value :"", label:"Relavence"},
    {value :"name", label:"name"},
    {value :"-released", label:"Released"},
    {value :"-added", label:"added"},
    {value :"-created", label:"Create Date"},
    {value :"-rating", label:"rating"},
    {value :"-metacritic", label:"Populartiy"},
    ]

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by: {selectedSelector}
      </MenuButton>
      {false? <Spinner />: null}
      <MenuList>
        {sortOrders.map(order => 
        <MenuItem key={order.value} value={order.value} 
        onClick={() => {onSelectSortOrder(order.value); setSelector(order.label)}}>
          {order.label}
        </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector