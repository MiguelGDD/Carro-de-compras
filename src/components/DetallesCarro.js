import { Component } from "react";
const style={
    detallescarro:{
        backgroundColor : '#fff',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        boderRadius: '5px',
        width: '300px',
        right: 50
    },

    ul:{
        margin: 0,
        padding: 0,
    },

    li:{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}
 class DetallesCarro extends Component{
    render(){
        const { carro }= this.props
        return(
            <div style={style.detallescarro}>
                <ul style={style.ul}>
                    {carro.map(x => <li style={style.li} key={x.name}><img alt={x.name} src={x.img} width='50' height='32'></img> {x.name} <span>{x.cantidad}</span></li>)}
                </ul>
            </div>
        )
    }
 }
 export default DetallesCarro