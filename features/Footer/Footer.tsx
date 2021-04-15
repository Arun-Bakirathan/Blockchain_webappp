import { Page } from "@geist-ui/react";
import { FC } from "react";
import styled from "styled-components";

const Container = styled(Page.Footer)`
  text-align: center;
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NavItem = styled.a`
  font-family: "Source Code Pro", sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  padding: 0 8px;

  @media screen and (max-width: 600px) {
    padding: 0;
    letter-spacing: 2px;
  }
`;

export const Footer: FC = () => {
  return (
    <Container>
      <NavItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://info.uniswap.org/pair/0xdc98556Ce24f007A5eF6dC1CE96322d65832A819"
      >
        PICKLE-ETH
      </NavItem>
      <NavItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/pickle-finance/contracts"
      >
        Github
      </NavItem>
      <NavItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://signal.pickle.finance"
      >
        Signal
      </NavItem>
      <NavItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://forum.pickle.finance"
      >
        Forum
      </NavItem>
      <NavItem
        target="_blank"
        rel="noopener noreferrer"
        href="http://discord.gg/uG6WhYkM8n"
      >
        Discord
      </NavItem>
      <NavItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/picklefinance"
      >
        Twitter
      </NavItem>
      <NavItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/picklefinance"
      >
        Telegram
      </NavItem>
      <NavItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/picklefinancechinese"
      >
        中文tg
      </NavItem>
    </Container>
  );
};
