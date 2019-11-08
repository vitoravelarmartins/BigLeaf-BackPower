import moongose from 'mongoose'

const HistoricoSchema = moongose.Schema(
  {
    doenca: {
      type: String,
      required: true,
    },
    descricao: {
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

export default moongose.model('Historico', HistoricoSchema)
