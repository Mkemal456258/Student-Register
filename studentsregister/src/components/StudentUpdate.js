import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {Button,Card,CardSection,Spinner} from '../ortak';
import {studentChange,StudentUpdate,StudentDelete} from '../actions';

class StudentsUpdate extends Component {

    state = {isim:'',soyisim:'',ogrencinumara:'',sube:''};
    componentDidMount(){
        const {isim, soyisim, ogrencinumara,sube} =this.props.student;
    this.setState({
        isim, soyisim, ogrencinumara,sube
    });
    }
    clickUpdate(){
        const {isim, soyisim, ogrencinumara,sube} =this.state;
        this.props.StudentUpdate({isim,soyisim,ogrencinumara,sube,uid: this.props.student.uid});

    }

    clickDelete(){
        this.props.StudentDelete({uid: this.props.student.uid});
    }
    renderButton(){
        if(!this.props.loadingUpdate){
            return <Button onPress={this.clickUpdate.bind(this)}> Güncelle </Button>;
        }
        return <Spinner size="small" />;
    }
    renderDeleteButton(){
        if(!this.props.loadingDelete){
            return <Button onPress={this.clickDelete.bind(this)}> Sil </Button>;
        }
        return <Spinner size="small" />;
    }
    render() {
        const {inputStyle} = styles;
        return(
            <Card>
            <CardSection>
            <TextInput
                        placeholder="İsim"
                        style={inputStyle}
                        value={this.state.isim}
                        onChangeText={ isim => this.setState({isim})}/>
            </CardSection>

           <CardSection>
               <TextInput
                        placeholder="Soyisim"
                        style={inputStyle}
                        value={this.state.soyisim}
                        onChangeText={ soyisim => this.setState({soyisim})}/>
           </CardSection>   
            
            <CardSection>
               <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputStyle}
                        value={this.state.ogrencinumara}
                        onChangeText={ ogrencinumara => this.setState({ogrencinumara})}/>
           </CardSection>   
           <CardSection>
               <Text>Şube</Text>
                <Picker 
                    style={{flex:1}}
                    selectedValue={this.state.sube}
                    onValueChange={sube => this.setState({sube})}>
                
                <Picker.Item label="A Şubesi" value="asube"/>
                <Picker.Item label="B Şubesi" value="bsube"/>
                <Picker.Item label="C Şubesi" value="csube"/>
                <Picker.Item label="D Şubesi" value="dsube"/>
                </Picker>
           </CardSection>
           <CardSection>
                {this.renderButton()}
           </CardSection>
           <CardSection>
                {this.renderDeleteButton()}
           </CardSection>
           </Card>
        );
    }
}
const styles = {
    
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize: 18,
        lineHeight: 23,
        flex:2
    },
};

const mapToStateProps = ({StudentsUpdateResponse}) => {
    const {loadingUpdate, loadingDelete} =StudentsUpdateResponse;
    return {loadingUpdate,loadingDelete};
};
export default connect(mapToStateProps, {studentChange, StudentUpdate, StudentDelete}) (StudentsUpdate);