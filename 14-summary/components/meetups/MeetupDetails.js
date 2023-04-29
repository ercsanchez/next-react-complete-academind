import Image from 'next/image';

import cssClasses from './MeetupDetails.module.css';

export default function MeetupDetails({ image, title, address, description }) {
  const { details } = cssClasses;

  function myLoader({ src, width, quality }) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  return (
    <section className={details}>
      <Image
        src={image}
        alt={title}
        loader={myLoader}
        width={500}
        height={500}
        // fill={true} // not working
      />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
