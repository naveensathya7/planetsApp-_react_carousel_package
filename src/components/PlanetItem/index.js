// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <div className="planet-container">
      <img className="planet-image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-desc">{description}</p>
    </div>
  )
}
export default PlanetItem
