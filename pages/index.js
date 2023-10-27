import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from '../styles/utils.module.css';


/*
In Next.js, a page is a React Component exported from a file in the pages directory.

Pages are associated with a route based on their file name. For example, in development:

pages/index.js is associated with the / route.
pages/posts/first-post.js is associated with the /posts/first-post route.

In Next.js, you can use the Link Component next/link to link between pages in your application.
 <Link> allows you to do client-side navigation and accepts props that give you better control over the navigation behavior.

 Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

 next/image allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it.
  This avoids shipping large images to devices with a smaller viewport



       Third-party JavaScript refers to any scripts that are added from a third-party source. Usually, third-party scripts are included in order to 
       introduce newer functionality into a site that does not need to be written from scratch, such as analytics, ads, and customer support widgets.

       CSS modules allow you to locally scope CSS at the component-level by automatically creating unique class names. 
       This allows you to use the same CSS class name in different files without worrying about class name collisions.



*/
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Will, a Computer Science student at Lehman College. I'm graduating soon and hope to get a job as web developer. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}