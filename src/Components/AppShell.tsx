import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import LightAndDarkModeButton from './LightDarkButton';
import TableExample from './TableExample';
import ChipsExample from './ChipsExample';
import InputExample from './InputExample';
import TitleAndTextExample from './TextAndTitleExample';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom"
import CalendarExample from './CalendarExample';
import TimeInputExample from './TimeInputExample';
import NotificationExample from './NotificationsExample';
import EmblaCarouselExample from './EmblaCarousel';
import AllHooks from './Hooks/AllHooks';

function AppShellExample() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Router>
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
        <Navbar
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
           <div style={{display:"flex", flexDirection: "column"}}>
            <Text component={Link} variant="link" to="/">
              Home Page
            </Text>
            <Text component={Link} variant="link" to="/input">
              Input Page
            </Text>
            <Text component={Link} variant="link" to="/titlePage">
              Title Page
            </Text>
            <Text component={Link} variant="link" to="/calendarPage">
              Calendar Page
            </Text>
            <Text component={Link} variant="link" to="/timeInputPage">
              Time Input Page
            </Text>
            <Text component={Link} variant="link" to="/notificationPage">
              Notification Page
            </Text>
            <Text component={Link} variant="link" to="/emblaCarouselPage">
             Embla Carosuel Page
            </Text>
            <Text component={Link} variant="link" to="/hooksExamplePage">
             Hooks Example Page
            </Text>
           </div>
         </Navbar.Section>
         <Navbar.Section>
             <Text>Footer</Text>
         </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} >
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
      <Routes>
        <Route path="/" element={<ChipsExample />} />
        <Route path="/input" element={<InputExample />} />
        <Route path="/titlePage" element={<TitleAndTextExample />} />
        <Route path="/calendarPage" element={<CalendarExample />} />
        <Route path="/timeInputPage" element={<TimeInputExample />} />
        <Route path="/notificationPage" element={<NotificationExample />} />
        <Route path="/emblaCarouselPage" element={<EmblaCarouselExample />} />
        <Route path="/hooksExamplePage" element={<AllHooks />} />

      </Routes>
    </AppShell>
    </Router>
  );
}

export default AppShellExample;