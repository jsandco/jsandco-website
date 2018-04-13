import React, { Component } from "react"

//components
import { Container } from "semantic-ui-react"

class Home extends Component {
  state = {

  }
  componentDidMount(){

  }

  render(){
    const { history, isMobile } = this.props;
    const isFirstRender = history.action === "POP";
    return(
      <Container id="home">
        Hello World
      </Container>
    )
  }
}

export default Home