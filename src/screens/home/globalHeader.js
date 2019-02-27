import React from 'react';
import { Button, Icon, Left, Header, Right, Body, Title } from 'native-base';

export default class GlobalHeader extends React.Component {

    constructor(props){
        super(props);
    }   

    render(){
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name={this.props.iconLeft} />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title} </Title>
                </Body>
                <Right>
                    <Button transparent > 
                        <Icon name={this.props.iconRight}/>  

                    </Button>
                </Right>
            </Header>
        )
    }
}