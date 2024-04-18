import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Walter'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle  getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate (){
        console.log('LifeCycle B shouldComponent update')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle B getSnapshotBeforeUpdate')
        return null
    }


    componentDidUpdate(){
        console.log('LifeCycle B componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB

