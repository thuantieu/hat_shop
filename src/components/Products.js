import React, { Component } from 'react';
import util from '../util'

import 'bootswatch/dist/cerulean/bootstrap.min.css'



export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                
                    <img id="zoom" src={`products/${product.p_code}_1.jpg`} alt={product.title} />
                
                    <p>{product.title} <br/>      
                        
                        <b>{util.formatCurrency(product.price)}</b> <br/> 
                        <a href={`products/${product.p_code}_1.jpg` } target="_blank" rel="noopener noreferrer">
                            See more
                        </a> <br/>                                    
                        <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                    </p>
                          
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )

        
    }
}
