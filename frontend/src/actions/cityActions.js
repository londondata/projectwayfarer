import uuid from 'uuid'

export function filterPosts (city) {
  return {
    type: 'FILTER_POSTS',
    city: {
      id: uuid(),
      name: city,
    }
  }
}
