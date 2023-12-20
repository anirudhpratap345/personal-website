import React from 'react';
import { useClient } from 'react';
import Button from './components/Button';
import Image from 'next/image';
import './globals.css';
import Head from 'next/head';
import CustomHead from './Head';


const HomePage = () => {
  return (
    <>
      <CustomHead />
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ccc' }}>
          <div style={{ marginLeft: '10px', marginTop: '80px' }}>
            <h1 style={{ fontWeight: 300, fontSize: '4.236rem' }}>Hi, I`&apos;`m Anirudh</h1>
            <p style={{ fontSize: '.955rem', lineHeight: '2.75rem' }}>
              <a href="mailto:anirudhpratap006@gmail.com" style={{ textDecoration: 'underline' }}>Email</a> |{' '}
              <a href="https://github.com/anirudhpratap345" style={{ textDecoration: 'underline' }}>GitHub</a> |{' '}
              <a href="https://www.linkedin.com/in/anirudh-pratap-singh-4a30741a9/" style={{ textDecoration: 'underline' }}>LinkedIn</a> |{' '}
              <a href="https://twitter.com/anirudhpratap77" style={{ textDecoration: 'underline' }}>Twitter</a>
            </p>
            <p style={{ fontSize: '1rem', marginTop: '10px' }}>I design and develop captivating web applications as a full-stack developer, crafting immersive digital experiences. Currently pursuing ECE at Shiv Nadar University, I aspire to drive innovation by developing products for startups and product-based companies.</p>
            <Button />
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <Image
              src="/right-image.jpg"
              alt="Your Image"
              width={1920} // Set the image's actual width
              height={2880} // Set the image's actual height
              objectFit="cover"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
