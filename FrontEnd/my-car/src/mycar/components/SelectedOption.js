import { css, styled } from 'styled-components';
import palette from '../../style/styleVariable';
import {
  Body3Medium,
  Body3Regular,
  Heading1Medium,
  Heading4Medium,
} from '../../style/typo';
import { useOutletContext } from 'react-router-dom';
import OptionCard, {
  CardDetailWrap,
  CardsWrap,
  DimmedOverlay,
} from './OptionCard';
const BgDiv = styled.div`
  width: 1024px;
  align-items: center;
  margin: 30px auto;
`;

const NothingDiv = styled.div`
  width: 1024px;
  align-items: center;
  margin: 30px auto;
`;

const NothingTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  background-color: ${palette.LightSand};
  border-radius: 12px;
  width: 1024px;
  height: 100px;
`;

const NothingText = styled.span`
  ${Heading4Medium}
  display: flex;
  justify-content: start;
`;

const SelectedOptionTitle = styled.span`
  ${Heading1Medium}
  padding-bottom: 15px;
`;

const SelectedNumPoint = styled.span`
  padding: 0 10px;
  color: ${palette.Gold};
`;

const OptionsDiv = styled.div`
  padding-top: 20px;
`;
const CardTitleText = styled.span`
  ${Body3Medium}
  padding: 8px 0;
`;
const CardPriceText = styled.span`
  ${Body3Regular}
  padding-bottom: 6px;
`;
const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewCardsWrap = styled(CardsWrap)`
  width: 100%;
  overflow-x: scroll;
  flex: auto;
  &::-webkit-scrollbar {
    height: 9px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 1px;
    background: ${palette.Sand};
  }
`;

const Card = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  box-sizing: border-box;
  background-color: ${palette.LightSand};
`;

const CardImg = styled.img`
  width: 200px;
  height: 120px;
`;

function SelectedOption() {
  const { userCar } = useOutletContext();
  if (userCar.selectedOptions.length > 0) {
    return (
      <BgDiv>
        <SelectedOptionTitle>
          선택 옵션
          <SelectedNumPoint>{userCar.selectedOptions.length}</SelectedNumPoint>
          개
        </SelectedOptionTitle>
        <OptionsDiv>
          <NewCardsWrap>
            {userCar.selectedOptions.length >= 0 &&
              userCar.selectedOptions.map((elem) => {
                return (
                  <Card>
                    <CardImg></CardImg>
                    <DetailWrap>
                      <CardTitleText>{elem.name}</CardTitleText>
                      <CardPriceText>{elem.price}원</CardPriceText>
                    </DetailWrap>
                  </Card>
                );
              })}
          </NewCardsWrap>
        </OptionsDiv>
      </BgDiv>
    );
  } else {
    return (
      <NothingDiv>
        <SelectedOptionTitle>
          선택 옵션
          <SelectedNumPoint>{userCar.selectedOptions.length}</SelectedNumPoint>
          개
        </SelectedOptionTitle>
        <NothingTextDiv>
          <NothingText>추가한 옵션이 없습니다</NothingText>
        </NothingTextDiv>
      </NothingDiv>
    );
  }
}

export default SelectedOption;
