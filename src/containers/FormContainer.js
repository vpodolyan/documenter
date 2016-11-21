import { connect } from 'react-redux'
import Form from '../components/Form'

const mapStateToProps = (state) => {
  return {
    doc: state.doc
  }
}

const FormContainer = connect(
  mapStateToProps
)(Form)

export default FormContainer
