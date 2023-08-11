import { useOutletContext } from 'react-router-dom';
import { styled } from 'styled-components';
import TrimCard from '../components/trimPage/TrimCard';
import { MYCAR } from '../../constant';
import TrimModelImg from '../components/trimPage/TrimModelImg';

export const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  /* gap: 10px; */
  margin: 27px auto;
  flex-direction: column;
`;

function Model() {
  const { trimOptions } = useOutletContext();
  return (
    <Container>
      <TrimModelImg src={trimOptions[MYCAR.TRIM.FILED.MODEL][0].image} />
      <TrimCard options={trimOptions[MYCAR.TRIM.FILED.MODEL]} />
    </Container>
  );
}
export default Model;
