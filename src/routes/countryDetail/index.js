import React, {Component} from 'react'
import api from '../../api';
import {Link} from "react-router-dom";
import CountryDetail from "../../components/CountryDetail";


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iso3 : this.props.match.params.iso3,
            detail :[],
            loading: false,
        };
    }

    componentDidMount() {
        const getCountryDetail = async () => {
            this.setState({ loading: true });
            const results = await api.get('countries/'+this.props.match.params.iso3);
            this.setState({ detail: results.data });
            this.setState({ loading: false });
        };

        getCountryDetail();
    }
    render() {
        const {detail,loading,iso3} = this.state;

        return (
            <div>
                <div className="container">
                    <h2>
                        <Link to={`/`} className='mr-3'> {'<<<'} </Link>
                        <strong>{iso3}</strong>
                    </h2>
                   <CountryDetail confirmed={detail.confirmed}
                                  recovered={detail.recovered}
                                  deaths={detail.deaths}
                                  loading={loading}/>
                </div>

            </div>
        )
    }
}

export default Detail;
