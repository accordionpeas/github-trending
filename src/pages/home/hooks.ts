import { useEffect, useState } from 'react'
import { Repo, useQueryRepos } from '../../service'
import { Option } from '../../components/filters'

const filterFavouriteValue = 'favourites'

interface UseLanguageFilters {
  isSuccess: boolean
  data: Repo[]
  setFilters: (filters: Option[]) => void
  filters: Option[]
}

const useLanguageFilters = ({ isSuccess, data, setFilters, filters }: UseLanguageFilters) => {
  useEffect(() => {
    if (isSuccess) {
      const languages = data.map(({ language }) => language).filter((language): language is string => !!language)

      const uniqueLanguages = [...new Set(languages)]

      const languageFilters = uniqueLanguages.map((language) => ({
        value: language,
        label: language,
        checked: false,
      }))

      setFilters([...filters, ...languageFilters])
    }
  }, [isSuccess])
}

export const useRepoFilters = () => {
  const [filters, setFilters] = useState<Option[]>([
    {
      value: filterFavouriteValue,
      label: 'Favourites',
      checked: false,
    },
  ])

  const { data = [], isLoading, isSuccess } = useQueryRepos()

  useLanguageFilters({ isSuccess, data, setFilters, filters })

  const filterValues = filters.filter(({ checked }) => checked).map(({ value }) => value)

  const filterByFavourite = filterValues.includes(filterFavouriteValue)
  const filterByLanguage = !!filterValues.filter((value) => value !== filterFavouriteValue).length

  const filteredData = data.filter(({ language, isFavourited }) => {
    if (filterValues.length) {
      const isFavouriteMatch = filterByFavourite && isFavourited
      const isLanguageMatch = filterByLanguage && filterValues.includes(language || '')
      return isFavouriteMatch || isLanguageMatch
    }

    return true
  })

  return {
    filters,
    setFilters,
    isLoading,
    data: filteredData,
  }
}
