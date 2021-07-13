
export interface Resposta<T> {
  aviso?: string;
  resultado?: T
}

export interface Respostas<T> {
  aviso?: string;
  resultados?: Array<T>
}

export interface IProduct {
  _id?: string;
  name: string;
  categoryId: string;
  description: string;
  price: number;
  detail: string;
  image: string;
}

export interface ICategory {
  _id?: string,
  name: string,
  description: string
}