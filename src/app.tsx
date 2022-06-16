import { ThemeProvider } from 'styled-components'
import { QueryClientProvider, QueryClient } from 'react-query'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Header from './components/header'
import HomePage from './pages/home'

const client = new QueryClient()

const App = () => (
  <>
    <GlobalStyle />
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Header />
        <HomePage />
      </ThemeProvider>
    </QueryClientProvider>
  </>
)

export default App
