import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
                default: 
                console.log("Default")
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onINC} />
                <CounterControl label="Decrement" clicked={this.props.onDEC}  />
                <CounterControl label="Add 5" clicked={this.props.onADDFIVE}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSUBFIVE}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                          <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToprops = state => {
    return {
        ctr:state.counter,
        storedResults:state.results
    }
}

const mapDispatchToprops = dispatch => {
    return {
        onINC: () => dispatch({type:"INCREMENT"}),
        onDEC: () => dispatch({type:"DECREMENT"}),
        onADDFIVE: () => dispatch({type:"ADD", payload:5}),
        onSUBFIVE: () => dispatch({type:"SUBTRACT",payload:5}),
        onStoreResult: ()=> dispatch({type:'STORE_RESULT'}),
        onDeleteResult: ()=> dispatch({type:'DELETE_RESULT'})



    }
}

export default connect(mapStateToprops, mapDispatchToprops)(Counter);