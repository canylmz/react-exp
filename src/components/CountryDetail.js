import React, {Component} from 'react'
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export class CountryDetail extends Component {
    render() {
        const {confirmed, recovered, deaths, loading} = this.props;

        if (loading) {
            return <h2>Loading...</h2>
        }

        return (
            <div>
                <div>
                    <Button variant="info" className='p-3 m-3'>
                        Confirmed <Badge variant="light">{confirmed ? confirmed.value :''}</Badge>
                    </Button>

                    <Button variant="success" className='p-3 m-3'>
                        Recovered <Badge variant="light">{recovered ? recovered.value :''}</Badge>
                    </Button>

                    <Button variant="danger" className='p-3 m-3'>
                        Deaths <Badge variant="light">{deaths ? deaths.value :''}</Badge>
                    </Button>

                </div>
            </div>
        )
    }
}

export default CountryDetail
