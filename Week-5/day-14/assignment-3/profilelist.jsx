import Profile from "./profile.jsx";
function Profilelist(){
    const profiles = [
  {
    img1:"https://imgs.search.brave.com/ElnQXIjP97hOaCD1o0nxYmasxE7pzsymLHz5DZmPHLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NDE2NTY2NC9waG90/by9ibGFjay13b21h/bi1pbi10b3duLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0z/NWo2elVDREJ4VEU3/YWRkdV9iNVh3RTRy/Y0dyT04wZEdjUkNP/aGRtb1RNPQ",
    img: "https://imgs.search.brave.com/oVHPjdCLjYvn8jdHzxYHTfTZ5fWdZLpbA0GD3P-4oc0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM0LzQ5/LzVjLzM0NDk1Yzg0/YzMyZGEwNjI4NDFk/OTAzNWViNDZjMmI5/LmpwZw",
    title: "Advanced Full-Stack Development",
    description:
      "Learn advanced full-stack concepts including REST APIs, authentication, database optimization, and deployment pipelines.",
    instructor: "Dr. Arjun Menon",
    date: "2024-11-12"
  },

  {
    img1:"https://imgs.search.brave.com/ElnQXIjP97hOaCD1o0nxYmasxE7pzsymLHz5DZmPHLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NDE2NTY2NC9waG90/by9ibGFjay13b21h/bi1pbi10b3duLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0z/NWo2elVDREJ4VEU3/YWRkdV9iNVh3RTRy/Y0dyT04wZEdjUkNP/aGRtb1RNPQ",
    img: "https://imgs.search.brave.com/MqvHSOnURm3Qveq0WEp6JQpAKI7ATeDB396EQ1mW4qI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/NC8xNS8xMi8wOS9t/YWNoaW5lLWxlYXJu/aW5nLTQxMjkxNzVf/NjQwLmpwZw",
    title: "Machine Learning Essentials",
    description:
      "A complete introduction to machine learning covering supervised learning, model evaluation, and real-world applications.",
    instructor: "Prof. Meera Krishnan",
    date: "2024-10-05"
  },

  {
    img1:"https://imgs.search.brave.com/ElnQXIjP97hOaCD1o0nxYmasxE7pzsymLHz5DZmPHLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NDE2NTY2NC9waG90/by9ibGFjay13b21h/bi1pbi10b3duLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0z/NWo2elVDREJ4VEU3/YWRkdV9iNVh3RTRy/Y0dyT04wZEdjUkNP/aGRtb1RNPQ",
    img: "https://imgs.search.brave.com/gv41Fr5iMgdsbq2w6tli6uKNnH-zIIsKUcmC-dbiQfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk1/NDM5ODczNC92ZWN0/b3IvdWktdXgtZGVz/aWduLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1UV3lFYk9O/ZE94NldhR09sbTc0/MjdGX1FzRlVSb1dm/aHlvWlF4VVU5NVRZ/PQ",
    title: "UI/UX Design Masterclass",
    description:
      "Master the fundamentals of UI/UX including user research, wireframing, prototyping, and interface design workflows.",
    instructor: "Sarah D’Souza",
    date: "2024-09-18"
  }
];
return(
    <Profile profile={profiles}/>
)
}
export default Profilelist