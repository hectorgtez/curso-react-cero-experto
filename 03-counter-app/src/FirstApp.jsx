import PropTypes from 'prop-types';

export const FirstApp = ({ name, title, subTitle }) => {
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Héctor Gutiérrez',
  title: 'No hay título',
  subTitle: 'No hay subtítulo',
}
