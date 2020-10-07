import React, { Component } from 'react';
import api from '../../api';

import Country from '../../components/Country';
import Pagination from '../../components/Pagination';

export class App extends Component {
    state = {
        countries: [],
        loading: false,
        currentPage: 1,
        perPage: 15,
        filter:''
    };

    componentDidMount() {
        const getCountries = async () => {
            this.setState({ loading: true });
            const results = await api.get('countries');
            // const bla = [results.data.countries].filter(country => country.includes('T'));
            // this.setState({ countries: bla });
            this.setState({ countries: results.data.countries });
            this.setState({ loading: false });
        };

        getCountries();
    }

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { currentPage, perPage, countries, loading,filter } = this.state;

        const lowerCasedFilter = filter.toLowerCase();
        const filteredData = countries.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowerCasedFilter)
            );
        });

        const indexOfLastPost = currentPage * perPage;
        const indexOfFirstPost = indexOfLastPost - perPage;
        const currentData = filteredData.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNum => this.setState({ currentPage: pageNum });

        const nextPage = () => this.setState({ currentPage: currentPage + 1 });

        const prevPage = () => this.setState({ currentPage: currentPage - 1 });

        return (
            <div className="container">
                <h1 className="my-5 text-primary text-center">Countries</h1>
                <form>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Search</label>
                        <div className="col-sm-10">
                            <input type="text"  value={filter} onChange={this.handleChange} className="form-control"/>
                        </div>
                    </div>
                </form>

                <Country countries={currentData} loading={loading} />
                <Pagination perPage={perPage}
                            totalCount={filteredData.length}
                            currentPage={currentPage}
                            paginate={paginate}
                            nextPage={nextPage}
                            prevPage={prevPage} />
            </div>
        )
    }
}

export default App
