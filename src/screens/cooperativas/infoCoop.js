import React from 'react'

export default class InfoCoop extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
            cooperativa: [],
        }
    }
    
    render() {
        return (
            <Container>
                <Content padder>
                    <List
                        dataArray={this.state.cooperativa}
                        renderRow={coop =>
                        <ListItem>
                            <Body>
                                <Text>
                                    Nombre:
                                </Text>
                            </Body>
                            <Right>
                                <Text>
                                    {coop.nombre}
                                </Text>
                            </Right>
                        </ListItem>}
                    />
                </Content>

            </Container>
        );
    }
}


