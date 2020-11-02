import Contador from '../components/Contador';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        contador: state.contador
    }
}

export default connect(mapStateToProps)(Contador);