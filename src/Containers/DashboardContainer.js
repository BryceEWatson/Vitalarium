import { connect } from 'react-redux';
// import DebugLog from '../Utils/DebugLog';
import Dashboard from '../Components/Dashboard/Dashboard';
// import { scrollDown, scrollUp } from '../Actions';

const mapStateToProps = (state) => {
  return {
    isLoginFailure: Boolean(state.login.isFailure),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default DashboardContainer;
