import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

function Background() {
  return (
    <div>
      <BackgroundBeamsWithCollision className=' border-t border-gray-700 mt-10'>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center  font-sans tracking-tight">
      Not Ready to Chat but Eager to?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Learn More.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Learn More.</span>
          </div>
        </div>
      </h2>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Background
