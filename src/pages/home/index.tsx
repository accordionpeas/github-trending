import ActivityIndicator from '../../components/activity-indicator'
import Card from '../../components/card'
import Filters from '../../components/filters'
import Flex from '../../components/flex'
import { toggleQueryFavourite } from '../../service'
import { useRepoFilters } from './hooks'
import { StyledWrapper, StyledGrid, StyledEmptyMessage } from './styled'

const Home = () => {
  const { filters, setFilters, isLoading, data } = useRepoFilters()

  if (isLoading) {
    return (
      <Flex flex={1} justify="center" align="center">
        <ActivityIndicator />
      </Flex>
    )
  }

  return (
    <StyledWrapper>
      <Filters
        options={filters}
        onChange={(newFilters) => {
          setFilters(newFilters)
        }}
      />
      {data.length ? (
        <StyledGrid>
          {data.map(({ id, fullName, url, description, starCount, language, languageUrl, isFavourited }) => (
            <Card
              key={id}
              title={fullName}
              url={url}
              description={description}
              starCount={starCount}
              langugage={language}
              languageUrl={languageUrl}
              isFavourited={isFavourited}
              onFavouriteToggle={() => {
                toggleQueryFavourite(id, !isFavourited)
              }}
            />
          ))}
        </StyledGrid>
      ) : (
        <Flex justify="center">
          <StyledEmptyMessage>Nothing to see here</StyledEmptyMessage>
        </Flex>
      )}
    </StyledWrapper>
  )
}

export default Home
