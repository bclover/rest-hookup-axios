import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

    state = {
        dogURL: [],
    };

    fetchDog() {
        axios.get(`https://dog.ceo/api/breeds/image/random`).then(res => {
            console.log('res:', res);
            const dogURL = res.data.message;
            this.setState({dogURL: dogURL});
        });
    }

    componentDidMount() {
        this.fetchDog();
    }

    render() {
        return (
            <Fragment>
                <section>
                    <span className="header">
                        <h1 className="header__text">Check out this doggo!</h1>
                        <button
                            className="header__btn"
                            type="button"
                            onClick={() => this.fetchDog()}
                        >
                        Load a new doggo!!
                        </button>
                    </span>
                </section>
                <section>
                    <img className="dog-image"
                         src={this.state.dogURL}
                         alt="A cool doggo!"/>
                </section>
            </Fragment>
        );
    }
}

export default App;
