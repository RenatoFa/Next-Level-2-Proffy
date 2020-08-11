import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'



 
/*Passando propriedades para uma função :
const nome da função : ()=>{

}
 */

 interface PageHeaderProps{
     /* title ?: para title não ser obrigatori */
     title: string
 }
/* React.FC para dizer que é um componente que recebe uma props */

const PageHeader: React.FC <PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/" >

                    <img src={backIcon} alt="Voltar" />

                </Link>

                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>
                        {/*props.title para buscar a title */}
                       {props.title}
                </strong>

                {props.children}

            </div>
        </header>




    )
}

export default PageHeader;