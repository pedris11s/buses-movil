import React, { Component } from "react";
import { View, Container, Button, H3, Text, FooterTab, Icon, Footer, Form, Item, Label, Input, Content } from "native-base";

export default class Register extends Component {

  render() {
    return (
      <Container style={{margin: 15}}>
        <Content style={{marginTop: 100}}>
          <Form>
            <Input placeholder="Nombre" />
            <Input placeholder="Apellidos" />
            <Input placeholder="Email" />
            <Input placeholder="User" />
            <Input placeholder="Password" secureTextEntry/>
          </Form>

          <View style={{margin: 15}}>
            <Button iconLeft block dark bordered style={{ marginTop: 15 }} onPress={() => this.props.navigation.goBack()}>
              <Icon name={"person"}/>
              <Text>Register</Text>
            </Button>
          </View>

        </Content>
      </Container>
    );
  }
}
