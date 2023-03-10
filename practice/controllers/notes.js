/**
 *  All Routes handlers are moved to a dedicated module.
 *  Event handlers of routes are commononly referred to as controllers
 *  All the routes related to notes are now in notes.js
 *  create a new Router object
 */

const notesRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')

notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({});
  response.json(notes)
})

notesRouter.get('/:id', async (request, response,) => {
  // Note.findById(request.params.id)
  //   .then(note => {
  //     if (note) {
  //       response.json(note)
  //     } else {
  //       response.status(404).end()
  //     }
  //   })
  //   .catch(error => next(error))

  // try {
  //   const note = await Note.findById(request.params.id)
  //   if (note) {
  //     response.json(note)
  //   } else {
  //     response.status(404).end()
  //   }
  // } catch(exception) {
  //   next(exception)
  // }

  const notes = await Note
    .find({}).populate('user', { username: 1, name: 1 })
  response.json(notes)
})

notesRouter.post('/', async (request, response) => {
  const body = request.body

  const user = await User.findById(body.userId)

  const note = new Note({
    content: body.content,
    important: body.important || false,
    user: user.id,
  })

  // note.save()
  //   .then(savedNote => {
  //     response.status(201).json(savedNote)
  //   })
  //   .catch(error => next(error))

  const savedNote = await note.save()
  user.notes = user.notes.concat(savedNote._id)
  await user.save()

  response.json(savedNote)
})

notesRouter.delete('/:id', async (request, response) => {
  // Note.findByIdAndRemove(request.params.id)
  //   .then(() => {
  //     response.status(204).end()
  //   })
  //   .catch(error => next(error))

  // try {
  //   await Note.findByIdAndRemove(request.params.id)
  //   response.status(204).end()
  // } catch(exception) {
  //   next(exception)
  // }

  await Note.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

notesRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

module.exports = notesRouter