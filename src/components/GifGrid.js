import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category )

  // useEffect(() => {
  //   getGifs( category )
  //     .then( imgs => setImages( imgs )) // esto es lo mismo que si dejo solo ( setImages ) 
  // }, [category]);                               //  porque el primer argumento es el mimo que se pasa com primer arguento...

  return (
    <>
      <h3>{category}</h3>

      { loading && 'Loading' }

      <div className='card_grid'>

        {
          images.map(img =>
            <GifGridItem key={img.id} {...img} />
          )
        }

      </div>
    </>
  )
}
