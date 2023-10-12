import Link from "next/link";
import Container from "../container";

function Navbar() {
  return (
    <Container className='text-center'>
      <Link href='/' locale='en'>
        <span className='fi fi-gb'></span> English
      </Link>
      <Link href='/' locale='fr'>
        <span className='fi fi-fr'></span> Français
      </Link>
      <Link href='/' locale='ar'>
        <span className='fi fi-sa'></span> العربية
      </Link>
    </Container>
  );
}

export default Navbar;
