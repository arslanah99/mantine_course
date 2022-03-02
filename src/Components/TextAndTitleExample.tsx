import { Text, Title } from "@mantine/core";

  
  function TitleAndTextExample() {
  
    return (
         <div>
             <Title order={2}>
                THIS IS A BIG 'OL TITLE
             </Title>
                <Text size="lg" weight={700} underline transform="capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <Text
                    variant="gradient"
                    gradient={{ from: "red", to: "blue", deg: 138}}
                    size="xl"
                >
                Deleniti aperiam tenetur exercitationem,
                </Text>
                 unde soluta laborum esse iure cupiditate error ipsum id, minima nesciunt dignissimos! Consequuntur, a? Odio nisi suscipit praesentium!</Text>
         </div>
    );
  }
  
  export default TitleAndTextExample;