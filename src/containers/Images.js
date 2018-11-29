// ImageList Container Components
import { connect } from 'react-redux';
import Images from '../components/Images'

const mapStateToProps = state => {
  const { datagram } = state;
  return { datagram };
}

export default connect(mapStateToProps)(Images);