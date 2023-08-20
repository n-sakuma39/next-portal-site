import Head from "next/head";

export const CustomHead = ({ title }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  );
};
