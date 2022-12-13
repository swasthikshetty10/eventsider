import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const newData = data.map((item) => {
    return {
      ...item,
      date: new Date().toISOString(),
    };
  });
  const examples = await prisma.events.createMany({
    data: newData,
  });
  res.status(200).json(examples);
};

export default examples;
// convert all date to date time string
const data = [
  {
    title: "Tech Fair",
    description:
      "A tech conference that features industry leaders, startups and investors",
    date: new Date("2020-08-01T00:00:00.000Z"),
    location: "San Francisco, CA",
    banner:
      "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=2000",
    registrationFee: 25.0,
  },
  {
    title: "Art Festival",
    description:
      "A celebration of the arts featuring local and international artists",
    date: "September 18th, 2020",
    location: "Los Angeles, CA",
    banner:
      "https://i.pinimg.com/736x/77/97/f8/7797f801a5730f8dbc56fca8617d469b.jpg",
    registrationFee: 0.0,
  },
  {
    title: "Food Truck Friday",
    description: "A weekly gathering of local food trucks for lunchtime meals",
    date: "Every Friday",
    location: "New York City, NY",
    banner: "https://foodtruckfriday.com/images/food_truck_friday_banner.jpg",
    registrationFee: 0,
  },
  {
    title: "Rock Climbing Competition",
    description: "A competition for experienced climbers to compete for prizes",
    date: "October 10th, 2020",
    location: "Las Vegas, NV",
    banner:
      "https://www.shutterstock.com/image-vector/memphis-event-banner-design-assorted-260nw-2125395389.jpg",
    registrationFee: 50,
  },
  {
    title: "Summer Movie Night",
    description:
      "A screening of classic movies in a local park for families and friends",
    date: "Every Saturday",
    location: "Chicago, IL",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFi2WmviD4CP-a_u80ACOhc28J-zKxQH686w&usqp=CAU",
    registrationFee: 0,
  },
  {
    title: "Golf Tournament",
    description:
      "A tournament for golfers of all skill levels to compete for prizes",
    date: "August 1st, 2020",
    location: "Miami, FL",
    banner: "https://s3.envato.com/files/304428680/prevnex.jpg",
    registrationFee: 100,
  },
  {
    title: "Marathon",
    description:
      "A marathon for runners of all skill levels to compete for prizes",
    date: "December 1st, 2020",
    location: "Boston, MA",
    banner: "https://marathon.com/images/marathon_banner.jpg",
    registrationFee: 50,
  },
  {
    title: "Music Festival",
    description: "A music festival featuring local and international artists",
    date: "July 4th, 2020",
    location: "Seattle, WA",
    banner: "https://musicfestival.com/images/music_festival_banner.jpg",
    registrationFee: 0,
  },
  {
    title: "Car Show",
    description: "A car show featuring local and international car enthusiasts",
    date: "September 1st, 2020",
    location: "San Diego, CA",
    banner: "https://carshow.com/images/car_show_banner.jpg",
    registrationFee: 0,
  },
  {
    title: "Concert",
    description: "A concert featuring local and international artists",
    date: "October 1st, 2020",
    location: "Austin, TX",
    banner: "https://concert.com/images/concert_banner.jpg",
    registrationFee: 50,
  },
  {
    title: "Dance Competition",
    description:
      "A competition for dancers of all skill levels to compete for prizes",
    date: "November 1st, 2020",
    location: "Denver, CO",
    banner: "https://dancecomp.com/images/dance_competition_banner.jpg",
    registrationFee: 50.0,
  },
  {
    title: "Cooking Competition",
    description:
      "A competition for chefs of all skill levels to compete for prizes",
    date: "December 1st, 2020",
    location: "Portland, OR",
    banner: "https://cookingcomp.com/images/cooking_competition_banner.jpg",
    registrationFee: 50.0,
  },
  {
    title: "Art Show",
    description: "An art show featuring local and international artists",
    date: "September 1st, 2020",
    location: "San Diego, CA",
    banner: "https://artshow.com/images/art_show_banner.jpg",
    registrationFee: 0.0,
  },
  {
    title: "Fashion Show",
    description: "A fashion show featuring local and international designers",
    date: "October 1st, 2020",
    location: "Austin, TX",
    banner: "https://fashionshow.com/images/fashion_show_banner.jpg",
    registrationFee: 50.0,
  },
  {
    title: " Comedy Show",
    description: "A comedy show featuring local and international comedians",
    date: "November 1st, 2020",
    location: "Denver, CO",
    banner: "https://comedyshow.com/images/comedy_show_banner.jpg",
    registrationFee: 50.0,
  },
];
