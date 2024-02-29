import React from 'react'
import Image from 'next/image'
import { randomGif } from '../../utils/randomGif'

const GifHolder = () => {
  const [num, setNum] = React.useState(() => 1)
  let randImg = `/puppy/0${num}.gif`
  return (
    <>
      <div
        onClick={() => {
          setNum(randomGif())
        }}
        className="w-auto mx-auto"
      >
        <Image src={randImg} alt="Moving Image" width={200} height={200} />
      </div>
    </>
  )
}

export default GifHolder
