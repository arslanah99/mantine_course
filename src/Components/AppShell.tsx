import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import LightAndDarkModeButton from './LightDarkButton';
import TableExample from './TableExample';

function AppShellExample() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
        <Navbar
          padding="md"
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 500, lg: 400 }}
        >
         <Navbar.Section>
             <Text>hello this is title</Text>
         </Navbar.Section>
         <Navbar.Section grow mt="lg">
            <Text>example 1</Text>
            <Text>example 2</Text>
            <Text>example 3</Text>
            <Text>example 4</Text>
         </Navbar.Section>
         <Navbar.Section>
             <Text>Footer</Text>
         </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div style={{ display: 'flex', justifyContent: "space-between"}}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
        <LightAndDarkModeButton />

          </div>
        </Header>
      }
    >
     <TableExample />
    </AppShell>
  );
}

export default AppShellExample;