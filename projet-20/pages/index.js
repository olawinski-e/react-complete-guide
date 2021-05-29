import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup in Seoul",
    image:
      "https://paymentweek.com/wp-content/uploads/2018/07/maxresdefault-27-1024x576.jpg",
    address: "Seoul",
    description: "Wanna go there",
  },
  {
    id: "m2",
    title: "Meetup in Tokyo",
    image: "https://i.ytimg.com/vi/6EkZss1w9hA/maxresdefault.jpg",
    address: "Tokyo",
    description: "Wanna return there",
  },
  {
    id: "m3",
    title: "Meetup in La Havana",
    image: "https://www.nutriketo.it/wp-content/uploads/2018/10/hava.jpg",
    address: "Havana",
    description: "Wanna go there",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

//! will run not during the build process, will regenerate server for every incoming request after deployment on the server, for every request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

//! will run during the build process and not every couple of seconds
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
