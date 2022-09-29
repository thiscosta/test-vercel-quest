import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystem5LightTheme';
import RepoApiKeyComp from 'components/RepoApiKey/RepoApiKey';

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>RepoAPIKey</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <main>
            <RepoApiKeyComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home;
