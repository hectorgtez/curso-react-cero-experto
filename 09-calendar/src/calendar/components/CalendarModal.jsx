import { useMemo, useState } from 'react';

import { addHours, differenceInSeconds } from 'date-fns';
import es from 'date-fns/locale/es';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { useUiStore } from '../../hooks';

registerLocale('es', es);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    title: 'Sesión de React',
    notes: 'Sesión para el curso de React',
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const titleClass = useMemo(() => {
    if (!formSubmitted) return '';
    
    return (formValues.title.length > 0)
      ? ''
      : 'is-invalid'
  }, [formValues.title, formSubmitted])

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  }

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  }

  const onCloseModal = () => {
    closeDateModal();
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Invalid dates', 'Check the input dates', 'error');
      return;
    }

    if (formValues.title.length <= 0) return;
    console.log(formValues);
  }

  return (
    <Modal
      isOpen={ isDateModalOpen }
      onRequestClose={ onCloseModal }
      style={ customStyles }
      className='modal'
      overlayClassName='modal-background'
      closeTimeoutMS={ 200 }
    >
      <h1 className='ms-2'>New event</h1>
      <hr/>

      <form className='container' onSubmit={ onSubmit }>
        <div className='form-group d-flex flex-column mb-2'>
          <label>Start date & hour</label>
          <DatePicker
            selected={ formValues.start }
            onChange={ (event) => onDateChanged(event, 'start') }
            className='form-control mt-1'
            dateFormat='Pp'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <div className='form-group d-flex flex-column mb-2'>
          <label>End date & hour</label>
          <DatePicker
            minDate={ formValues.start }
            selected={ formValues.end }
            onChange={ (event) => onDateChanged(event, 'end') }
            className='form-control mt-1'
            dateFormat='Pp'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Title & notes</label>
          <input 
            type='text' 
            className={`form-control mt-1 ${ titleClass }`}
            placeholder='Título del evento'
            name='title'
            autoComplete='off'
            value={ formValues.title }
            onChange={ onInputChanged }
          />
          <small id='emailHelp' className='form-text text-muted'>Short description</small>
        </div>

        <div className='form-group mb-3'>
          <textarea 
            type='text' 
            className='form-control'
            placeholder='Notas'
            rows='5'
            name='notes'
            value={ formValues.notes }
            onChange={ onInputChanged }
          ></textarea>
          <small id='emailHelp' className='form-text text-muted'>Aditional information</small>
        </div>

        <button
          type='submit'
          className='btn btn-outline-primary btn-block'
        >
          <i className='far fa-save'></i>
          &nbsp;
          <span>Save</span>
        </button>
      </form>
    </Modal>
  )
}
