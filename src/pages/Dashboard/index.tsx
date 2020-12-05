import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/1408208?s=460&u=74f537e9da8416a236f4d3efa07d2cf61662956e&v=4"
            alt="Derkian Afonso"
          />
          <div>
            <strong>iandark/GoStack-NodeJS-Desafio</strong>
            <p>
              Aplicação em NodeJS que permite armazenar repositórios de um
              portfólio
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/1408208?s=460&u=74f537e9da8416a236f4d3efa07d2cf61662956e&v=4"
            alt="Derkian Afonso"
          />
          <div>
            <strong>iandark/GoStack-NodeJS-Desafio</strong>
            <p>
              Aplicação em NodeJS que permite armazenar repositórios de um
              portfólio
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/1408208?s=460&u=74f537e9da8416a236f4d3efa07d2cf61662956e&v=4"
            alt="Derkian Afonso"
          />
          <div>
            <strong>iandark/GoStack-NodeJS-Desafio</strong>
            <p>
              Aplicação em NodeJS que permite armazenar repositórios de um
              portfólio
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
