import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import ShopPage from './ShopPage'

const Homepage = (props) => {
   const  { data, isFetching } = props
   data.splice(18, 20)
    return ( 
    <div>
        { isFetching &&  <Spinner animation="border" variant="danger" role="status"><span className="sr-only">Loading...</span> </Spinner>  }    
        <div className="row row-cols-1 row-cols-md-3 overall-container">
            { data.map( datum => <ShopPage key={datum.id} datum={datum} />)}  
        </div>
    </div>
     );
}

const mapStateToProps = state => ({
  data : state.shop.shopData,
  isFetching : state.shop.isFetching
})
 
export default connect(mapStateToProps)(Homepage);