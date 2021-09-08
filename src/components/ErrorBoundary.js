import React, {Component} from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    render() {

            if(this.state.hasError) {
                return <h1>Ouuups error</h1>
            }else {
                return (
                    <div>
                        {props.children}
                    </div>

                )
            }


    }


    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

}
export default ErrorBoundary