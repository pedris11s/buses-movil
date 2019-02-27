import React from 'react';
import { Tabs, Tab } from 'native-base';
import ListarCoops from './listarCoops';

export default class TabsCoops extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Tabs>
                <Tab heading="Rating">
                    <ListarCoops />
                </Tab>
                <Tab heading="Peligrosidad">
                    <ListarCoops />
                </Tab>
            </Tabs>
        )
    }
}