import React, { Component } from 'react'
import Puce from "./puce.png"
import Master_Card from "./master-card.png"
import Visa_Card from "./visa-card.jpg"
import Fleche from "./fleche.png"

export default class Card extends Component {

    manipnumber = (number) => {
        number = number.toString()
  let resultStr = ''
  for(let i =0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + ' '
  }
  return resultStr.trim()
    }
    
    manipdate = number => {
        number = number.toString()
  return number.slice(0, 2) + '/' + number.slice(2)
    }

    render() {
        return (
            <div className="cart">
                <div className="titre">
                    <h1> CREDIT CARD  </h1>
                </div>
                <div className="sous-titre">
                    <div className="gauche">
                        <div className="puce">
                            <img src={Puce}></img>
                        </div>

                        <div className="num">
                            <div className="back">
                                <p> {this.manipnumber(this.props.numbercard)} </p>
                            </div>
                        </div >
                        <div className="code-date">
                            <div className="date" >
                                <div className="p-date">
                                    <p> MM/YY</p>
                                    <h1> {this.manipdate(this.props.validcard)} </h1>
                                    <div className="">
                                        <div className="valid">
                                            <div className="thru-valid">
                                                <p> VALID </p> <p id="thru"> THRU </p>
                                            </div>
                                            <div className="image">
                                                <img src={Fleche}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nom">
                            <p>{this.props.namecard}</p>
                        </div>
                    </div>
                    <div className="droit">
                        <div className="cards">
                            <div className="master_card">
                                <img src={Master_Card}></img>
                            </div>
                            <div className="visa-card">
                                <img src={Visa_Card}></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

