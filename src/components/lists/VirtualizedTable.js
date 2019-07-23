import React from "react"
import "react-virtualized/styles.css"
import { AutoSizer, Table, Column } from "react-virtualized"

export default class VirtualizedTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [],
      monsters: this.props.monsters,
    }
  }

  render() {
    const data = this.props.monsters
    return (
      <AutoSizer>
        {({ width, height }) => {
          return (
            <Table
              rowCount={data.length}
              rowGetter={({ index }) => data[index]}
              rowHeight={30}
              width={width}
              height={height}
              headerHeight={30}
            >
              <Column
                dataKey={"number"}
                label={"No"}
                cellDataGetter={({ rowData }) => rowData.head}
                height={30}
              />
              <Column
                dataKey={"text"}
                label={"テキスト"}
                cellDataGetter={({ rowData }) => rowData.body}
                height={30}
              />
            </Table>
          )
        }}
      </AutoSizer>
    )
  }
}
