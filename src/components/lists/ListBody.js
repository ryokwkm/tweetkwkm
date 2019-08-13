import React from "react"
import PropTypes from "prop-types"

import ListItem from "@material-ui/core/ListItem/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar/Avatar"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import reactStringReplace from "react-string-replace"
import FavoriteBorder from "@material-ui/icons/FavoriteBorder"
import Cached from "@material-ui/icons/Cached"
// import FavoriteBorder from "@material-ui/core/SvgIcon/SvgIcon"
import * as window from "../../constants/window"
import styled from "styled-components"

const RowContainer = styled.div`
  position: relative;
  width: 100px;
`

class ListBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      parents: [],
      moreItemsLoading: false,
      page: 0,
      startIndex: 0,
    }
  }

  regBody = body => {
    let replacedText

    // Match URLs
    replacedText = reactStringReplace(body, /(https?:\/\/\S+)/g, (match, i) => (
      <a className={"link"} key={match + i} href={match}>
        {match}
      </a>
    ))

    // Match @-mentions
    replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
      <a
        className={"mention"}
        key={match + i}
        href={`https://twitter.com/${match}`}
      >
        @{match}
      </a>
    ))

    // Match hashtags
    replacedText = reactStringReplace(
      replacedText,
      /#([A-Za-z0-9-_ぁ-ヶ亜-黑ー]+)/g,
      (match, i) => (
        <a
          className={"hash"}
          key={match + i}
          href={`https://twitter.com/hashtag/${match}`}
        >
          #{match}
        </a>
      )
    )
    return <span>{replacedText}</span>
  }

  ListBodyNode(index) {
    let userId = this.props.items[index].user_id
    if (Number(userId) === 0) {
      userId = "1093499946609762305"
    }
    const profileImage = this.props.items[index].user_image
    const secondary = (
      <span className={"secondary"}>
        <FavoriteBorder className={"favorite"} style={{ fontSize: 15 }} />
        <span>{this.props.items[index].favorite}</span>
        <Cached className={"retweet"} style={{ fontSize: 15 }} />
        <span>{this.props.items[index].retweet}</span>
      </span>
    )
    return (
      <ListItem
        alignItems="center"
        button
        className={"InfiniteRow"}
        style={{ ...this.props.style, height: window.getListHeight() + "px" }}
      >
        <ListItemAvatar>
          <a
            href={"https://twitter.com/intent/user?user_id=" + userId}
            target={"_blank"}
          >
            <Avatar alt="Cindy Baker" src={profileImage} />
          </a>
        </ListItemAvatar>

        <ListItemText
          className={"InfiniteRowBody"}
          primary={this.regBody(this.props.items[index].body)}
          secondary={secondary}
        />
      </ListItem>
    )
  }

  render() {
    const itemLoading = this.props.index >= this.props.items.length

    if (itemLoading) {
      return (
        <RowContainer
          style={{ ...this.props.style, backgroundColor: "grey" }}
        />
      )
    } else {
      return this.ListBodyNode(this.props.index)
    }
  }
}

ListBody.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
}

export default ListBody
