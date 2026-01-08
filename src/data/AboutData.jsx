import React from 'react';
import { Film, Users, ShieldCheck, MapPin } from 'lucide-react';

const FEATURES = [
  {
    image: <Film size={33} />,
    title: "500+",
    description: "Movies Available",
  },
  {
    image: <Users size={33} />,
    title: "1M+",
    description: "Happy Customers",
  },
  {
    image: <ShieldCheck size={33} />,
    title: "50+",
    description: "Partner Cinemas",
  },
  {
    image: <MapPin size={33} />,
    title: "100+",
    description: "Cities Covered",
  },
];


const TEAMDATA=[{
  title:"Gauri Kale",
  description:"CEO & Founder",
  image:""
},
{
  title:"Snehal Kharat",
  description:"CTO",
  image:""
},
{
  title:"Siddhi Kharde",
  description:"Head of Design",
  image:""
}]
export { FEATURES, TEAMDATA };
