const path = require("path");

module.exports  = (req, res) => {
  console.log(req.body)
  let imagem = req.files.imagem;
  imagem.mv(path.resolve(__dirname, "..", "images", imagem.name));
  res.send(imagem.name)
}