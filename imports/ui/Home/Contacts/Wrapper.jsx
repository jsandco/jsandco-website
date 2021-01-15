import styled from 'styled-components';
import colors from '/imports/commons/colors';

const ContactsWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${colors.main.yellow};
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

export default ContactsWrapper;
