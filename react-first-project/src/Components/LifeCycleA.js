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

    render() {
        console.log('LifecycleA render')
        return(
            <div>
        <div>LifeCycleA</div>
        <LifeCycleB / >
        </div>
        )
    }
}

export default LifeCycleA
