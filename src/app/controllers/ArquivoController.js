import Arquivo from '../models/Arquivo'
import path from 'path'

class ArquivoController {
  async create(req, res) {
    const { loggedUser } = req

    const { file } = req

    const arquivo = await Arquivo.create({
      ...req.body,
      caminho: file.filename,
      tipo: path.extname(file.filename),
      nome: file.originalname,
      user: loggedUser._id
    })

    return res.json(arquivo)
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
