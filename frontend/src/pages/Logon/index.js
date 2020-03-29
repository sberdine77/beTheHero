import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero Logo"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="Heroes"/>
        </div>
    );
}