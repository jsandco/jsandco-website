import styled from 'styled-components';
import colors from '/imports/commons/colors';

const Wrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${colors.main.black};
    .header {
        color: ${colors.main.yellow};
        .sub {
            color: #f8f8f8 !important;
        }
    }
    .js-yellow {
        background-color: ${colors.main.yellow};
        color: ${colors.main.black};
    }
`;

export default Wrapper;
