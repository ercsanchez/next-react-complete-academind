import { useRouter } from 'next/router';
import Image from 'next/image';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {
  const router = useRouter();

  // function showDetailsHandler(e) {
  // e.preventDefault(); // why isn't event.preventDefault() not needed
  function showDetailsHandler() {
    router.push(`/${props.id}`);
  }

  // required loader function for <Image/>
  function myLoader({ src, width, quality }) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            className={classes.special}
            src={props.image}
            alt={props.title}
            loader={myLoader}
            width={500}
            height={500}
            // fill={true} // not working
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* <button onClick={(e) => showDetailsHandler(e)}>Show Details</button> */}
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
