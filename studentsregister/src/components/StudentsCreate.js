import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {Button,Card,CardSection,Spinner} from '../ortak';
import {studentChange,StudentCreate} from '../actions';

class StudentsCreate extends Component {
    clickSave(){
        const {isim, soyisim, ogrencinumara,sube} =this.props;
        this.props.StudentCreate({isim,soyisim,ogrencinumara,sube});

    }
    renderButton(){
        if(!this.props.loading){
            return <Button onPress={this.clickSave.bind(this)}> Kaydet </Button>;
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
                        value={this.props.isim}
                        onChangeText={ isim => this.props.studentChange({props: 'isim', value: isim})}/>
            </CardSection>

           <CardSection>
               <TextInput
                        placeholder="Soyisim"
                        style={inputStyle}
                        value={this.props.soyisim}
                        onChangeText={ soyisim => this.props.studentChange({props: 'soyisim', value: soyisim})}/>
           </CardSection>   
            
            <CardSection>
               <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputStyle}
                        value={this.props.ogrencinumara}
                        onChangeText={ ogrencinumara => this.props.studentChange({props: 'ogrencinumara', value: ogrencinumara})}/>
           </CardSection>   
           <CardSection>
               <Text>Şube</Text>
                <Picker 
                    style={{flex:1}}
                    selectedValue={this.props.sube}
                    onValueChange={sube => this.props.studentChange({props: 'sube', value: sube})}>
                
                <Picker.Item label="A Şubesi" value="asube"/>
                <Picker.Item label="B Şubesi" value="bsube"/>
                <Picker.Item label="C Şubesi" value="csube"/>
                <Picker.Item label="D Şubesi" value="dsube"/>
                </Picker>
           </CardSection>
           <CardSection>
                {this.renderButton()}
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

const mapToStateProps = ({studentsListResponse}) => {
    const {isim, soyisim, ogrencinumara,sube,loading} =studentsListResponse;
    return {isim, soyisim, ogrencinumara,sube,loading};
};
export default connect(mapToStateProps, {studentChange, StudentCreate}) (StudentsCreate);