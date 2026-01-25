export interface Dica {
    id: number;
    titulo: string;
    conteudo: string | null;
    imagem_url: string | null;
    ativo: boolean;
    created_at: string;
}
