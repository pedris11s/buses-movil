import React from 'react';
import { Tabs, Tab } from 'native-base';
import ListarCoops from "../cooperativas/listarCoops";
import ListarBuses from '../buses/listarBuses';

export default class TabsRating extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <Tabs>
                <Tab heading="Cooperativas">
                    <ListarCoops />
                </Tab>
                <Tab heading="Buses">
                    <ListarBuses />
                </Tab>
            </Tabs>
        )
    }
}