import { useEffect, useState } from 'react'
import { useQueryRepos } from '../../service'
import { Option } from '../../components/filters'

const filterFavouriteValue = 'favourites'

export const useRepoFilters = () => {
  const [filters, setFilters] = useState<Option[]>([
    {
      value: filterFavouriteValue,
      label: 'Favourites',
      checked: false,
    },
  ])

  const { data = [], isLoading, isSuccess } = useQueryRepos()

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

  const filterValues = filters.filter(({ checked }) => checked).map(({ value }) => value)

  const filteredData = data.filter(({ language, isFavourited }) => {
    if (filterValues.length) {
      const filterByFavourite = filterValues.includes(filterFavouriteValue)
      const filterByLanguage = !!filterValues.filter((value) => value !== filterFavouriteValue).length

      return (filterByFavourite && isFavourited) || (filterByLanguage && filterValues.includes(language || ''))
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
