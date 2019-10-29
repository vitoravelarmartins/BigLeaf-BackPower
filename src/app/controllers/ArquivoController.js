import Arquivo from '../models/Arquivo'

class ArquivoController {
  async create(req, res) {
    const arquivo = await Arquivo.create(req.body)
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
