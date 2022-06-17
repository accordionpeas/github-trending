import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Header from './components/header'
import HomePage from './pages/home'
import queryClient from './service/query-client'

const App = () => (
  <>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
        <HomePage />
      </ThemeProvider>
    </QueryClientProvider>
  </>
)

export default App
