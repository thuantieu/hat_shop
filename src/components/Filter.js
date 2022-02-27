import React, { Component } from 'react';


export default class Filter extends Component {
    render() {


        return (
            <div className="row">
                <div className="col-md-6">
                    <label color="brown">Price Sort
                        <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                                <option value="">Select</option>
                                <option value="lowestprice">Ascending</option>
                                <option value="highestprice">Descending</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-6">
                    <label color="brown"> Size Filter
                        <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                                <option value="">ALL</option>
                                <option value="x">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
                
                
            </div>
        )
    }
}