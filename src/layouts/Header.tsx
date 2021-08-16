import Navi from 'layouts/Navi'
import Meta from 'layouts/Meta'

export default function Header() {
  return (
    <>
      <Meta />
      <header className="main">
        <Navi />
      </header>
    </>
  )
}
