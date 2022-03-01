import { Input, TextInput } from "@mantine/core";
import { GitHubLogoIcon, NotionLogoIcon } from "@modulz/radix-icons";
  
  function InputExample() {
  
    return (
         <div>
                <TextInput 
                    icon={<GitHubLogoIcon />}
                    rightSection={<NotionLogoIcon />}
                    label="This is the best input field"
                    description="No this is the best description"
                    error="YOU'VE BLOODY ERRORED"
                    required
                />
                <Input 
                component="select"/>
         </div>
    );
  }
  
  export default InputExample;