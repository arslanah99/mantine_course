import { useEffect, useState } from "react";
// First import locale data
import 'dayjs/locale/uk';
import { TimeInput, TimeRangeInput } from "@mantine/dates";
import { GitHubLogoIcon } from "@modulz/radix-icons";
import dayjs from "dayjs";
  
  function TimeInputExample() {
      const [timeInput, setTimeInput] = useState(new Date())
      const now = new Date();
      const then = dayjs(now).add(30, 'minutes').toDate();
      const [value, setValue] = useState<[Date, Date]>([now, then]);

    useEffect(() => {
       console.log(timeInput)
    })


    return (
         <div>

             <TimeInput icon={<GitHubLogoIcon />} styles={(theme) => ({
                 icon: {
                     color: theme.colors.orange[7]
                 },
                 filledVariant: {
                     backgroundColor: theme.colors.blue[5]
                 }
             })} format="12" label="this is a label" description="this is a description" value={timeInput} onChange={setTimeInput}/>
           <TimeRangeInput 
           styles={(theme) => ({
            icon: {
                color: theme.colors.orange[7]
            },
            filledVariant: {
                backgroundColor: theme.colors.blue[5]
            }
        })}
           value={value} onChange={setValue}/>
           </div>
    );
  }
  
  export default TimeInputExample;