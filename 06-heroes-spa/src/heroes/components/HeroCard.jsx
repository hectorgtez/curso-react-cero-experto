import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharactersByHero = ({ alter_ego, characters }) => {
  return (alter_ego === characters)
    ? (<></>) 
    : (<p>{ characters }</p>)
}

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroImgUrl = `/src/assets/heroes/${ id }.jpg`;

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutter'>
          <div className='col-4'>
            <img
              src={ heroImgUrl }
              alt={ superhero }
              className='card-img'
            />
          </div>

          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{ superhero }</h5>
              <p className='card-text'>{ alter_ego }</p>

              <CharactersByHero
                alter_ego={ alter_ego }
                characters={ characters }
              />

              <p className='card-text'>
                <small className='text-muted'>{ first_appearance }</small>
              </p>

              <Link to={ `/hero/${ id }` }>
                More info...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CharactersByHero.propTypes = {
  alter_ego: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string,
}
