import Arquivo from '../models/Arquivo'
import path from 'path'
import { RSA_NO_PADDING } from 'constants'

class ArquivoController {
  async create(req, res) {
    const { loggedUser } = req

    const { file } = req

    const arquivo = await Arquivo.create({
      ...req.body,
      caminho: file.filename,
      tipo: path.extname(file.filename),
      nome: file.originalname,
      user: loggedUser._id,
    })

    return res.json(arquivo)
  }
  async list(req, res) {
    const { loggedUser: user } = req

    const arquivo = await Arquivo.find({ user })

    return res.json(arquivo)
  }

  async find(req, res) {
    const { filename } = req.params

    const f = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      filename
    )
    res.sendFile(f)
  }

  async update(req, res) {
    const { id } = req.params

    let arquivo = await Arquivo.findById(id)

    arquivo = await Arquivo.findByIdAndUpdate(id, req.body, {
      new: true,
    })
  }
}

export default new ArquivoController()
