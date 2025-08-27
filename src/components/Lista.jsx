import ItemMoto from './ItemMoto'
import ItemCarro from './ItemCarro'
import ItemLivro from './ItemLivro'
import ItemBanda from './ItemBanda'
import ItemNotebook from './ItemNotebook'
import ItemFilme from './ItemFilme'
import ItemMusica from './ItemMusica'
import ItemAtor from './ItemAtor'
import ItemAnime from './ItemAnime'
import ItemCelular from './ItemCelular'


function Lista() {
    return (
        <div className='geral'>
            <h2> Moto </h2>
            <ul className='itens'>
                <ItemMoto
                    marca_moto="Yamaha"
                    ano_lancamento="2024"
                    modelo_moto="YZF R3 ABS 2024"
                    cor_moto="Roxa metalica"
                />
            </ul>
            <h2> Carro </h2>
            <ul className='itens'>
                <ItemCarro
                    marca_carro="Hyundai"
                    ano_lancamento="2021"
                    modelo_carro="Creta"
                    cor_carro="Branco"
                />
            </ul>

            <h2> Livro </h2>
            <ul className='itens'>
                <ItemLivro
                    nome_livro="O lado mais sombrio"
                    ano_lancamento="2014"
                    escritora_livro="A. G. Howard"
                    classificacao_indicativa="(+12 anos)"
                />
            </ul>

            <h2> Banda </h2>
            <ul className='itens'>
                <ItemBanda
                    nome_banda="BTS BangtanBoys"
                    data_debute="14/06/2014"
                    quantidade_membros="7 (sete) membros"
                    lider_banda="RM"
                />
            </ul>

            <h2> Notebook </h2>
            <ul className='itens'>
                <ItemNotebook
                    marca_notebook="Lenovo"
                    modelo_notebook="IdeaPad"
                    ano_lancamento="2023"
                    memoria_ssd="256gb"
                />
            </ul>

            <h2> Filme </h2>
            <ul className='itens'>
                <ItemFilme
                    nome_filme="Guerreiras do k-pop"
                    ano_lancamento="2025"
                    genero_filme="Musical/Ação"
                    classificacao_indicativa="(+10 anos)"
                />
            </ul>

            <h2> Musica </h2>
            <ul className='itens'>
                <ItemMusica
                    nome_musica="Talking to the moon"
                    cantor_musica="Bruno Mars"
                    ano_lancamento="2011"
                    genero_musica="Pop/R&B"
                />
            </ul>

            <h2> Ator </h2>
            <ul className='itens'> 
                <ItemAtor
                    nome_ator="Ian Somerhalder"
                    idade_ator="46 anos"
                    personagem_ator="Damon Salvatore"
                    serie_ator="Diario de um Vampiro"
                />
            </ul>

            <h2> Anime </h2>
            <ul className='itens'>
                <ItemAnime
                    nome_anime="Naruto classico"
                    classificacao_indicativa="(+12 anos)" 
                    protagonista_anime="Naruto Uzumaki" 
                    ano_lancamento="2002"  
                />
            </ul>

            <h2> Celular </h2>
            <ul className='itens'>
                <ItemCelular
                    marca_celular="Motorola"
                    modelo_celular="G30 plus"
                    cor_celular="Lílas"
                    ano_lancamento="2021"
                />
            </ul>

        </div>
    )
}
export default Lista