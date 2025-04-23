import  FeaturedMovie  from '@/app/components/featured-movie'
import React from 'react'

function MovieContainer() {
  return (
    <FeaturedMovie movie={movie} isCompact={false} />
  )
}

export default MovieContainer