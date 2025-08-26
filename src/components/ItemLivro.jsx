function ItemLivro ({nome_livro, ano_lancamento, escritora_livro, classificacao_indicativa}) {
    return(
        <>
            <ul> {nome_livro} - {ano_lancamento} - {escritora_livro} - {classificacao_indicativa} </ul>
        </>
    )
}
export default ItemLivro