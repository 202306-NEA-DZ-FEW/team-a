import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme='fantasy' lang='en'>
      <Head />
      <body className='bg-base-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
