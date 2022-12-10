import React from "react";
import Card from "./Card";

function Events() {
  return (
    <div className="mx-auto max-w-screen-2xl p-5">
      <h1 className="text my-14 text-center text-6xl font-bold ">Events</h1>
      <div className="lg:grid-clos-3  grid grid-cols-1 gap-5 space-y-5 md:grid-cols-2  md:gap-10 2xl:grid-cols-3">
        {data.map(
          ({
            title,
            description,
            date,
            location,
            image,
            link,
            registrationFee,
          }) => (
            <Card
              key={title}
              title={title}
              description={description}
              date={date}
              location={location}
              image={image}
              link={link}
              registrationFee={registrationFee}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Events;

const data = [
  {
    title: "Tech Fair",
    description:
      "A tech conference that features industry leaders, startups and investors",
    date: "November 5th, 2020",
    location: "San Francisco, CA",
    image: "https://techfair.com/images/tech_fair_banner.jpg",
    link: "https://techfair.com",
    registrationFee: 25.0,
  },
  {
    title: "Art Festival",
    description:
      "A celebration of the arts featuring local and international artists",
    date: "September 18th, 2020",
    location: "Los Angeles, CA",
    image: "https://artfestival.com/images/art_festival_banner.jpg",
    link: "https://artfestival.com",
    registrationFee: 0.0,
  },
  {
    title: "Food Truck Friday",
    description: "A weekly gathering of local food trucks for lunchtime meals",
    date: "Every Friday",
    location: "New York City, NY",
    image: "https://foodtruckfriday.com/images/food_truck_friday_banner.jpg",
    link: "https://foodtruckfriday.com",
    registrationFee: 0.0,
  },
  {
    title: "Rock Climbing Competition",
    description: "A competition for experienced climbers to compete for prizes",
    date: "October 10th, 2020",
    location: "Las Vegas, NV",
    image:
      "https://rockclimbingcomp.com/images/rock_climbing_competition_banner.jpg",
    link: "https://rockclimbingcomp.com",
    registrationFee: 50.0,
  },
  {
    title: "Summer Movie Night",
    description:
      "A screening of classic movies in a local park for families and friends",
    date: "Every Saturday",
    location: "Chicago, IL",
    image: "https://summermovienight.com/images/summer_movie_night_banner.jpg",
    link: "https://summermovienight.com",
    registrationFee: 0,
  },
  {
    title: "Golf Tournament",
    description:
      "A tournament for golfers of all skill levels to compete for prizes",
    date: "August 1st, 2020",
    location: "Miami, FL",
    image: "https://golftournament.com/images/golf_tournament_banner.jpg",
    link: "https://golftournament.com",
    registrationFee: 100.0,
  },
  {
    title: "Marathon",
    description:
      "A marathon for runners of all skill levels to compete for prizes",
    date: "December 1st, 2020",
    location: "Boston, MA",
    image: "https://marathon.com/images/marathon_banner.jpg",
    link: "https://marathon.com",
    registrationFee: 50.0,
  },
  {
    title: "Music Festival",
    description: "A music festival featuring local and international artists",
    date: "July 4th, 2020",
    location: "Seattle, WA",
    image: "https://musicfestival.com/images/music_festival_banner.jpg",
    link: "https://musicfestival.com",
    registrationFee: 0.0,
  },
  {
    title: "Car Show",
    description: "A car show featuring local and international car enthusiasts",
    date: "September 1st, 2020",
    location: "San Diego, CA",
    image: "https://carshow.com/images/car_show_banner.jpg",
    link: "https://carshow.com",
    registrationFee: 0.0,
  },
  {
    title: "Concert",
    description: "A concert featuring local and international artists",
    date: "October 1st, 2020",
    location: "Austin, TX",
    image: "https://concert.com/images/concert_banner.jpg",
    link: "https://concert.com",
    registrationFee: 50.0,
  },
  {
    title: "Dance Competition",
    description:
      "A competition for dancers of all skill levels to compete for prizes",
    date: "November 1st, 2020",
    location: "Denver, CO",
    image: "https://dancecomp.com/images/dance_competition_banner.jpg",
    link: "https://dancecomp.com",
    registrationFee: 50.0,
  },
  {
    title: "Cooking Competition",
    description:
      "A competition for chefs of all skill levels to compete for prizes",
    date: "December 1st, 2020",
    location: "Portland, OR",
    image: "https://cookingcomp.com/images/cooking_competition_banner.jpg",
    link: "https://cookingcomp.com",
    registrationFee: 50.0,
  },
  {
    title: "Art Show",
    description: "An art show featuring local and international artists",
    date: "September 1st, 2020",
    location: "San Diego, CA",
    image: "https://artshow.com/images/art_show_banner.jpg",
    link: "https://artshow.com",
    registrationFee: 0.0,
  },
  {
    title: "Fashion Show",
    description: "A fashion show featuring local and international designers",
    date: "October 1st, 2020",
    location: "Austin, TX",
    image: "https://fashionshow.com/images/fashion_show_banner.jpg",
    link: "https://fashionshow.com",
    registrationFee: 50.0,
  },
  {
    title: " Comedy Show",
    description: "A comedy show featuring local and international comedians",
    date: "November 1st, 2020",
    location: "Denver, CO",
    image: "https://comedyshow.com/images/comedy_show_banner.jpg",
    link: "https://comedyshow.com",
    registrationFee: 50.0,
  },
];
