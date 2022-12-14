import Categoria from "./Categoria";
import User from "./User";

interface Produto {
    idProduto: number;
    nome: string;
    descricao: string;
    preco: number;
    foto_produto: string;
    categoria?: Categoria | null;
}

export default Produto;