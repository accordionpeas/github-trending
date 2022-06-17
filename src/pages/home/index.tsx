import ActivityIndicator from '../../components/activity-indicator'
import Card from '../../components/card'
import Flex from '../../components/flex'
import { useQueryRepos, toggleQueryFavourite } from '../../service'
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
        {data.map(({ id, fullName, url, description, starCount, isFavourited }) => (
          <Card
            key={id}
            title={fullName}
            url={url}
            description={description}
            starCount={starCount}
            isFavourited={isFavourited}
            onFavouriteToggle={() => {
              toggleQueryFavourite(id, !isFavourited)
            }}
          />
        ))}
      </StyledGrid>
    </StyledWrapper>
  )
}

export default Home
