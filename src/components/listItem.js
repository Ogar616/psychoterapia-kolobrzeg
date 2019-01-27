import React, { Component } from "react";

class ListItem extends Component {
  componentDidMount() {
    // $('.rolldown-list li').each(function () {
    //   var delay = ($(this).index() / 4) + 's';
    //   $(this).css({
    //     webkitAnimationDelay: delay,
    //     mozAnimationDelay: delay,
    //     animationDelay: delay
    //   });
    // });
    
    // $('#btnReload').click(function () {
    //   $('#myList').removeClass('rolldown-list');
    //   setTimeout(function () {
    //     $('#myList').addClass('rolldown-list');
    //   }, 1);
    // });
  }
  render() {
    return (
      <li className='bg-light'>
        {/* <button
          type="button"
          className="btn btn-default"
          aria-label="Left Align"
        >
          <span className="glyphicon glyphicon-ok" aria-hidden="true" />
        </button> */}
        {this.props.text}
      </li>
    );
  }
}

export default ListItem;
