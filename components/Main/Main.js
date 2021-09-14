import classes from '../Main/Main.module.css';
import { Links } from '../Links/Links';
import { Headline } from '../Headline/Headline';


export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page} >
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links page="index" />
    </main>
  );
};
