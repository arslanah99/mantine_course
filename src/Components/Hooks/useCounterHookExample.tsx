import {
    Button,
    Chip
  } from "@mantine/core";
import { useCounter } from "@mantine/hooks";
  
  function UseCounterHookExample() {
    const [number, options] = useCounter(0, {min: 10, max: 69})
    return (
         <div>
             {number}
             <div>
             <Button onClick={options.increment}>Increment</Button>
             <Button onClick={options.decrement}>Decrement</Button>
             <Button onClick={options.reset}>Reset</Button>
             <Button onClick={() => options.set(69)}>Set</Button>
             </div>
         </div>
    );
  }
  
  export default UseCounterHookExample;