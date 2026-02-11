import landscap_img_1 from "@/assets/landscap_img_1.png";
import landscap_image_2 from "@/assets/landscap_image_2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import Dining1 from "@/assets/Dining-1.jpg";
import first from "@/assets/1.jpg";
import second from "@/assets/2.jpg";
import third from "@/assets/3.jpg";
import fourth from "@/assets/4.jpg";
import Dining2 from "@/assets/Dining-2.jpg";
import kitchen1 from "@/assets/Kitchen-1.jpg";
import kitchen2 from "@/assets/Kitchen-2.jpg";
import view1 from "@/assets/View-1.jpg";
import view2 from "@/assets/View-2.jpg";
import view3 from "@/assets/View-3.jpg";
import view4 from "@/assets/View-4.jpg";
import image from "@/assets/images.png";

export const projects = [
  {
    id: 1,
    image: Dining1,
    title: "Modern Villa Retreat",
    description:
      "A contemporary villa featuring open spaces, natural materials, and seamless indoor-outdoor flow.",
    gallery: [
      first,
      second,
      third,
      fourth,
      Dining1,
      Dining2,
      kitchen1,
      kitchen2,
      view1,
      view2,
      view3,
      view4,
    ],
  },
  {
    id: 2,
    image: landscap_img_1,
    title: "Artisan Restaurant",
    description:
      "An intimate dining space with warm ambiance and sophisticated design elements.",
    gallery: [landscap_image_2,landscap_img_1],
  },
  // {
  //   id: 3,
  //   image: project3,
  //   title: "Luxury Kitchen Renovation",
  //   description:
  //     "A complete kitchen transformation with premium finishes and smart storage solutions.",
  //   gallery: [image,image,image],
  // },
  // {
  //   id: 4,
  //   image: project4,
  //   title: "Wellness Spa Center",
  //   description:
  //     "A serene wellness retreat designed to promote relaxation and rejuvenation.",
  //   gallery: [image,image,image],
  // },
  // {
  //   id: 5,
  //   image: project5,
  //   title: "Urban Garden Estate",
  //   description:
  //     "A stunning outdoor living space with modern landscaping and fire features.",
  //   gallery: [image,image,image],
  // },
];
