import Historico from '../models/Historico'
// import path from 'path'

class HistoricoController {
  async create(req, res) {
    const { loggedUser } = req


    const historico = await Historico.create({
      ...req.body,
      user: loggedUser._id
    })

    return res.json(historico)
  }

  async list(req, res) {
    const { loggedUser: user } = req

    const historico = await Historico.find({ user })

    return res.json(historico)
  }
  async find(req, res) {
    const { loggedUser } = req
    const { user } = req.params

    const historico = await Historico.findOne(user)
    console.log(user)
    if (!historico) {
      return res.status(404).json({ message: 'Credit Card not found' })
    } else if (!historico.user.equals(loggedUser._id)) {
      return res
        .status(403)
        .json({ error: 'Your are not authorized to access this record' })
    }

    return res.json(historico)
  }

  async update(req, res) {
    const { id } = req.params

    let historico = await Historico.findById(id)

    historico = await Historico.findByIdAndUpdate(id, req.body, {
      new: true,
    })
  }
}

export default new HistoricoController()
