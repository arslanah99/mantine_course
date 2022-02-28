import {
    Chips,
    Chip
  } from "@mantine/core";
import { useEffect, useState } from "react";
  
  function ChipsExample() {
    const [value, setValue] = useState(['react']);

    useEffect(() => {
        console.log(value)
    })

    return (
         <div>
<Chips  color="red" variant="filled" spacing="lg" size="xl" radius="xs" value={value} onChange={setValue} multiple>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
         </div>
    );
  }
  
  export default ChipsExample;