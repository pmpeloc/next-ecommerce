import { Container, Grid, Image, Input } from 'semantic-ui-react';
import Link from 'next/link';

export const TopBar = () => {
  return (
    <div className='top-bar'>
      <Container>
        <Grid className='top-bar'>
          <Grid.Column width={8} className='top-bar__left'>
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className='top-bar__right'>
            <h2>Buscador</h2>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

function Logo() {
  return (
    <Link href='/'>
      <a>
        <Image src='/logo.png' alt='Gamming' />
      </a>
    </Link>
  );
}
