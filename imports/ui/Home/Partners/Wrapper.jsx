import styled from 'styled-components';
import colors from '/imports/commons/colors';

const Wrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f8f8f8;
    .three.wide.computer.eight.wide.mobile.three.wide.tablet.column.single-item {
        display: flex;
        align-items: center;
    }
    .header {
        color: ${colors.main.black};
    }
    .single-item {
        cursor: pointer;
        .sub {
            text-align: justify !important;
        }
    }
`;

export default Wrapper;
