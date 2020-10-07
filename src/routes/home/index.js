import React, { Component } from 'react';
import api from '../../api';

import Country from '../../components/Country';
import Pagination from '../../components/Pagination';

export class App extends Component {
    state = {
        countries: [],
        loading: false,
        currentPage: 1,
        perPage: 15
    };

    componentDidMount() {
        const getCountries = async () => {
            this.setState({ loading: true });
            const results = await api.get('countries');
            this.setState({ countries: results.data.countries });
            this.setState({ loading: false });
        };

        getCountries();
    }

    render() {
        const { currentPage, perPage, countries, loading } = this.state;

        const indexOfLastPost = currentPage * perPage;
        const indexOfFirstPost = indexOfLastPost - perPage;
        const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNum => this.setState({ currentPage: pageNum });

        const nextPage = () => this.setState({ currentPage: currentPage + 1 });

        const prevPage = () => this.setState({ currentPage: currentPage - 1 });

        return (
            <div className="container">
                <h1 className="my-5 text-primary text-center">Countries</h1>
                <Country countries={currentPosts} loading={loading} />
                <Pagination perPage={perPage}
                            totalCount={countries.length}
                            currentPage={currentPage}
                            paginate={paginate}
                            nextPage={nextPage}
                            prevPage={prevPage} />
            </div>
        )
    }
}

export default App
