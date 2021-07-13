import { createProduct, deleteProduct, getImageOfProduct, getProducts } from "../repo/ProductRepo";
import { IProduct, Resposta, Respostas } from "../repo/typeRespostas";
import path from "path";

export const createProductController = async (req: any, res: any) => {
  console.log(req.body);
  let resposta: Resposta<IProduct>;
  try {
    resposta = await createProduct(req.body);
    if (resposta.aviso) {
      res.send(resposta.aviso)
    }
    console.log(`objeto ref #${resposta.resultado?._id} criado com sucesso`);
    res.send(`objeto ref #${resposta.resultado?._id} criado com sucesso`);
  } catch (ex) {
    throw ex;
  }
};

export const getProductsController = async (req: any, res: any) => {
  let respostas: Respostas<IProduct>;
  try {
    respostas = await getProducts();
    if (respostas.aviso) {
      res.send(respostas.aviso);
    }
    res.send(respostas.resultados);
  } catch (ex) {
    throw ex;
  }
};

export const imageProductController = async (req: any, res: any) => {
  let imagem = "";
  try {
    imagem = await getImageOfProduct(req.params.id);
    res.sendFile(path.resolve(__dirname, "..", "images", imagem));
  } catch (ex) {
    throw ex;
  }
};

export const deleteProductController = async (req: any, res: any) => {
  console.log("DELETE PRODUCT ID", req.body.id)
  let resposta: Resposta<IProduct>;
  try {
    resposta = await deleteProduct(req.body.id);
    if (resposta.aviso) {
      res.send(resposta.aviso);
    }
    res.send(resposta.resultado)
  } catch (ex) {
    throw ex;
  }
};