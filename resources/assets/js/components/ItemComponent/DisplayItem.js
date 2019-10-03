import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';

import { 
    displayItems 
}   from '../../api/itemApi';

class DisplayItem extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount(){
        displayItems().then(response => {
            this.setState({ items: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    tabRow(){
        const _this = this;
        if(this.state.items instanceof Array){
            return this.state.items.map(function(object, i){
                return <TableRow obj={object} key={i} objIdx={i} removeItem={_this.removeItem}/>;
            })
        }
    }

    removeItem(idx) {
        this.state.items.splice(idx, 1);
        this.setState({ items: this.state.items });
    }

  render(){
    return (
      <div>
        <h1>Items</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Create Item</Link>
          </div>
        </div><br />

        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Item Name</td>
                <td>Item Price</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayItem;
