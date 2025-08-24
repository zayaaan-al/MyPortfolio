import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className=' pt-16 pb-16'>
      <h1 className=' text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        A small selection of recent <br /> 
        <span className=' text-cyan-300'>projects</span>
      </h1>
      <div className=' w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
        {/* 1st project*/}
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 max-w-sm">
  {/* Project Image */}
  <Image
    src="/images/p1.jpg"
    alt="Modern Finance Dashboard UI"
    width={800}
    height={650}
    className="rounded-lg"
  />

  {/* Project Info */}
  <div className="mt-4">
    <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
      Modern Finance Dashboard UI
    </h1>
    <p className="mt-2 text-gray-600">Apps , UI/UX</p>

    {/* Demo Link */}
    <a
      href="#"
      className="inline-block mt-3 text-indigo-600 font-medium hover:underline"
    >
      Demo →
    </a>
  </div>
</div>
<div className="bg-white rounded-xl shadow-md overflow-hidden p-4 max-w-sm">
  {/* Project Image */}
  <Image
    src="/images/p2.jpg"
    alt="Modern Finance Dashboard UI"
    width={800}
    height={650}
    className="rounded-lg"
  />

  {/* Project Info */}
  <div className="mt-4">
    <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
      Modern Finance Dashboard UI
    </h1>
    <p className="mt-2 text-gray-600">Apps , UI/UX</p>

    {/* Demo Link */}
    <a
      href="#"
      className="inline-block mt-3 text-indigo-600 font-medium hover:underline"
    >
      Demo →
    </a>
  </div>
</div>
<div className="bg-white rounded-xl shadow-md overflow-hidden p-4 max-w-sm">
  {/* Project Image */}
  <Image
    src="/images/p3.jpg"
    alt="Modern Finance Dashboard UI"
    width={800}
    height={650}
    className="rounded-lg"
  />

  {/* Project Info */}
  <div className="mt-4">
    <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
      Modern Finance Dashboard UI
    </h1>
    <p className="mt-2 text-gray-600">Apps , UI/UX</p>

    {/* Demo Link */}
    <a
      href="#"
      className="inline-block mt-3 text-indigo-600 font-medium hover:underline"
    >
      Demo →
    </a>
  </div>
</div>
<div className="bg-white rounded-xl shadow-md overflow-hidden p-4 max-w-sm">
  {/* Project Image */}
  <Image
    src="/images/p4.jpg"
    alt="Modern Finance Dashboard UI"
    width={800}
    height={650}
    className="rounded-lg"
  />

  {/* Project Info */}
  <div className="mt-4">
    <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
      Modern Finance Dashboard UI
    </h1>
    <p className="mt-2 text-gray-600">Apps , UI/UX</p>

    {/* Demo Link */}
    <a
      href="#"
      className="inline-block mt-3 text-indigo-600 font-medium hover:underline"
    >
      Demo →
    </a>
  </div>
</div>

      </div>
    </div>
  )
}

export default Projects
