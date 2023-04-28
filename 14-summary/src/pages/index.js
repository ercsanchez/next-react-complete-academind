// import { useState, useEffect } from 'react';

import MeetupList from '../../components/meetups/MeetupList';

export default function HomePage(props) {
  // client-side rerender with data
  // const [fetchedMeetups, setFetchedMeetups] = useState([]);
  // useEffect(() => setFetchedMeetups(DUMMY_MEETUPS), []);
  // return <MeetupList meetups={fetchedMeetups} />;
  //
  // SSG - static site generation
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // insert code to fetch data from an API / DB calls / Filesystem operations

//   return { props: { meetups: DUMMY_MEETUPS } };
// }

// SSG - static site generation
export async function getStaticProps() {
  // insert code to fetch data from an API / DB calls / Filesystem operations

  // using fetch() made available on the server by next.js
  const response = await fetch('http://localhost:3000/api/meetups');
  const { data } = await response.json();
  // or
  // const data = await response.json().then((result) => result.data);

  return {
    props: {
      meetups: data,
    },
    // ISR
    revalidate: 10,
  };
}
