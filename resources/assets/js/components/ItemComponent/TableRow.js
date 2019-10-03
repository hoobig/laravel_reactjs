import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import { 
    deleteItemById
}   from '../../api/itemApi';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const _this  = this;
        const objkey = _this.props.objIdx;
        event.preventDefault();
        deleteItemById(_this.props.obj.id).then(response => {
            _this.props.removeItem(objkey);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Delete" className="btn btn-danger"/>
                </form>
                </td>
            </tr>
            );
        }
    }

    export default TableRow;
