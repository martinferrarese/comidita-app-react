import { ReactChild } from 'react'

type TypeHeader = {
  children: ReactChild
}

const Header = ({ children }: TypeHeader) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default Header
