// import { useState, useEffect } from 'react';

import MeetupList from '../../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/8a/Magellan%27s_Cross_full.jpg',
    title: '1st meetup',
    address: "magellan's cross",
  },
  {
    id: 2,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/Wiki_Loves_Earth_PH_2022_Cebu_Photowalk_%28Bird_Sanctuary%29.jpg',
    title: '2nd meetup',
    address: 'bird sanctuary',
  },
];

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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // ISR
    revalidate: 10,
  };
}
