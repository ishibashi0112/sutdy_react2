import React from 'react'
import classes from '../Links/Links.module.css'

const ITEMS = [
  {
    href:"https://nextjs.org/docs",
    title:"Documentation",
    descriotion:"Find in-depth information about Next.js features and API."
  },
  {
    href:"https://nextjs.org/learn",
    title:"Learn",
    descriotion:"Learn about Next.js in an interactive course with quizzes!"
  },
  {
    href:"https://github.com/vercel/next.js/tree/master/examples",
    title:"Examples",
    descriotion:"Discover and deploy boilerplate example Next.js projects."
  },
  {
    href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Deploy",
    descriotion:"Instantly deploy your Next.js site to a public URL with Vercel."
  } 
];

export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item)=>{
        return(
          <a key={item.href} href={item.href} className={classes.card}>
            <h2 className={item.title}>{item.title} &rarr;</h2>
            <p className={item.descriotion}>{item.descriotion}</p>
          </a>
        );
      })}
    </div>
  )
};
  