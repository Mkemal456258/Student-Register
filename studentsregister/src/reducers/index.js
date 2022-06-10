import { combineReducers } from 'redux';
import KimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentsListReducers from './StudentsCreateReducers';
import StudentsDataReducers from './StudentsDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
    KimlikdogrulamaResponse: KimlikdogrulamaReducers,
    studentsListResponse: StudentsListReducers,
    StudentsDataResponse: StudentsDataReducers,
    StudentsUpdateResponse: StudentUpdateReducers

});