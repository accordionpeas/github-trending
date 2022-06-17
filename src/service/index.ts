import axios from 'axios'
import { useQuery } from 'react-query'
import { getFavourites, toggleFavourite } from '../utils/favourites'
import queryClient from './query-client'
import getTimestamp from '../utils/timestamp'

const queryKey = 'repos'

type Repo = {
  id: number
  fullName: string
  url: string
  description: string
  starCount: number
  isFavourited: boolean
}

type Response = {
  items: {
    id: number
    full_name: string
    html_url: string
    description: string
    stargazers_count: number
  }[]
}

const fetchRepos = async (date: string): Promise<Repo[]> => {
  const response = await axios.get<Response>(
    `https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc`
  )

  const favourites = getFavourites()

  return response.data.items.map((item) => ({
    id: item.id,
    fullName: item.full_name,
    url: item.html_url,
    description: item.description,
    starCount: item.stargazers_count,
    isFavourited: favourites.includes(item.id),
  }))
}

export const useQueryRepos = () => {
  const timestamp = getTimestamp()

  return useQuery([queryKey, timestamp], () => fetchRepos(timestamp))
}

export const toggleQueryFavourite = (id: number, isFavourited: boolean) => {
  const timestamp = getTimestamp()
  const query = [queryKey, timestamp]
  const repos = queryClient.getQueryData<Repo[]>(query) || []

  const newRepos = repos.map((repo) => {
    if (repo.id === id) {
      return {
        ...repo,
        isFavourited,
      }
    }
    return repo
  })

  queryClient.setQueryData(query, newRepos)

  toggleFavourite(id)
}
