import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Walter'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA  getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate (){
        console.log('LifeCycle A shouldComponent update')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycle A componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'Walter White'
        })
    }
    

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB />
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA
