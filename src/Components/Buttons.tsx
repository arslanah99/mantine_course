
  import {Button} from "@mantine/core"
  import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { useState } from "react";

  function Buttons() {

    const [loading, setLoading] = useState(false)

    const handleClick =() => {
        setLoading(true)
    }
  
    return (
      <div className="App">
        <Button leftIcon={<SunIcon />} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} >Indigo cyan</Button>
<Button loading={loading} onClick={handleClick} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 180 }}>Lime green</Button>
<Button component="a" href="https://www.google.com" target="_blank" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 90 }}>Teal blue</Button>
<Button styles={(theme) => ({
    root: {
        border: 0,
        height: 500,
        paddingRight: 69,
        fontFamily: "monospace",
        '&:hover': {
            paddingLeft: 100
        }
    }
})} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
<Button variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>Grape pink</Button>
      </div>
    );
  }
  
  export default Buttons;