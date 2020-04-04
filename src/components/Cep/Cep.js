import React, { Component } from 'react'
import './Cep.css';

export default class Cep extends Component {

    constructor(props){
        super(props);

        this.state={
            cepRequest:"",
            cep:"",
            logradouro: "",
            complemento: "",
            bairro: "",
            localidade: "",
            uf: "",
            unidade: "",
            ibge: "",
            gia: ""
        }
        this.searchCep = this.searchCep.bind(this)
    }

    searchCep(){
        let url  = `https://viacep.com.br/ws/${this.state.cepRequest}/json/`;
        fetch(url).then(res=>{
            return res.json()
        }).then(json=>{
            let cep = json.cep;
            this.setState({cep});

            let logradouro = json.logradouro;
            this.setState({logradouro});

            let complemento = json.complemento;
            this.setState({complemento});

            let bairro = json.bairro;
            this.setState({bairro});

            let localidade = json.localidade;
            this.setState({localidade});

            let uf = json.uf;
            this.setState({uf});

            let unidade = json.unidade;
            this.setState({unidade});

            let ibge = json.ibge;
            this.setState({ibge});

            let gia = json.gia;
            this.setState({gia});
        })

    }

    render() {
        return (
            <div className="cep">
                <h2>Busca de Cep</h2>
                <input type ="text" onChange={(event)=>{this.setState({cepRequest:event.target.value })}}></input>
                <input type ="button" value="Buscar" onClick={this.searchCep}></input>

                <div className="table-container">
                    <table >
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                        <tr>
                            <td>CEP</td>
                            <td>{this.state.cep}</td>
                        </tr>
                        <tr>
                            <td>Logradouro</td>
                            <td>{this.state.logradouro}</td>
                        </tr>
                        <tr>
                            <td>Complemento</td>
                            <td>{this.state.complemento}</td>
                        </tr>                    <tr>
                            <td>Bairro</td>
                            <td>{this.state.bairro}</td>
                        </tr>                    <tr>
                            <td>Localidade</td>
                            <td>{this.state.localidade}</td>
                        </tr>                    <tr>
                            <td>UF</td>
                            <td>{this.state.uf}</td>
                        </tr>                    <tr>
                            <td>Unidade</td>
                            <td>{this.state.unidade}</td>
                        </tr>                    <tr>
                            <td>IBGE</td>
                            <td>{this.state.ibge}</td>
                        </tr>
                        <tr>
                            <td>GIA</td>
                            <td>{this.state.gia}</td>
                        </tr>
                    </table>
                </div>                   
            </div>
        )
    }
}
