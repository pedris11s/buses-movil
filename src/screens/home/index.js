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
  Body
} from "native-base";


import ListarBuses from "../buses/listarBuses";
import GlobalHeader from "./globalHeader";
import TabsCoops from "../cooperativas/tabsCoops";
import TabsRating from "../rating/tabsRating";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: [true, false, false, false],
      index: 0, 
    };
  }

  switchScreen(index) {
    let arr = this.state.tabs;
    for(let i = 0; i < arr.length; i++)arr[i] = false;
    arr[index] = true;
    this.setState({tabs: arr, index: index});
  }

  render() {
    let AppComponent = null, text = null, iconL = "", iconR = "";
    switch (this.state.index) {
      case 0:
        AppComponent = TabsCoops;
        text = "Cooperativas"
        iconL = "home"
        iconR = "search"
        break;
      case 1:
        AppComponent = ListarBuses;
        text = "Buses"
        iconL = "bus"
        iconR = "search"
        break;
      // case 2:
      //   AppComponent = TabsRating;
      //   text = "Rating"
      //   iconL = "star"
      //   iconR = "search"
      //   break;
    }
    return (
      <Container>
        <GlobalHeader title={text} iconLeft={iconL} iconRight={iconR} />
        
        <AppComponent showSearchBox={this.state.showSearchBox}/>

        <Footer>
          <FooterTab>
            <Button active={this.state.tabs[0]} onPress={() => this.switchScreen(0)}>
              <Icon active={this.state.tabs[0]} name="home" />
            </Button>
            <Button active={this.state.tabs[1]} onPress={() => this.switchScreen(1)}>
              <Icon active={this.state.tabs[1]} name="bus" />
            </Button>
            {/* <Button active={this.state.tabs[2]} onPress={() => this.switchScreen(2)}>
              <Icon active={this.state.tabs[2]} name="star" />
            </Button> */}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
