import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, FooterTab, Icon, Footer, Form, Item, Label, Input, Content } from "native-base";

// const launchscreenBg = require("../../../assets/launchscreen-bg.png");
// const launchscreenLogo = require("../../../assets/logo-text.png");

class Login extends Component {

  render() {
    return (
      <Container style={{margin: 15}}>
        <Content style={{marginTop: 100}}>
          <Form>
            <Item>
              <Icon active name="person" />
              <Input placeholder="Username or email" />
            </Item>
            <Item>
              <Icon active name="key" />
              <Input placeholder="Password" secureTextEntry/>
            </Item>
          </Form>

          <View style={{margin: 15}}>
            <Button block success style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate("Home") }>
              <Text>Sign In</Text>
            </Button>

            <Button block dark bordered style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate("Register")}>
              <Text>Register</Text>
            </Button>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Button block style={{ marginBottom: 15, marginLeft: 10 }}>
              <Icon active name="logo-facebook" />
            </Button>

            <Button block danger style={{ marginBottom: 15, marginLeft: 10 }}>
              <Icon active name="logo-googleplus" />
            </Button>
            <Button block info style={{ marginBottom: 15, marginLeft: 10 }}>
              <Icon active name="logo-twitter" />
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
