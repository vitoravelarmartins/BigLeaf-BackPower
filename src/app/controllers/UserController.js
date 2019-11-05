import User from '../models/User'

class UserController {
  async create(req, res) {
    const { email } = req.body
    const { cpf } = req.body
    const { dataNasc } = req.body
    const { loggedUser } = req

    if (await User.findOne({ email }) || await User.findOne({ cpf })) {
      return res.status(400).json({ error: 'Ja existe um usuario cadastrado com estes dados' })
    }

    const user = await User.create(req.body)

    return res.json(user)
  }

  async list(req, res) {
    const { loggedUser: user } = req

    const users = await User.find({ user })

    return res.json(users)
  }

  async find(req, res) {
    // const { loggedUser } = req
    const { id } = req.params
    // console.log(id)
    //console.log(user)

    const user = await User.findById(id)
    //console.log(user)
    //console.log("piroca", req.params)

    if (!user) {
      return res.status(404).json({ message: 'Record not found' })
    } else if (!user.id || !id) {
      return res
        .status(403)
        .json({ error: 'Your are not authorized to access this record' })
    }

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
