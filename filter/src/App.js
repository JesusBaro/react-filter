import React, {Component} from 'react';
class filter extends Component{

  state = {
    nomes: [
     "Jésus",
     "Eronildes",
     "Lara",
     "Gustavo",
     "Sarah",
     "Laura",
     "Guilherme",
     "João",
     "Eloisa",
    ],
    numero:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    filterList:[],
    //essanova lista será para onde os nomes lintrados irão ser guardados
    busca:"",  
}


   filtragem =() =>{
    //setState pois vamos atualizar a lista apenas com os valores filtrados
    this.setState({
        filterList: this.state.nomes.filter((item) =>
            item.includes("J")      //INCLUDES -verifica o valor inserido
            // item.length <= 6     // filtrando pelo numeoro de caracteres
        )
    });
   }

   // valores
   filtragemNum =() =>{
    //setState pois vamos atualizar a lista apenas com os valores filtrados em uma nova lista
    this.setState({
        filterList: this.state.numero.filter((item) =>  item <= 6 

        )
    });
   }

//    filtragemInput =(query) =>{
//  this.setState({
//         filterList: this.state.nomes.filter((item) =>
//             item.includes(query)
//         )
//     });
//    }
    //setState pois vamos atualizar a lista apenas com os valores filtrados

//    handleChange = (e) =>{
//     this.setState({
//         busca: e.target.value
//     })
//    } 

render(){

    return(
        <>
        <h1> Método filter </h1>
        <button onClick={this.filtragem}> Filtrando nomes com botao</button>

        <button onClick={this.filtragemNum}> Filtrando numeros com botao</button>
        <ul> 
            {this.state.filterList.map((item) =>(
          <li>{item}</li>
            ))}
        </ul>
    {/*  < input 
        placeholder="Enter Post Title"
        onChange={this.handleChange}
      
        value={this.state.busca}
       />
        <button onClick={this.filtragem}> add </button>
       <ul> 
            {this.state.nomes.map((item) =>(
          <li>{item}</li>
            ))}
        </ul> */}

        </>
    )
}
}export default filter