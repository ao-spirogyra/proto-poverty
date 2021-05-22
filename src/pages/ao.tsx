import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';

const container = css`
  ${tw`m-10 p-10 rounded bg-yellow-500`}
`;
const scrapbox = css`
  ${tw`text-9xl`}
`;
const ao: React.VFC = () => {
  const [res, setRes] = useState<{ success: boolean; data: string }>();
  const getName = async () => {
    const res = await fetch('/api/people/ao');
    setRes(await res.json());
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <>
      <Head>
        <title>貧困可視化プロトタイプ: 自己紹介</title>
      </Head>
      <div css={container}>
        <h1>{res?.data}</h1>
        <a css={scrapbox} href='https://scrapbox.io/SpirogyraLibrary/Ao'>
          scrapbox
        </a>
      </div>
    </>
  );
};

export default ao;
