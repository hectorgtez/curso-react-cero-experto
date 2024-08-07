import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../hooks";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components"

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr/>

      <div className="row">
        <div className='col-5'>
          <h4>Searching...</h4>
          <hr/>
          <form onSubmit={ handleSearchSubmit } aria-label='form'>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              onChange={ onInputChange }
            />

            <button
              type='submit'
              className='btn btn-outline-primary mt-1'
            >
              Search
            </button>
            
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr/>

          <div
            className='alert alert-info animate__animated animate__fadeIn'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          
          <div
            className='alert alert-danger animate__animated animate__fadeIn'
            style={{ display: showError ? '' : 'none' }}
            aria-label="alert-danger"
          >
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard
                key={ hero.id }
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
