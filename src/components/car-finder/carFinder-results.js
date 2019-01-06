// Displays results of carFinderPage

import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Grid } from 'semantic-ui-react';
import "../../styles/carPages.css";

const CarFinderResults = (props) => {

    const refresh = (e) => {
        window.location.reload();
        console.log('process here ' +process.env.PUBLIC_URL)
    }

    return (
        <div className='groupItem'>
            <h3 onClick={(e) => {refresh(e)}}>New Search</h3>
            <h3>{props.displayCars.length > 0 ? 'Recommended Cars': 'No Results'}</h3>
            <div className='results'>
            <Grid stackable divided='vertically' align='center'>
            <Grid.Row columns={props.displayCars.length} >
            {
                props.displayCars.map(car => {
                    return (
                    <Grid.Column key={car}>
                        <Link to={'/cars/' + car +'s'}>
                            <Image size='small' src={require(`../../images/${car}.jpeg`)}  />
                        </Link>
                        <Header as='h3'>{car}</Header>
                    </Grid.Column>
                    )
                })
            }
            </Grid.Row>
            </Grid>
            </div>
        </div>
    );
}


export default CarFinderResults;