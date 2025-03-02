import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
    children: string;
}
// const ExpandableComponent = (text: string)  // 这里就不能这样写, 必须强调是children
const ExpandableComponent = ({children}: Props) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;
  
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>

  const summary = isExpanded? children.substring(0, limit) + "...": children;

  return (
    <Text>
        {summary}
        <Button size="xs" fontWeight="bold" colorScheme="yellow" marginLeft={1}
        onClick={() => setIsExpanded(!isExpanded)}
        >
            {isExpanded? "show more": "show less"}
        </Button>
    </Text>
  )
}

export default ExpandableComponent;