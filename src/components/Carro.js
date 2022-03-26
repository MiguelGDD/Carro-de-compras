import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const style ={
    carro:{
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },

    bubble:{
        position: 'relative',
        left: '12px',
        top: '20px'
    }
}
class Carro extends Component{
    render(){
        const {carro, esCarroVidible, mostrarCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad,0)

        return(
            <div>
                <span style={style.bubble}>
                    {cantidad !== 0 ? <BubbleAlert value ={cantidad} /> : null}
                </span>
                <button onClick={mostrarCarro} style={style.carro}>
                    Carro
                </button>
                {esCarroVidible ? <DetallesCarro carro={carro}/>: null}
                
            </div>
        )
    }
}
export default Carro