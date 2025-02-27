import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Acceuil", href: "#" },
  { label: "Actualités", href: "#" },
  { label: "Fonctionalités", href: "#" },
  { label: "Bourses Olympiques", href: "#" },
  { label: "Evenements", href: "#" },
  { label: "Médiathéque", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Suivi des performances en temps réel",
    description:
      "La plateforme permettra aux sportifs de suivre leurs performances en temps réel.",
  },
  {
    icon: <Fingerprint />,
    text: "Analyse des données",
    description:
      "La plateforme utilisera l'IA pour analyser les données collectées et identifier les points forts et les points faibles des sportifs.",
  },
  {
    icon: <ShieldHalf />,
    text: "Prevention des blessures",
    description:
      "Prevention des blessures La plateforme identifiera les risques potentiels de blessures et fournira des conseils pour les prévenir.",
  },
  {
    icon: <BatteryCharging />,
    text: "L'utilisation de IA",
    description:
      "utilisation de l'intelligence artificielle conversationnelle.",
  },
  {
    icon: <PlugZap />,
    text: "Une plateforme IA",
    description:
      "Une plateforme IA qui permet aux sportifs de trouver des partenaires d'entrainement.",
  },
  {
    icon: <GlobeLock />,
    text: "L'utilisation de l'analyse vidéo",
    description:
      "L'analyse vidéo peut fournir des informations précieuses sur les performances des athlètes.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const eventsData = [
  {
    id: 1,
    date: { month: "SEP", day: "18" },
    title: "Fares Farjani Secures Tunisia’s First Medal in Paris 2024 Oly...",
    description:
      "Tunisian fencer Fares Farjani has made history by securing Tunisia’s...",
    imageUrl:
      "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/h6dsglcktfuaa5r7lupw", // Replace with actual image path
  },
  {
    id: 2,
    date: { month: "OCT", day: "05" },
    title: "New World Record in Swimming at the Paris 2024 Olympics",
    description:
      "A historic moment as a new record is set in freestyle swimming...",
    imageUrl:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_md_2x/f_auto/primary/axgnen3ogsx69q4rvnyv",
  },
  {
    id: 3,
    date: { month: "NOV", day: "12" },
    title: "Tunisia’s National Football Team Qualifies for World Cup 2026",
    description: "A thrilling victory sends Tunisia to the World Cup...",
    imageUrl:
      "https://dicodusport.fr/blog/wp-content/uploads/2024/08/Taekwondo-JO-2024-Ulugbek-Rashitov-double-champion-olympique-a-22-ans.png",
  },
];
