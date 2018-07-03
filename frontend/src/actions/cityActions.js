import uuid from 'uuid'

export function filterPostsCity (city) {
  return {
    type: 'FILTER_POSTS_CITY',
    city: {
      id: uuid(),
      name: city,
    }
  }
}

export function filterPostsUser (userId) {
  return {
    type: 'FILTER_POSTS_USER',
    user: {
      id: uuid(),
      ref: userId,
    }
  }
}
