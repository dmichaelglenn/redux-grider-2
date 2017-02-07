import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li  
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">{book.title}</li>
            );
        });
    } 
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                    {this.renderList()}
            </ul>
        )
    }
}
//importing connect and using mapStateToProps 'promotes' this component into a container

function mapStateToProps(state) {
   return {
        books: state.books
   };   
}

//anything retuned from this func will be props on BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook gets called, the result will be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}
//promote BookList to a container 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);