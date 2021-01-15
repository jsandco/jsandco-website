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
    .single-item-team, .single-small-item-team {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        .image {
            border: 4px solid ${colors.main.yellow};
            margin-bottom: 12px;
        }
        img {
            filter: grayscale(100%);
        }
        .sub {
            color: #f8f8f8 !important;
        }
    }
`;

export default Wrapper;
