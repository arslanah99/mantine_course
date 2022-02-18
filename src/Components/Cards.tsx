import {
    Badge,
    Button,
    Card,
    Grid,
    Group,
    Image,
    Paper,
    Text,
    useMantineTheme,
  } from "@mantine/core";
  import LightDarkButton from "./LightDarkButton";
  
  function Cards() {
    const theme = useMantineTheme();
    const secondaryColor =
      theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  
    return (
      <div className="App">
          <Grid justify="space-around" >
            <Grid.Col  style={{maxWidth: 350}} sm={4} xs={4}>
              <Card shadow="sm" padding="lg">
                <Card.Section>
                  <Image
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>
  
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>
  
                <Text
                  size="sm"
                  style={{ color: secondaryColor, lineHeight: 1.5 }}
                >
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords of
                  Norway
                </Text>
  
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                >
                  Book classic tour now
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
              <Card shadow="sm" padding="lg">
                <Card.Section>
                  <Image
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>
  
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>
  
                <Text
                  size="sm"
                  style={{ color: secondaryColor, lineHeight: 1.5 }}
                >
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords of
                  Norway
                </Text>
  
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                >
                  Book classic tour now
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
              <Card shadow="sm" padding="lg">
                <Card.Section>
                  <Image
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>
  
                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>
  
                <Text
                  size="sm"
                  style={{ color: secondaryColor, lineHeight: 1.5 }}
                >
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords of
                  Norway
                </Text>
  
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ marginTop: 14 }}
                >
                  Book classic tour now
                </Button>
              </Card>
            </Grid.Col>
          </Grid>
      </div>
    );
  }
  
  export default Cards;