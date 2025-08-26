import ItemMoto from './ItemMoto'
import ItemCarro from './ItemCarro'
import Item3 from './Item3'
import Item4 from './Item4'

function Lista() {
    return (
        <div>
            <h2> Moto </h2>
            <ul>
                <ItemMoto
                    marca_moto="Yamaha"
                    ano_lancamento="2024"
                    modelo_moto="YZF R3 ABS 2024"
                    cor_moto="Roxa metalica"
                />
            </ul>
            <h2> Carro </h2>
            <ul>
                <Item2
                    marca_moto="Suzuki"
                    ano_lancamento="2017"
                    modelo_moto="GSR 150i"
                    cor_moto="Prata"
                />
            </ul>

            <h2> seila </h2>
            <ul>
                <Item3
                    marca_moto="Honda"
                    ano_lancamento="2024"
                    modelo_moto="NC 750X "
                    cor_moto="Preta"
                />
            </ul>

            <h2> teste </h2>
            <ul>
                <Item4
                    marca_moto="Kawasaki"
                    ano_lancamento="2025"
                    modelo_moto="Z900"
                    cor_moto="Vermelha"
                />
            </ul>

        </div>
    )
}
export default Lista