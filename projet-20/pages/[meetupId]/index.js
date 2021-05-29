import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://paymentweek.com/wp-content/uploads/2018/07/maxresdefault-27-1024x576.jpg"
      title="Meetup in Seoul"
      address="SEOUL"
      description="Wanna go there"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://paymentweek.com/wp-content/uploads/2018/07/maxresdefault-27-1024x576.jpg",
        id: meetupId,
        title: "Meetup in Seoul",
        address: "SEOUL",
        description: "Wanna go there",
      },
    },
  };
}

export default MeetupDetails;
