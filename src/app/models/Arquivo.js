import moongose from 'mongoose'

const AquivoSchema = moongose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    caminho: {
      type: String,
      required: true,

    },
    tipo: {
      type: String,
      required: true,

    },
    user: {
      type: moongose.SchemaTypes.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

export default moongose.model('Arquivo', AquivoSchema)
