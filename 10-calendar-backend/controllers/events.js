const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
  try {
    const events = await Event.find().populate('user', 'name');

    return res.status(200).json({
      ok: true,
      events,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: 'An error has ocurred, speak to an administrator.'
    });
  }
}

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();

    return res.status(201).json({
      ok: true,
      event: savedEvent
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: 'An error has ocurred, speak to an administrator.'
    });
  }
}

const updateEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event ID doesn't exist.",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "Don't have permission to edit this event.",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    }

    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });

    return res.status(200).json({
      ok: true,
      evento: updatedEvent,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: 'An error has ocurred, speak to an administrator.'
    });
  }
}

const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event ID doesn't exist.",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "Don't have permission to delete this event.",
      });
    }

    const deletedEvent = await Event.findByIdAndDelete(eventId);

    return res.status(200).json({
      ok: true,
      evento: deletedEvent,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: 'An error has ocurred, speak to an administrator.'
    });
  }
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
}
