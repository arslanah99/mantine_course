import {
    Chip
  } from "@mantine/core";
import { useEffect, useState } from "react";
import UseCounterHookExample from "./useCounterHookExample";
  
  function AllHooks() {
    return (
         <div>
             <div>
            Use Counter Hook Example
             <UseCounterHookExample />
             </div>
         </div>
    );
  }
  
  export default AllHooks;