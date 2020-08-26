import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Lyrics } from "./Lyrics";


const chanson = [

  {
    id : 1,
    chanteur: "Marisa Monte",
    album : "Colecao",
    src: require("../img/marisa.jpg"),
    title: [  "01.Nu Com A Minha Música (com Rodrigo Amarante e Devendra Banhart) ",
              "02.Cama ",
              "03.É Doce Morrer No Mar (com Cesária Évora)",
              "04.Carinhoso (com Paulinho da Viola) ",
              "05. Alta Noite (com Arnaldo Antunes) ",
              "06. A Primeira Pedra (ao vivo com Gustavo Santaolalla) ",
              "07. Dizem Que O Amor (com Argemiro Patrocinio) ",
              "08. Ilusão (ao vivo com Julieta Venega) ",
              "09. Esqueça ",
              "10. Chuva no Mar (com Carminho) " ],
              
  },    
  {
    id : 2,
    chanteur: "Caetano Veloso",
     album : "Homem Comum",
     src: require("../img/caetano.png"),
      title: ["01. Minha voz. Minha vida ",
              "02. Odara" ,
              "03.Quem me dera", 
              "04. Maria Bethania" ,
              "05. Minha Mulher", 
              "06. Queixa",
              "07. Itapu)",
              "08. Julia/ Moreno",
              "09. Menino do Rio",
              "10. A Tua Presença Morena " ],
   },
   {
    id : 3,
     chanteur: "Alceu valenca",
     album: "A arte de Alceu Valenca",
     src: require("../img/alceu.png"),
     title: ["01.Na Primeira Manha" ,
              "02.Que Grilo que Dá (Rock de Repente)",
              "03. Anunciação",
              "04. Rima com Rima",
              "05. Tomara",
              "06. Cabelo no Pente",
              "07. Talismã: ao Vivo",
              "08. Coração Bobo",
              "09. Esqueça",
              "10. Quando Eu Olho para o Mar "] ,
   },
   {
    id : 4,
     chanteur: "Maria mendonca",
     album: "Todos os cantos",
     src: require("../img/marilia.jpg"),
     title: [" 01.Ciumeira",
              "02.Bem Pior Que Eu",
              "03.Bye Bye" , 
              "04. Sem Sal",
              "05. Passa mal",
              "06. Bebi liguei "] ,
   },
 
   {
    id : 5,
     chanteur: "Raul seixas",
     album: "A arte de Raul Seixas",
     src: require("../img/raul.jpg"),
     title: ["01.Ouro De Tolo",
              "02.Sociedade Alternativa",
              "03.Metamorfose Ambulante",
              "04.Tente Outra Vez",
              "05. É Fim De Mês",
              "06. Gîtâ",
              "07. Al Capone",
              "08. O trem das 7 ",
              "09. Novo Aeon ",
              "10. Rock do diabo " ],
   },
   {
    id : 6,
     chanteur: "Chico Buarque",
     album: "Ao vivo Paris Le Zenith",
     src: require("../img/chico.png"),
     title: ["01.Nu Com A Minha Música (com Rodrigo Amarante e Devendra Banhart)",
              "02.Cama",
              "03.É Doce Morrer No Mar (com Cesária Évora)",
              "04.Carinhoso (com Paulinho da Viola)",
              "05. Alta Noite (com Arnaldo Antunes)",
              "06. A Primeira Pedra (ao vivo com Gustavo Santaolalla)",
              "07. Dizem Que O Amor (com Argemiro Patrocinio)",
              "08. Ilusão (ao vivo com Julieta Venega)",
              "09. Esqueça",
              "10. Chuva no Mar (com Carminho) "] ,
   },
];

export class Album extends React.Component {
  constructor(props) {
    super(props);
        this.state = {hovered: false,lyrics: false,  chansonlist : chanson };
  }
  render() {
    if (this.state.lyrics){
      var item = this.state.chansonlist.filter(l => ( l.id === this.props.id ) )[0];
      return ( <Col xl="2 ">
      <Card
               
      >

        <Card.Img variant="top " src={this.props.src}
        className="img-fluid  "
        onClick={() => this.setState({lyrics: false})}
        onMouseOut={() => this.setState({lyrics: false})}
        style={{transform: `${this.state.hovered ? 'scale(1.1,1.1)' : 'scale(1,1)'}`}}
        />
        
        <Card.Body>
            <Card.Title>{item.album}</Card.Title>
            <h4>*Albuns du Artiste*</h4>
            {item.title.map(s => (<li>{s}</li>))}           
        </Card.Body>
             

      </Card>
    </Col> )
      
    }else{
    return (
      <Col xl="2 ">
        <Card
                 
        >

          <Card.Img variant="top " src={this.props.src}
          className="img-fluid  "
          onMouseOver={() => this.setState({hovered: true})}
          onMouseOut={() => this.setState({hovered: false})}
          onClick={() => this.setState({lyrics: true})}
          
          style={{transform: `${this.state.hovered ? 'translate(20px,20px)' : 'translate(0px,0px)'}`}}
          />
          
          <Card.Body>
              <Card.Title>{this.props.chanteur}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted " > {this.props.album} </Card.Subtitle>
              
          </Card.Body>
               

        </Card>
      </Col>
      
    );
  }}
}

