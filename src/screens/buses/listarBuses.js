import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Icon,
  Right,
  Body, ListItem, List
} from "native-base";

import SearchBox from '../utils/searchBox';

export default class ListarBuses extends Component {

  constructor(props){
    super(props);
    this.state = {
      buses: []
    }
  }
  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const apiCall = await fetch('http://192.168.137.1:1337/api/bus/');
      const buses = await apiCall.json();
      this.setState({buses: buses});
    } catch(err) {
      console.log("Error fetching data-----------", err);
    }
  }
  render() {
    return (
      <Container>
        <Content padder>

          <SearchBox />

          <List
            dataArray={this.state.buses}
            renderRow={bus =>
              <ListItem>
                <Body>
                <Text>
                  {bus.nobus}
                </Text>
                </Body>
                <Right>
                  <Text>
                    <Icon name="star" /> {bus.likes}
                  </Text>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}
