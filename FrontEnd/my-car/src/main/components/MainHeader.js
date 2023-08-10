import { css, styled, keyframes } from 'styled-components';
import palette from '../../style/styleVariable';
import { Body4Medium, Heading3Medium } from '../../style/typo';
import BgVideo from '../assets/palisadeVideo.mp4';

const HeaderDiv = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px 0 90px;
  opacity: 1;
  z-index: 1;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoutDiv = styled.button`
  ${Heading3Medium}
  font-weight: 400;
  font-size: 14px;
  border: none;
  width: 110px;
  height: 34px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.LightSand};
  border: 1px solid ${palette.LightGray};
  color: ${palette.DarkGray};
  cursor: pointer;
  &:hover {
    color: ${palette.LightSand};
    background-color: ${palette.DarkGray};
  }
`;
const BgDiv = styled.div`
  background-color: ${palette.LightSand};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LogoDiv = styled.div`
  cursor: pointer;
  z-index: 1;
`;

function HyundaiLogoWhite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="12"
      viewBox="0 0 84 12"
      fill="none"
    >
      <g clipPath="url(#clip0_1570_5239)">
        <mask
          id="mask0_1570_5239"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="84"
          height="12"
        >
          <path d="M83.9206 0H0V11.5296H83.9206V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1570_5239)">
          <path
            d="M32.2307 1.62598V4.77821H28.6514V1.62598H26.6797V9.89986H28.6514V6.57315H32.2307V9.89986H34.2025V1.62598H34.1019H32.2307Z"
            fill="white"
          />
          <path
            d="M41.4355 1.62598L39.3719 4.90241L37.3115 1.62598H34.9844L38.389 7.03447V9.89986H40.3577V7.03447L43.7624 1.62598H43.5819H41.4355Z"
            fill="white"
          />
          <path
            d="M50.1059 1.62598V7.68797C50.1067 7.74307 50.0963 7.79777 50.0753 7.84874C50.0545 7.89974 50.0235 7.94597 49.9842 7.98466C49.9449 8.02333 49.8982 8.05367 49.8468 8.07384C49.7954 8.094 49.7406 8.10357 49.6854 8.10196H46.5264V1.62598H44.5547V9.90578H50.3811C50.6079 9.92402 50.8359 9.89289 51.0495 9.81454C51.263 9.73618 51.457 9.61245 51.618 9.45191C51.779 9.29138 51.9032 9.09785 51.982 8.88469C52.0609 8.67152 52.0924 8.44382 52.0746 8.21729V1.62598H50.1059Z"
            fill="white"
          />
          <path
            d="M59.7279 1.62697H53.8984V9.90678H55.8702V3.41896H59.0352C59.0898 3.41817 59.1442 3.42832 59.1951 3.44881C59.2459 3.46929 59.292 3.49971 59.331 3.53826C59.3699 3.57684 59.4007 3.62275 59.4215 3.67337C59.4423 3.72397 59.4529 3.77821 59.4525 3.83295V9.90086H61.4212V3.32137C61.4328 3.09553 61.3984 2.86972 61.3207 2.65736C61.2428 2.44501 61.123 2.25046 60.9684 2.08532C60.8032 1.92943 60.6081 1.80846 60.3949 1.7297C60.1817 1.65094 59.9549 1.616 59.7279 1.62697Z"
            fill="white"
          />
          <path
            d="M69.0793 1.62667H63.25V9.90648H69.0793C69.3055 9.92258 69.5323 9.88966 69.7446 9.80995C69.9568 9.73023 70.1493 9.60563 70.3086 9.44469C70.4681 9.28375 70.5908 9.09026 70.6683 8.87749C70.746 8.66474 70.7766 8.43774 70.7581 8.21208V3.32108C70.7734 3.09336 70.7418 2.86492 70.6654 2.64981C70.5891 2.4347 70.4694 2.23746 70.3139 2.07023C70.1485 1.9173 69.954 1.7992 69.7417 1.72299C69.5297 1.64678 69.3044 1.61403 69.0793 1.62667ZM68.801 3.84447V7.68867C68.8018 7.74328 68.7918 7.7975 68.7716 7.84823C68.7511 7.89895 68.7211 7.94516 68.6827 7.98419C68.6445 8.02322 68.599 8.05431 68.5485 8.07565C68.4983 8.09701 68.4442 8.1082 68.3896 8.10858H65.2187V3.41866H68.3688C68.4259 3.41574 68.4829 3.42471 68.5362 3.44501C68.5895 3.46529 68.6381 3.49646 68.6788 3.53651C68.7194 3.57656 68.7513 3.62463 68.7723 3.67765C68.7935 3.73066 68.8031 3.78748 68.801 3.84447Z"
            fill="white"
          />
          <path
            d="M74.2115 1.62713C73.9848 1.6157 73.7582 1.65044 73.5456 1.72923C73.3328 1.80803 73.1383 1.92923 72.9738 2.08547C72.8179 2.24979 72.6969 2.44413 72.6187 2.65664C72.5402 2.86914 72.506 3.09537 72.5179 3.32154V9.90102H74.4838V7.34315H78.0661V9.90102H80.0349V1.62713H74.2115ZM78.0601 3.4191V5.55116H74.478V3.84492C74.477 3.78854 74.4876 3.73256 74.509 3.68033C74.5303 3.62811 74.5619 3.58073 74.602 3.54098C74.642 3.50125 74.6897 3.46997 74.7422 3.44902C74.7946 3.42808 74.8507 3.41791 74.9072 3.4191H78.0601Z"
            fill="white"
          />
          <path
            d="M83.9249 1.62598H81.9531V9.89986H83.9249V1.62598Z"
            fill="white"
          />
          <path
            d="M11.2709 11.5326C17.4881 11.5326 22.5389 8.95105 22.5389 5.76629C22.5389 2.58152 17.4941 0 11.2709 0C5.04778 0 0 2.58152 0 5.76334C0 8.94514 5.03298 11.5326 11.2709 11.5326ZM13.3907 8.70266C13.2042 9.13439 12.8815 10.054 12.1384 10.4355C11.9025 10.5445 11.6463 10.6029 11.3864 10.607C11.3331 10.607 11.2916 10.607 11.2739 10.607C9.37081 10.6215 7.47583 10.3585 5.64878 9.82636L5.58365 9.8027C5.43561 9.75242 5.35865 9.68441 5.35865 9.59866C5.36056 9.56345 5.36967 9.52901 5.38547 9.49746C5.40125 9.46592 5.42337 9.43796 5.45043 9.41532L5.55405 9.3266C5.92116 9.01316 7.04322 8.197 9.17779 7.39268C10.0423 7.04184 10.9332 6.76005 11.8423 6.54992C12.39 6.42276 14.5068 6.09749 13.3907 8.69971V8.70266ZM19.0868 2.88906C19.1035 2.85181 19.1297 2.81975 19.1632 2.79629C19.1965 2.77286 19.2356 2.75893 19.2764 2.756C19.3607 2.75445 19.4433 2.78155 19.5102 2.83287C20.8337 3.64606 21.6182 4.66035 21.6182 5.76037C21.6182 7.75048 19.0602 9.45671 15.4009 10.196C15.1671 10.2433 15.0101 10.2403 14.9568 10.196C14.9036 10.1516 14.9095 10.0955 14.9568 10.0186C14.9847 9.96999 15.0174 9.92442 15.0545 9.88253C17.047 7.53758 18.5628 4.0778 18.9952 3.08126C19.0277 3.00143 19.0602 2.93342 19.0868 2.88906ZM9.17779 2.81514C9.36431 2.38045 9.68702 1.45192 10.4301 1.08229C10.6659 0.972906 10.9221 0.914462 11.1821 0.910778C11.2384 0.910778 11.2798 0.910778 11.2946 0.910778C13.1976 0.896927 15.0925 1.15991 16.9197 1.69145L16.9789 1.7151C17.1299 1.76537 17.2069 1.83338 17.2069 1.91913C17.2053 1.95399 17.1963 1.9881 17.1805 2.01922C17.1646 2.05033 17.1424 2.0777 17.1151 2.09953L17.0115 2.1912C16.6592 2.50463 15.5312 3.31783 13.4085 4.13989C12.5441 4.49179 11.6531 4.77459 10.7439 4.98562C10.1844 5.09504 8.06165 5.41736 9.17779 2.81514ZM7.13795 1.31886C7.3748 1.2745 7.52875 1.2745 7.585 1.31886C7.60335 1.3448 7.6132 1.3758 7.6132 1.40757C7.6132 1.43934 7.60335 1.47033 7.585 1.49628C7.5547 1.54393 7.52106 1.58938 7.48433 1.6323C5.49188 3.99205 3.97606 7.45477 3.55269 8.45428C3.52013 8.52228 3.48756 8.59029 3.46091 8.63465C3.44481 8.67245 3.41861 8.70513 3.38521 8.72912C3.35181 8.7531 3.31246 8.76747 3.27145 8.77068C3.18726 8.77068 3.10529 8.74373 3.03755 8.69379C1.71418 7.88059 0.929622 6.86336 0.929622 5.76334C0.920741 3.77618 3.47868 2.06995 7.13795 1.31886Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1570_5239">
          <rect width="83.9206" height="11.5296" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function HyundaiLogoBlack() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="12"
      viewBox="0 0 84 12"
      fill="none"
    >
      <g clipPath="url(#clip0_1570_5239)">
        <mask
          id="mask0_1570_5239"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="84"
          height="12"
        >
          <path d="M83.9206 0H0V11.5296H83.9206V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1570_5239)">
          <path
            d="M32.2307 1.62598V4.77821H28.6514V1.62598H26.6797V9.89986H28.6514V6.57315H32.2307V9.89986H34.2025V1.62598H34.1019H32.2307Z"
            fill="black"
          />
          <path
            d="M41.4355 1.62598L39.3719 4.90241L37.3115 1.62598H34.9844L38.389 7.03447V9.89986H40.3577V7.03447L43.7624 1.62598H43.5819H41.4355Z"
            fill="black"
          />
          <path
            d="M50.1059 1.62598V7.68797C50.1067 7.74307 50.0963 7.79777 50.0753 7.84874C50.0545 7.89974 50.0235 7.94597 49.9842 7.98466C49.9449 8.02333 49.8982 8.05367 49.8468 8.07384C49.7954 8.094 49.7406 8.10357 49.6854 8.10196H46.5264V1.62598H44.5547V9.90578H50.3811C50.6079 9.92402 50.8359 9.89289 51.0495 9.81454C51.263 9.73618 51.457 9.61245 51.618 9.45191C51.779 9.29138 51.9032 9.09785 51.982 8.88469C52.0609 8.67152 52.0924 8.44382 52.0746 8.21729V1.62598H50.1059Z"
            fill="black"
          />
          <path
            d="M59.7279 1.62697H53.8984V9.90678H55.8702V3.41896H59.0352C59.0898 3.41817 59.1442 3.42832 59.1951 3.44881C59.2459 3.46929 59.292 3.49971 59.331 3.53826C59.3699 3.57684 59.4007 3.62275 59.4215 3.67337C59.4423 3.72397 59.4529 3.77821 59.4525 3.83295V9.90086H61.4212V3.32137C61.4328 3.09553 61.3984 2.86972 61.3207 2.65736C61.2428 2.44501 61.123 2.25046 60.9684 2.08532C60.8032 1.92943 60.6081 1.80846 60.3949 1.7297C60.1817 1.65094 59.9549 1.616 59.7279 1.62697Z"
            fill="black"
          />
          <path
            d="M69.0793 1.62667H63.25V9.90648H69.0793C69.3055 9.92258 69.5323 9.88966 69.7446 9.80995C69.9568 9.73023 70.1493 9.60563 70.3086 9.44469C70.4681 9.28375 70.5908 9.09026 70.6683 8.87749C70.746 8.66474 70.7766 8.43774 70.7581 8.21208V3.32108C70.7734 3.09336 70.7418 2.86492 70.6654 2.64981C70.5891 2.4347 70.4694 2.23746 70.3139 2.07023C70.1485 1.9173 69.954 1.7992 69.7417 1.72299C69.5297 1.64678 69.3044 1.61403 69.0793 1.62667ZM68.801 3.84447V7.68867C68.8018 7.74328 68.7918 7.7975 68.7716 7.84823C68.7511 7.89895 68.7211 7.94516 68.6827 7.98419C68.6445 8.02322 68.599 8.05431 68.5485 8.07565C68.4983 8.09701 68.4442 8.1082 68.3896 8.10858H65.2187V3.41866H68.3688C68.4259 3.41574 68.4829 3.42471 68.5362 3.44501C68.5895 3.46529 68.6381 3.49646 68.6788 3.53651C68.7194 3.57656 68.7513 3.62463 68.7723 3.67765C68.7935 3.73066 68.8031 3.78748 68.801 3.84447Z"
            fill="black"
          />
          <path
            d="M74.2115 1.62713C73.9848 1.6157 73.7582 1.65044 73.5456 1.72923C73.3328 1.80803 73.1383 1.92923 72.9738 2.08547C72.8179 2.24979 72.6969 2.44413 72.6187 2.65664C72.5402 2.86914 72.506 3.09537 72.5179 3.32154V9.90102H74.4838V7.34315H78.0661V9.90102H80.0349V1.62713H74.2115ZM78.0601 3.4191V5.55116H74.478V3.84492C74.477 3.78854 74.4876 3.73256 74.509 3.68033C74.5303 3.62811 74.5619 3.58073 74.602 3.54098C74.642 3.50125 74.6897 3.46997 74.7422 3.44902C74.7946 3.42808 74.8507 3.41791 74.9072 3.4191H78.0601Z"
            fill="black"
          />
          <path
            d="M83.9249 1.62598H81.9531V9.89986H83.9249V1.62598Z"
            fill="black"
          />
          <path
            d="M11.2709 11.5326C17.4881 11.5326 22.5389 8.95105 22.5389 5.76629C22.5389 2.58152 17.4941 0 11.2709 0C5.04778 0 0 2.58152 0 5.76334C0 8.94514 5.03298 11.5326 11.2709 11.5326ZM13.3907 8.70266C13.2042 9.13439 12.8815 10.054 12.1384 10.4355C11.9025 10.5445 11.6463 10.6029 11.3864 10.607C11.3331 10.607 11.2916 10.607 11.2739 10.607C9.37081 10.6215 7.47583 10.3585 5.64878 9.82636L5.58365 9.8027C5.43561 9.75242 5.35865 9.68441 5.35865 9.59866C5.36056 9.56345 5.36967 9.52901 5.38547 9.49746C5.40125 9.46592 5.42337 9.43796 5.45043 9.41532L5.55405 9.3266C5.92116 9.01316 7.04322 8.197 9.17779 7.39268C10.0423 7.04184 10.9332 6.76005 11.8423 6.54992C12.39 6.42276 14.5068 6.09749 13.3907 8.69971V8.70266ZM19.0868 2.88906C19.1035 2.85181 19.1297 2.81975 19.1632 2.79629C19.1965 2.77286 19.2356 2.75893 19.2764 2.756C19.3607 2.75445 19.4433 2.78155 19.5102 2.83287C20.8337 3.64606 21.6182 4.66035 21.6182 5.76037C21.6182 7.75048 19.0602 9.45671 15.4009 10.196C15.1671 10.2433 15.0101 10.2403 14.9568 10.196C14.9036 10.1516 14.9095 10.0955 14.9568 10.0186C14.9847 9.96999 15.0174 9.92442 15.0545 9.88253C17.047 7.53758 18.5628 4.0778 18.9952 3.08126C19.0277 3.00143 19.0602 2.93342 19.0868 2.88906ZM9.17779 2.81514C9.36431 2.38045 9.68702 1.45192 10.4301 1.08229C10.6659 0.972906 10.9221 0.914462 11.1821 0.910778C11.2384 0.910778 11.2798 0.910778 11.2946 0.910778C13.1976 0.896927 15.0925 1.15991 16.9197 1.69145L16.9789 1.7151C17.1299 1.76537 17.2069 1.83338 17.2069 1.91913C17.2053 1.95399 17.1963 1.9881 17.1805 2.01922C17.1646 2.05033 17.1424 2.0777 17.1151 2.09953L17.0115 2.1912C16.6592 2.50463 15.5312 3.31783 13.4085 4.13989C12.5441 4.49179 11.6531 4.77459 10.7439 4.98562C10.1844 5.09504 8.06165 5.41736 9.17779 2.81514ZM7.13795 1.31886C7.3748 1.2745 7.52875 1.2745 7.585 1.31886C7.60335 1.3448 7.6132 1.3758 7.6132 1.40757C7.6132 1.43934 7.60335 1.47033 7.585 1.49628C7.5547 1.54393 7.52106 1.58938 7.48433 1.6323C5.49188 3.99205 3.97606 7.45477 3.55269 8.45428C3.52013 8.52228 3.48756 8.59029 3.46091 8.63465C3.44481 8.67245 3.41861 8.70513 3.38521 8.72912C3.35181 8.7531 3.31246 8.76747 3.27145 8.77068C3.18726 8.77068 3.10529 8.74373 3.03755 8.69379C1.71418 7.88059 0.929622 6.86336 0.929622 5.76334C0.920741 3.77618 3.47868 2.06995 7.13795 1.31886Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1570_5239">
          <rect width="83.9206" height="11.5296" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MainHeader() {
  return (
    <>
      <BackgroundVideo autoPlay muted loop>
        <source src={BgVideo} type="video/mp4" />
      </BackgroundVideo>
      <HeaderDiv>
        <LogoDiv>
          <HyundaiLogoWhite onClick={() => window.location.reload} />
        </LogoDiv>

        <LogoutDiv>로그아웃</LogoutDiv>
      </HeaderDiv>
    </>
  );
}

export default MainHeader;
