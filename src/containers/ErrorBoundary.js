import React, {Component} from 'react';


class ErrorBoundary extends Component {
    constructor (props)
    {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ''
        }
    }

    componentDidCatch(props)
    {
        this.setState({hasError: true, errorMessage: props.message})
    }

    render(props)
    {
        if(this.state.hasError)
        {
            return (
            <div className='tc'>
                <h1>Ops some error!</h1>
                <p>{this.state.errorMessage}</p>
            </div>)
        }
        return this.props.children; 
    }
}

export default ErrorBoundary;