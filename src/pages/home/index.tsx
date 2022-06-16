import Card from '../../components/card'
import { StyledWrapper, StyledGrid } from './styled'

const Home = () => {
  return (
    <StyledWrapper>
      <StyledGrid>
        <Card
          title="Card 1"
          url="https://google.com"
          description="Card description text"
          starCount={10}
          isFavourited={false}
        />
        <Card
          title="Card 2"
          url="https://google.com"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumt"
          starCount={15}
          isFavourited
        />
        <Card title="Card 3" url="https://google.com" description="Card description text" starCount={15} isFavourited />
        <Card title="Card 4" url="https://google.com" description="Card description text" starCount={15} isFavourited />
        <Card title="Card 5" url="https://google.com" description="Card description text" starCount={15} isFavourited />
      </StyledGrid>
    </StyledWrapper>
  )
}

export default Home
