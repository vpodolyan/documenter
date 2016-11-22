import { connect } from 'react-redux'
import FormBody from '../components/FormBody'

const mapStateToProps = (state) => {
  return {
    doc: state.doc
  }
}

const Form = connect(
  mapStateToProps
)(FormBody)

export default Form
