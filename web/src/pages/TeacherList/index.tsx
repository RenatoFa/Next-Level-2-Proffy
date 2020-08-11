import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';




import './styles.css'
import PageHeader from '../../components/PageHeader';
import Teacheritem from '../../components/TeacherItem';


function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <PageHeader title="Estes são os proffys disponiveis">


          <form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subkect">Matéria</label>
              <input type="text" id="subject" />
            </div>

            <div className="input-block">
              <label htmlFor="week_day">Dia da semana</label>
              <input type="text" id="subject" />
            </div>

            <div className="input-block">
              <label htmlFor="Time">Hora</label>
              <input type="text" id="subject" />
            </div>

          </form>
        </PageHeader>

        <main>

          <Teacheritem/>
          <Teacheritem/>
          <Teacheritem/>
          <Teacheritem/>
          <Teacheritem/>
          <Teacheritem/>
          <Teacheritem/>
         
        </main>
      </header>
    </div>
  );
}



export default TeacherList;