import styled from 'styled-components';

const Wrapper = styled.div`

*:not(i){
  font-family: 'Titillium Web' !important;
}

@media only screen and (max-width: 767px){
  main {
    padding-left: 0px;
  }
}

body, html {
  background-color: #F7F7F7;
}

.alignLeft, .alignLeft *{
  text-align: left !important;
}
.alignRight, .alignRight *{
  text-align: right !important;
}
.alignCenter, .alignCenter *{
  text-align: center !important;
}
.alignJustify, .alignJustify *{
  text-align: justify !important;
}
.buttonMobile {
  position: fixed;
  z-index: 150;
  top: 10px;
  left: 10px;
}
`;

export default Wrapper;
