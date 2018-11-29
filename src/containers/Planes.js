// PlaneList Container Components
import { connect } from 'react-redux';
import Planes from '../components/Planes'

const mapStateToProps = state => {
  const { datagram } = state;
  return { datagram };
}

export default connect(mapStateToProps)(Planes);