function ItemNotebook({marca_notebook, modelo_notebook, ano_lancamento, memoria_ssd}) {
    return (
        <>
            <ul> {marca_notebook} - {modelo_notebook} - {ano_lancamento} - {memoria_ssd} </ul>
        </>
    )
}
export default ItemNotebook