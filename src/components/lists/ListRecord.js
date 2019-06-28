import React from "react"
// import PropTypes from "prop-types"
class ListRecord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // const list = this.ListNode()
    return (
      <table>
        <thead>
          <tr>
            <th>見出し1</th>
            <th>見出し2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>内容1</td>
            <td>内容2</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>フッタセル1</td>
            <td>フッタセル2</td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

// ListRecord.propTypes = {
//   classes: PropTypes.object.isRequired,
//   monsters: PropTypes.array.isRequired,
// }

export default ListRecord
