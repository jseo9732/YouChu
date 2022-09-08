import styled from 'styled-components';

export const RecommendContainer = styled.div`
  width: 298px;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  :last-child {
    margin-bottom: 0;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #dedede;
    margin-bottom: 0;
    margin-top: 12px;
    :first-child {
      margin-top: 0px;
    }
  }
`;

export const RecommendBox = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border-bottom: 1px solid #dedede;
  :first-child {
    border-bottom: 0;
    padding: 16px 18px 0 18px;
  }
  :last-child {
    border-bottom: 0;
  }
  @media ${(props) => props.theme.tablet} {
    border-bottom: 1px solid rgb(222, 222, 222, 0.49);
    :first-child {
      background-color: transparent;
      padding: 8px 24px 14px 24px;
    }
  }
`;

export const RecommendTitle = styled.span`
  font-family: 'SHSN-B';
  text-align: left;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
