import React, {Component} from 'react';
import 'tachyons';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

import { connect} from 'react-redux';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state =>
{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component
{
    componentDidMount()
    {
        this.props.onRequestRobots();
    }

    render()
    {
        const {searchField, onSearchChange, robots, isPending, error} = this.props;
        let filtered = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    {
                        isPending ? <h1>Loading...</h1> : <CardsList items={filtered}/>
                    }
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);