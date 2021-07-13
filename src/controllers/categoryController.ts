import {
  createCategory,
  deleteCategory,
  getCategories
} from "../repo/CategoryRepo";
import { ICategory, Resposta, Respostas } from "../repo/typeRespostas";

export const deleteCategoryController = async (req: any, res: any) => {
  let resposta: Resposta<ICategory>;
  try {
    resposta = await deleteCategory(req.body.id);
    if (resposta.aviso) {
      res.send(resposta.aviso);
    }
    res.send(resposta.resultado)
  } catch (ex) {
    throw ex;
  }
}

export const getCategoriesController = async (req: any, res: any) => {
  let respostas: Respostas<ICategory>;
  try {
    respostas = await getCategories();
    if (respostas.aviso) {
      res.send(respostas.aviso);
    }
    res.send(respostas.resultados);
  } catch (ex) {
    throw ex;
  }
}

export const createCategoryController = async (req: any, res: any) => {
  try {
    let resposta: Resposta<ICategory>;
    resposta = await createCategory(req.body.name, req.body.description);
    if (resposta.aviso) {
      res.send(resposta.aviso);
    }
    res.send("Categoria criada com sucesso");
  } catch (ex) {
    throw ex;
  }
}