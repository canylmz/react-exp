import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Country extends Component {
    render() {
        const { countries, loading } = this.props;
        const flagPath = 'https://www.countryflags.io/';


        if (loading) {
            return <h2>Loading...</h2>
        }

        return (
            <div>
                {countries.filter(function (country) {return !!country.iso3;}).map((country,key) => (
                    <div key={key} className="alert alert-primary ">
                        <img className={'mr-3'} src={flagPath + country.iso2 + '/flat/64.png'} alt={country.iso3}/>
                        <b className={'mr-3'}>{country.name}</b>
                        <Link className=""  to={`/countries/${country.iso3}`}>Show</Link>

                    </div>
                ))}
            </div>
        )
    }
}

export default Country
