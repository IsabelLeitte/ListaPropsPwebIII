function ItemFilme ({nome_filme, ano_lancamento, genero_filme, classificacao_indicativa}) {
    return(
        <>
            <ul> {nome_filme} - {ano_lancamento} - {genero_filme} - {classificacao_indicativa}</ul>
        </>
    )
}
export default ItemFilme