import { colors, styled, Typography } from '@mui/material';

export const Footer = () => (
    <FooterWrapper>
      <FooterText variant="caption" >
        {new Date().getFullYear()} Made by Coy Kwan
      </FooterText>
    </FooterWrapper>
  );
  
  const FooterWrapper = styled('div')({
    position: 'fixed',
    bottom: 0,
    color: 'white'
  })

  const FooterText = styled(Typography)`
    text-transform: uppercase;
  `;