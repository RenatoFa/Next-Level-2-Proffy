import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';


// Navegação do Routes com react-routes-dom 

function Routes (){
    return(
        <BrowserRouter>

            { /* O / vai acessar o Host da landing Page , Study e Teacher 
            Lembrar para o projeto */ }
            
            <Route path= "/" exact component={Landing} />]
            <Route path= "/study"  component={TeacherList} />
            <Route path= "/give-classes"  component={TeacherForm} />
        
        
        </BrowserRouter>
    );
}

export default Routes;