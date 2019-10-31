import User from '../models/User'

class UserController {
  async create(req, res) {
    const { email } = req.body
    const { cpf } = req.body
    const { dataNasc } = req.body

    if (await User.findOne({ email }) || await User.findOne({ cpf })) {
      return res.status(400).json({ error: 'Ja existe um usuario cadastrado com estes dados' })
    }

    const user = await User.create(req.body)

    return res.json(user)
  }

  async update(req, res) {
    const { id } = req.params
    const { tipoSanguineo } = req.params

    let user = await User.findById(id)

    user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    })
  }
}

export default new UserController()
