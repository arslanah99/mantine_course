    import {useEffect, useState} from "react";
    import {Button} from "@mantine/core";
    import {useNotifications} from "@mantine/notifications";
    import axios from "axios";
    import {CheckIcon} from "@modulz/radix-icons";

  function NotificationExample() {
    const notifications = useNotifications();
    const [randomPlayer, setRandomPlayer] = useState({first_name: ""});

    const getPlayerName = () => {
        axios.get("https://www.balldontlie.io/api/v1/players/237")
        .then((res) => {
            setRandomPlayer(res.data);
            // notifications.notifications({
            //     message: "WE GOT YA DATA!",
            //     title: "HERES SOME DATA!",
            //     color: "green",
            //     icon: <CheckIcon />
            // })
        })
    }
    
    return (
         <div>
                <Button
                    variant="outline"
                    onClick={() => {
                        // notifications.notifications({
                        //     message: "WE ARE GETTING YOUR DATA"
                        // })
                        getPlayerName()
                    }}
                >
                    Show Data
                </Button>
                {randomPlayer.first_name}
         </div>
    );
  }
  
  export default NotificationExample;