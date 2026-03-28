import './Container.css'

function Container({ children, title }) {
  return (
    <div className="container">
      <h1 className="container-title">{title}</h1>
      <div className="container-content">{children}</div>
    </div>
  )
}

export default Container
