const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (req, file, done) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return done(err)

        const fileName = `${hash.toString('hex')}-${file.originalname}`

        return done(null, fileName)
      })
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: (req, file, done) => {

    return done(null, true)

  }
}
