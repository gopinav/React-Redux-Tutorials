import React from 'react'
import { connect } from 'react-redux'

function ItemContainer (props) {
  return <h2>Item - {props.item}</h2>
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
  return {
    item: itemState
  }
}

export default connect(mapStateToProps)(ItemContainer)
