import React from 'react';
import { Icon, Item, Input, Button } from "native-base";

export default class SearchBox extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
          <Item>
                <Icon active name="search" />
                <Input placeholder="Buscar..." />
                <Button transparent>
                    <Icon active name="close" />
                </Button>       
          </Item>
        )
    }
}