import Product from "./Product";
import { IProduct, Resposta, Respostas } from "./typeRespostas";


export const createProduct = async (
  newProduct: IProduct
): Promise<Resposta<IProduct>> => {
  const produto = await Product.create(newProduct);
  if (!produto) {
    return {
      aviso: "Falha ao criar produto"
    };
  }
  return {
    resultado: produto
  };
}

export const getProducts = async (): Promise<Respostas<IProduct>> => {
  const produtos = await Product.find({});
  if (!produtos) {
    return {
      aviso: "Falha carregar produtos"
    };
  }
  return {
    resultados: produtos
  };
};

export const getImageOfProduct = async (id: string): Promise<string> => {
  let produto: IProduct;
  produto = await Product.findById(id);
  if (!produto) {
    return "Produto não encontrado";
  }
  return produto.image;
};

export const deleteProduct = async (_id: string): Promise<Resposta<IProduct>> => {
  const produto = await Product.findByIdAndDelete(_id);
  if (!produto) {
    return { aviso: "Produto não encontrado." }
  }
  return {
    resultado: produto
  }
};
