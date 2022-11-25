import {
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
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
         </div>
    );
  }
  
  export default ChipsExample;