import RestarButton from '../components/RestarButton';
import {connect} from 'react-redux';
import {actRestar} from '../actions/actionCreators';

function mapDispatchToProps(dispatch){
    return {
        // action: (val) => {dispatch({type:"RESTAR"}) } sin actionCreator
        action: (val) => {dispatch(actRestar(val)) }
    }
}
// null -> mapStateToProps que no pasamos acá
export default connect(null, mapDispatchToProps)(RestarButton);