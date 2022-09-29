import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystem5LightTheme';
import Frame10Comp from 'components/Frame10/Frame10';

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <main>
            <Frame10Comp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home;
