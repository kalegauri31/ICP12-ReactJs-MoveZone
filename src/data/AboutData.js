import React from 'react';
import SiddhiImg from "../assets/about-img/SiddhiImg.jpg"
import { Film, Users, ShieldCheck, MapPin } from 'lucide-react';
const FEATURES = [
  {
    image: Film ,
    title: "500+",
    description: "Movies Available",
  },
  {
    image: Users ,
    title: "1M+",
    description: "Happy Customers",
  },
  {
    image: ShieldCheck ,
    title: "50+",
    description: "Partner Cinemas",
  },
  {
    image: MapPin,
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
  image:SiddhiImg
}]
export {TEAMDATA, FEATURES };
