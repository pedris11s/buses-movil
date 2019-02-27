import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body, ListItem, List
} from "native-base";

export default class ListarCoops extends Component {

  constructor(props){
    super(props);
    this.state = {
      cooperativas: []
    }
  }
  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const apiCall = await fetch('http://192.168.137.1:1337/api/cooperativa/');
      const coops = await apiCall.json();
      this.setState({cooperativas: coops});
    } catch(err) {
      console.log("Error fetching data-----------", err);
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
          <List
            dataArray={this.state.cooperativas}
            renderRow={coop =>
              <ListItem>
                <Body>
                  <Text>
                    {coop.nombre}
                  </Text>
                </Body>
                <Right>
                  <Text>
                    <Icon name="star" /> {coop.likes}
                  </Text>
                </Right>
              </ListItem>}
          />
        </Content>

      </Container>
    );
  }
}
