import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en' className='!scroll-smooth no-scrollbar'>
      <Head />
      <body className='bg-base-300 text-current'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
