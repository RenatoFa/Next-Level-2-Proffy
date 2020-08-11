import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function Teacheritem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/47710460?s=460&u=67391bbafcf3caf2ea2fb588942d64d676c4b6f4&v=4" alt="Renato Ferreira de Assis" />
                <div>
                    <strong>Renato Ferreira de Assis</strong>
                    <span>Computação</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de Computação avançada
              <br /> <br />
              Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiência.
            </p>

            <footer>
                <p>
                    Preço/Hora <s /> <s />
                    <strong>R$ 20,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em Contato
              </button>

            </footer>
        </article>
    )
}

export default Teacheritem;