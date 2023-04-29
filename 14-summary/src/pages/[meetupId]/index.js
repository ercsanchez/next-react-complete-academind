import Head from 'next/head';

import prisma from '../../../lib/prisma';
import MeetupDetails from '../../../components/meetups/MeetupDetails';

export default function MeetupDetailsPage({ meetupData }) {
  const { image, title, address, description } = meetupData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetails
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
}

export async function getStaticPaths() {
  // fetch dynamic route/path params from API
  const meetups = await prisma.meetup.findMany({ select: { id: true } });

  // 404 error if route params not included in paths[]
  return {
    fallback: 'blocking',
    paths: meetups.map(({ id }) => ({
      params: { meetupId: id.toString() },
    })),
  };

  // SSR dynamic pages w/ route params not included in paths[]
  // return {
  //   fallback: true,
  //   paths: [{ params: { meetupId: '1' } }],
  // };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // only logs in development server when successfully navigating to dynamic path
  // console.log(meetupId);

  // fetch data from an API / DB calls / Filesystem operations
  const foundMeetup = await prisma.meetup.findFirst({
    where: { id: +meetupId },
  }); // convert meetupId into number
  const { id, image, title, address, description } = foundMeetup;
  console.log('========>', typeof id);

  return {
    props: {
      meetupData: {
        id: id.toString(), // not needed since not being used by <MeetupDetails /> comp
        image,
        title,
        address,
        description,
      },
    },
  };
}
