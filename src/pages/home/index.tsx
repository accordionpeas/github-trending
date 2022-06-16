import ActivityIndicator from '../../components/activity-indicator'
import Card from '../../components/card'
import Flex from '../../components/flex'
import { useQueryRepos } from '../../service'
import { StyledWrapper, StyledGrid } from './styled'

const Home = () => {
  const { data = [], isLoading } = useQueryRepos()

  if (isLoading) {
    return (
      <Flex flex={1} justify="center" align="center">
        <ActivityIndicator />
      </Flex>
    )
  }

  return (
    <StyledWrapper>
      <StyledGrid>
        {data.map(({ id, full_name, html_url, description, stargazers_count }) => (
          <Card
            key={id}
            title={full_name}
            url={html_url}
            description={description}
            starCount={stargazers_count}
            isFavourited={false}
          />
        ))}
      </StyledGrid>
    </StyledWrapper>
  )
}

export default Home
