import styled from 'styled-components';
import colors from '/imports/commons/colors';

const Wrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f8f8f8;
    .header {
        color: ${colors.main.black};
    }
    .single-item {
        .sub {
            text-align: justify !important;
        }
    }
`;

export default Wrapper;
