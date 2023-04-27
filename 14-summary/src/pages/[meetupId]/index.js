import MeetupDetails from '../../../components/meetups/MeetupDetails';

export default function MeetupDetailsPage({ meetupData }) {
  const { image, title, address, description } = meetupData;
  return (
    <MeetupDetails
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}

export async function getStaticPaths() {
  // fetch dynamic route/path params from API

  return {
    paths: [{ params: { meetupId: 1 } }, { params: { meetupId: 2 } }],
  };
}

export async function getStaticProps(context) {
  // fetch data from an API / DB calls / Filesystem operations

  const meetupId = context.params.meetupId;

  // only logs in development server when successfully navigating to dynamic path
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/8/8a/Magellan%27s_Cross_full.jpg',
        title: '1st meetup',
        address: "magellan's cross",
        description: 'The meetup description',
      },
    },
  };
}
