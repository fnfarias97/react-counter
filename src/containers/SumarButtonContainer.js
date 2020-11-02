import SumarButton from '../components/SumarButton';
import {connect} from 'react-redux';
import {actSumar} from '../actions/actionCreators';

function mapDispatchToProps(dispatch){
    return {
        // action: (val) => {dispatch({type:"SUMAR"}) } sin actionCreator
        action: (val) => {dispatch(actSumar(val)) }
    }
}
// null -> mapStateToProps que no pasamos acá
export default connect(null, mapDispatchToProps)(SumarButton);