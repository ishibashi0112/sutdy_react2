import React from 'react'
import classes from '../Headline/Headline.module.css'

export function Headline(props) {
  console.log(props);
  return (
    <div>
      <h1 className={classes.title}>{props.page} Page</h1>

      <p className={classes.description}>
        Get started by editing{' '}
        {props.children}
      </p>
      <button>ボタン</button>

    </div>
  )
};
