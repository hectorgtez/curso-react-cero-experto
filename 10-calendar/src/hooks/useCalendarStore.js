import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';
import { calendarApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(state => state.calendar);
  const { user } = useSelector(state => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  }
  
  const startSavingEvent = async (calendarEvent) => {
    try {
      // Update event
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }
      
      // Create event
      const { data } = await calendarApi.post('/events', calendarEvent);
      dispatch(onAddNewEvent({
        ...calendarEvent,
        id: data.event.id,
        user,
      }));
    } catch (error) {
      console.error(error);
      Swal.fire('Error', error.response.data.msg, 'error');
    }
  }

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${ activeEvent.id }`);
      dispatch(onDeleteEvent());
    } catch (error) {
      console.error(error);
      Swal.fire('Error', error.response.data.msg, 'error');
    }
  }

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.events);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log('Error during event loading');
      console.error(error);
    }
  }
  
  return {
    // Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    // Functions
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
  }
}
