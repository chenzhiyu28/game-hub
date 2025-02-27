import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../queryStore";



const SortSelector = () => {
  const setOrder = useGameQueryStore(s => s.setOrder);
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)

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
        order by: {sortOrder}
      </MenuButton>
      {false? <Spinner />: null}
      <MenuList>
        {sortOrders.map(order => 
        <MenuItem key={order.value} value={order.value} 
        onClick={() => {setOrder(order.value)}}>
          {order.label}
        </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector