import PropTypes from 'prop-types';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroImgUrl = `/src/assets/heroes/${ id }.jpg`;

  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutter'>
          <div className="col-4">
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

              <p>{ characters }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string,
}
