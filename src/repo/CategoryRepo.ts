import Category from "./Category";
import { ICategory, Resposta, Respostas } from "./typeRespostas";

export const createCategory = async (
  name: string, description: string
): Promise<Resposta<ICategory>> => {
  const categoria = await Category.create({
    name,
    description
  });
  if (!categoria) {
    return {
      aviso: "Falha ao criar categoria"
    };
  }
  return {
    resultado: categoria
  };
}

export const getCategories = async (): Promise<Respostas<ICategory>> => {
  const categorias = await Category.find({});
  if (!categorias) {
    return {
      aviso: "Falha carregar categories"
    };
  }
  return {
    resultados: categorias
  };
}

export const deleteCategory = async (_id: string): Promise<Resposta<ICategory>> => {
  console.log(_id);
  const categoria = await Category.findByIdAndDelete(_id);
  if (!categoria) {
    return { aviso: "Categoria não encontrada." }
  }
  console.log(categoria)
  return {
    resultado: categoria
  }
};