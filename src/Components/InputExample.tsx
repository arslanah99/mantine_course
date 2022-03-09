import { Button, Drawer, Group, Input, TextInput, Transition } from "@mantine/core";
import { GitHubLogoIcon, NotionLogoIcon } from "@modulz/radix-icons";
import { useState } from "react";
  
  function InputExample() {
    const [opened, setOpened] = useState(false);
    const scaleY = {
      in: { opacity: 1, transform: 'scaleY(1)' },
      out: { opacity: 0, transform: 'scaleY(0)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    };
    
    return (
         <div>
                {/* <TextInput 
                    icon={<GitHubLogoIcon />}
                    rightSection={<NotionLogoIcon />}
                    label="This is the best input field"
                    description="No this is the best description"
                    error="YOU'VE BLOODY ERRORED"
                    required
                />
                <Input 
                component="select"/> */}
                    <>
                  

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
  transitionDuration={250}
  transitionTimingFunction="ease"
      >
      </Drawer>

      <Group position="center">
          {/* @ts-ignore */}
          <Transition mounted={opened} onEntered={(enter) => {
console.log(enter)
                    }} transition={scaleY} duration={200} timingFunction="ease">
          {/* @ts-ignore */}

        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
        </Transition>
      </Group>
    </>
         </div>
    );
  }
  
  export default InputExample;