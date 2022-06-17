const key = 'favourites'

export const getFavourites = (): number[] => {
  try {
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  } catch {
    return []
  }
}

export const toggleFavourite = (id: number) => {
  const favourites = getFavourites()
  const hasFavourite = favourites.includes(id)
  const newFavourites = hasFavourite ? favourites.filter((favId) => favId !== id) : [...favourites, id]

  window.localStorage.setItem(key, JSON.stringify(newFavourites))
}
