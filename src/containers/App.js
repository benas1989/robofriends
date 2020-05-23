import React, {Component} from 'react';
import 'tachyons';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css'


class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            robots: [],
            searchfield: '',
            hasError: false,
            errorMessage: ''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>
        {
            response.json().then(users => 
                {
                    this.setState({robots: users.map(user => {
                        return {id: user.id, name: user.name, username: user.username, email: user.email};
                    })})
                })
        })
        .catch(error => 
            { 
                this.setState({hasError: true, errorMessage: error.message});
            })
    }

    onSearchChange = (event) =>
    {
        this.setState({searchfield: event.target.value});
    }

    render()
    {
        if(this.state.hasError)
        {
            throw new Error(this.state.errorMessage);  
        }
        const {robots, searchfield} = this.state;
        let filtered = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        return (
            <div className='tc'>
                <h1>RoboFriends :)</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    {
                        <ErrorBoundary>
                            {!robots.length ? <h1>Loading...</h1> : <CardsList items={filtered}/>}
                        </ErrorBoundary>
                    }
                </Scroll>
            </div>
        )
    }
}

export default App;