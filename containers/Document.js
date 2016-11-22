import { connect } from 'react-redux'
import DocumentBody from '../components/DocumentBody'

const mapStateToProps = (state) => {
  return {
    fields: state.doc
  }
}

const Document = connect(
  mapStateToProps
)(DocumentBody)

export default Document
