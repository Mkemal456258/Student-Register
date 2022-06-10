import React from 'react';
import {Scene, Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsCreate from './components/StudentsCreate';
import StudentsList from './components/StudentsList';
import StudentUpdate from './components/StudentUpdate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{marginTop: 65 }}>

            <Scene key='kimlik'>
                <Scene key='loginScreen' component={LoginForm} title="Giriş Ekrani"/>
            </Scene>

            <Scene key='Main'>
            <Scene
            onRight={() => Actions.StudentsCreate()}
            rightTitle='Yeni'
            key='studensList'
            component={StudentsList}
            title="Öğrenci Listesi"
            />
            <Scene
            key='StudentsCreate'
            component={StudentsCreate}
            title='Öğrenci Kaydet'
            />

            <Scene
            key='StudentUpdate'
            component={StudentUpdate}
            title='Öğrenci Güncelle'
            />
        </Scene>
    </Router>
    );
};

export default RouterComponent;