module.exports = (sequelize, DataType) => {
  const Filme = sequelize.define('Filme', {
    id: {
      type: DataType.INTERGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataType.STRING,
      allowNull: true
    },
    tituloOriginal: {
      type: DataType.STRING,
    },
    lancamento: DataType.DATEONLY,
    paisOrigem: DataType.STRING,
    duracao: DataType.TIME,
    sinopse: DataType.TEXT,
    rate: {
      type: DataType.INTERGER,
      allowNull: true
    },
    exibicaoInicio: DataType.DATEONLY,
    exibicaoFinal: DataType.DATEONLY,
    idioma: DataType.INTERGER,
    genero: DataType.INTERGER,
    poster_url: {
      type: DataType.STRING,
      allowNull: true
    },
    trailer_url: {
      type: DataType.STRING,
      allowNull: true
    },
    classificacao: {
      type: DataType.INTERGER,
      allowNull: true
    }
  },
  {
    tableName: 'filme',
    timeStamp: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
  })
  return Filme
}