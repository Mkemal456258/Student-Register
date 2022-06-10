import _ from 'lodash';
import React, {Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import {connect} from 'react-redux';
import { studentsListData } from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component {
    componentDidMount(){
        this.props.studentsListData();
    }

    renderRow({item,index}){
        return <ListItem ogrenci={item} />;
    }
    render() {
        return(
            <FlatList
            data={this.props.studentsArray}
            renderItem={this.renderRow}
            keyExtractor={(item, index) => index.toString()} />
        );
    }
}
const MapStateToProps = ({StudentsDataResponse}) => {
    const studentsArray = _.map(StudentsDataResponse, (val, uid) => {
        return {...val, uid}; // {isim: 'ayşe' , soyisim: 'asdas' , sube: 'asube' , uid: 'kq9'}
    } );
    return {studentsArray};
};
export default connect(MapStateToProps,{ studentsListData }) (StudentsList);