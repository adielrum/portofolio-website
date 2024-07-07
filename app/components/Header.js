import React from 'react'

const Header = () => {
  return (
    <header className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-4xl">Adiel Rum</h1>
        </div>
        <nav className="flex text-2xl">
          <ul className="flex space-x-10">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#skills-section" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects-section" className="hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex-1 text-right border-black">
          <button className='text-sm border-black'>Contact me</button>
        </div>
      </div>
    </header>
  )
}

export default Header