import React from 'react';
import styled from 'styled-components';
import { GiWineBottle, GiGrapes } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';
import { GrDeliver } from 'react-icons/gr';
import { BiCommentCheck } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <Container>
      <FooterSection>
        <UpperSection>
          <UpTitle>
            <h1>
              Old Vintage is trusted by worldwide to discover and buy the right
              wine every time.
            </h1>
          </UpTitle>
          <UpText>
            {upText.map(list => (
              <Text key={list.key}>
                <div>{list.logo}</div>
                <span>{list.description}</span>
              </Text>
            ))}
          </UpText>
        </UpperSection>
        <BottomSection>
          <BotUpSection>
            <AppleGoogle>
              <div>
                <img alt="app-store" src="/images/footer/app-store.png" />
              </div>
              <div>
                <img alt="google-play" src="/images/footer/google-play.png" />
              </div>
            </AppleGoogle>
            <Payments>
              <Logos>
                {LOGO_IMAGE.map(list => (
                  <div key={list.key}>
                    <img alt={list.alt} src={list.image} />
                  </div>
                ))}
              </Logos>
              <span>Payment options will vary by merchant</span>
            </Payments>
          </BotUpSection>
          <BotDownSection>
            <LogoMenu>
              <div>
                <GiGrapes size="30" color="#800080" />
              </div>
              <Menu>
                <MenusUp>
                  {MENUS.map(list => (
                    <MenuList key={list.key}>{list.menuname}</MenuList>
                  ))}
                </MenusUp>
                <MenusDown>
                  <span>
                    This Website is build for Clone Coding Project of Wecode
                  </span>
                </MenusDown>
              </Menu>
            </LogoMenu>

            <SocialCopyright>
              <Social>
                <div>
                  <AiOutlineInstagram size="30" />
                </div>
                <div>
                  <FiFacebook size="30" />
                </div>
                <div>
                  <FiTwitter size="30" />
                </div>
              </Social>
              <span>ⓒ Old Vintage 2022</span>
            </SocialCopyright>
          </BotDownSection>
        </BottomSection>
      </FooterSection>
    </Container>
  );
};

export default Footer;

const upText = [
  {
    key: 1,
    logo: <GiWineBottle size={48} />,
    description: 'Shop the worlds largest wine marketplace',
  },
  {
    key: 2,
    logo: <MdSupportAgent size={48} />,
    description: 'Our support team is always here to help',
  },
  {
    key: 3,
    logo: <GrDeliver size={48} />,
    description: 'Careful delivery right to your doorstep',
  },
  {
    key: 4,
    logo: <BiCommentCheck size={48} />,
    description: 'Check honest reviews of any wine before purchase',
  },
];

const LOGO_IMAGE = [
  {
    key: 1,
    alt: 'visa',
    image: '/images/footer/visa.png',
  },
  {
    key: 2,
    alt: 'mastercard',
    image: '/images/footer/master-card.png',
  },
  {
    key: 3,
    alt: 'applepay',
    image: '/images/footer/apple-pay.png',
  },
  {
    key: 4,
    alt: 'googlepay',
    image: '/images/footer/google-pay.png',
  },
  {
    key: 5,
    alt: 'paypal',
    image: '/images/footer/paypal.png',
  },
];

const MENUS = [
  { key: 1, menuname: 'App' },
  { key: 2, menuname: 'About' },
  { key: 3, menuname: 'Contact' },
  { key: 4, menuname: 'Press' },
  { key: 5, menuname: 'Wine News' },
  { key: 6, menuname: 'Wine Style Awards' },
  { key: 7, menuname: 'Merchants' },
  { key: 8, menuname: 'Sponsorship' },
  { key: 9, menuname: 'Become an Affiliate' },
  { key: 10, menuname: 'Minsu' },
  { key: 11, menuname: 'Careers' },
  { key: 12, menuname: 'Privacy Policy' },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.grey};
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 68px 156px 120px 156px;
  height: 265px;
  background-color: #f7f3f0;
`;

const UpTitle = styled.div`
  h1 {
    font-size: 35px;
  }
`;

const UpText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Text = styled.div`
  display: flex;
  div {
    margin-right: 15px;
  }
  span {
    font-size: 20px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px 156px 75px 156px;
  background-color: #eae0da;
  height: 206px;
`;

const BotUpSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const AppleGoogle = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 130px;
    height: 50px;

    img {
      object-fit: cover;
      image-rendering: -webkit-optimize-contrast;
    }
  }
`;

const Payments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Logos = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  div {
    width: 50px;
    height: 25px;

    img {
      image-rendering: -webkit-optimize-contrast;
    }
  }
`;

const BotDownSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoMenu = styled.div`
  display: flex;
  div {
    margin-right: 30px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenusUp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  div {
    font-size: 15px;
  }
`;

const MenuList = styled.div``;

const MenusDown = styled.div`
  display: flex;
  div {
    font-size: 15px;
  }
`;
const SocialCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span {
    font-size: 12px;
  }
`;
const Social = styled.div`
  display: flex;
  margin-bottom: 10px;
  div {
    width: 35px;
    border-radius: 10px;
    margin-right: 20px;
    overflow: hidden;
  }
`;
