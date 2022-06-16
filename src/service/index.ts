import axios from 'axios'
import { useQuery } from 'react-query'

type Repo = {
  id: number
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
}

type Response = {
  items: Repo[]
}

const fetchRepos = async (date: string) => {
  const response = await axios.get<Response>(
    `https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc`
  )
  return response.data.items
}

const pad = (num: number): string => (num < 10 ? `0${num}` : `${num}`)

export const useQueryRepos = () => {
  const now = new Date()
  now.setDate(now.getDate() - 7)
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`

  return useQuery(['repos', date], () => fetchRepos(date))
}
