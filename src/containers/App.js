import React, {Component} from 'react'
import '../styles/App.css'
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";


class App extends Component {

    constructor() {
        super();

        this.state = {
            robots:[],
            searchFields: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchFields: event.target.value})
    }

    render() {
        const {robots, searchFields} = this.state;
        const filterRobots = robots.filter(robot=> {
            return robot.name.toLowerCase().includes(searchFields.toLowerCase())
        });
        return !robots.length ?
            <h1 className={'appTitle'}>Loading</h1>
            :
            <div>
                <h1 className={'appTitle'}>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <ErrorBoundary>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </ErrorBoundary>
            </div>

    }

}

export default App