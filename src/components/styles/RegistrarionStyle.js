import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.hegiht};
  padding: ${(props) => props.padding};
  background-color: #fff;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  img {
    width: 24px;
    height: 24px;
    top: 70px;
    right: 60px;
    position: absolute;
  }
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const RediretInfo = styled(Span)`
  cursor: pointer;
  margin: 5px 0px;
`;

export const LinkInput = styled.input`
  border: 1px solid #dedede;
  width: 380px;
  height: 40px;
  border-radius: 5px;
  padding: 11px 20px;
  margin-bottom: 30px;
  font-family: 'SHSN-L';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;

  &:focus {
    outline: none;
  }
`;

export const CompleteButton = styled.button`
  width: 380px;
  height: 55px;
  background-color: #000000;
  color: #ffffff;
  font-family: 'SHSN-M';
  font-size: 19px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
`;
