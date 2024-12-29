import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Projects",
  },
  // {
  //   url: "/testimonials",
  //   text: "Testimonials",
  // },
  {
    url: "/blog",
    text: "Contact",
  },
  // {
  //   url: "/contact",
  //   text: "Contact",
  // },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "DINUKI FERNANDO",
    post: "UNDERGRADUATE",
    design: "SOFTWARE ENGINEER ",
    design1: "DATA SCIENTIST",
    desc: "As an undergraduate passionate about software engineering, data science, artificial intelligence, and machine learning, I'm eager to apply my skills in an innovative organization. I seek to contribute to cutting-edge software development projects as well as AI and ML initiatives, solving complex problems using data-driven approaches. Committed to delivering high-quality results, I thrive in cross-functional teams and am excited to work on impactful technology solutions.",
  },
]
export const about = [
  {
    desc: "My name is Dinuki Fernando, a fourth-year undergraduate specializing in Software Engineering and Data Science at the Department of Industrial Management, University of Kelaniya. My passion for technology extends beyond just writing code—I believe in creating structured, readable, and optimized code that not only solves problems but enhances the quality of software systems. I have hands-on experience in front-end development and machine learning.",
    desc1: "I have hands-on experience in front-end development and machine learning, and I’m currently diving deeper into mobile development, which has been a growing interest of mine. I’m enthusiastic about how technology can shape the future and impact the world, whether through building simple websites or architecting complex systems. I take immense pride in the software-building process, tackling challenges, and collaborating with others to create impactful solutions.",
    desc2:"Beyond coding, I enjoy creating educational and tech-related video content, sharing my knowledge with others through engaging and informative videos. I'm in the process of launching my YouTube channel, where I plan to cover everything from development tips to machine learning tutorials.",
    cover: "./images/Dinuki.jpg",
    style: {
      width: '300px', // Set your desired width
      height: 'auto',  // Maintain aspect ratio
    },
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Font-end Development",
    desc: "I specialize in creating clean, responsive, and visually appealing web interfaces using modern technologies like HTML, CSS, JavaScript, and React. My focus is on delivering intuitive and user-friendly experiences that enhance interaction and engagement across different devices and platforms.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Machine Learning Solutions",
    desc: "I develop and implement machine learning models tailored to solve complex business problems, leveraging data-driven insights for predictive analysis, and classification. My expertise spans across various tools and frameworks, ensuring scalable and efficient solutions for industries seeking AI-driven innovation.",
  },
  // {
  //   id: 3,
  //   icon: <ViewInAr />,
  //   title: "Responsive Design",
  //   desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  // },
  // {
  //   id: 4,
  //   icon: <PieChart />,
  //   title: "Material UI	",
  //   desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  // },
  // {
  //   id: 5,
  //   icon: <Code />,
  //   title: "Material UI Icons",
  //   desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  // },
  // {
  //   id: 6,
  //   icon: <BarChart />,
  //   title: "Awesome Support",
  //   desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  // },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "10",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]

export const portfolio = [
  {
    id: 1,
    title: "Nursing Home Management System",
    desc: "Developed a full-stack web application using HTML, CSS, JavaScript, and React.js for the front-end, with Express.js and MySQL for back-end database management. The system facilitates patient, staff, and facility management in a nursing home, streamlining operations and record-keeping.",
    category: "Web based System Development",
  },
  {
    id: 2,
    title: "Student Management System",
    category: "Web based System Development - Individual",
    desc: "Built a responsive web application with HTML, CSS, JavaScript, React.js, and Node.js to manage student data efficiently. The system includes features for student enrollment, grading, and tracking academic progress.",
    category: "Web based System Development",
  },
  {
    id: 3,
    title: "The Cocktail Website",
    category: "Web Development ",
    desc: "Created an interactive cocktail recipe website using HTML, CSS, JavaScript, and React.js. The site allows users to search for cocktails based on ingredients, browse a collection of recipes, and discover new drinks.",
  },
  {
    id: 4,
    title: "Tuition Management System",
    category: "Web based System Development",
    desc: "Collaborated on a Java and MySQL-based system to manage a tuition center's operations. The system automates student enrollment, class scheduling, and fee management, enhancing administrative efficiency.",
  },
  {
    id: 5,
    title: "Bus Reservation System ",
    category: "Web based System Development",
    desc: "Developed a Java-based bus reservation system with MySQL integration. The system allows users to search for routes, check availability, and book seats, while providing administrators with tools for managing routes and schedules.",
  },
  {
    id: 6,
    title: "Loan Default Prediction Using Neural Networks",
    category: "Machine Learning solutions",
    desc: "Implemented a machine learning model using Pandas, NumPy, Seaborn, Matplotlib, and Sklearn to predict loan defaults. The neural network analyzes financial data to classify customers based on their likelihood of default.",
  },
  {
    id: 7,
    title: "Bangalore House Prediction Using Neural Networks",
    category: "Machine Learning solutions",
    desc: "Built a predictive model using Sklearn to forecast housing prices in Bangalore. The neural network utilizes real estate data to provide accurate price predictions for potential homebuyers and investors.",
  },
  {
    id: 8,
    title: "Outlier Detection in Data Warehouses Using LOF, One-SVM, iForest, and Autoencoders",
    category: "Machine Learning solutions",
    desc: "Developed a framework to detect outliers in large datasets using machine learning models like LOF, One-Class SVM, Isolation Forest, and Autoencoders. Tools like Pyodbc, Pandas, Sklearn, Keras, Shap, Matplotlib, and Seaborn were used for detection and visualization.",
  },
  {
    id: 9,
    title: "Facial Emotion Recognition Models Using CNN, VGG16, and ResNet50",
    category: "Machine Learning solutions",
    desc: "Built deep learning models to recognize facial emotions from images using CNN, VGG16, and ResNet50. The project utilized Random, NumPy, Pandas, PyTorch, Matplotlib, Sklearn, and PIL to classify emotions in facial expressions.",
  },
  {
    id: 10,
    title: "Face Recognition Model & Object Recognition Model",
    category: "Machine Learning solutions",
    desc: "Developed models for face and object recognition using OpenCV (cv2), Numpy, and Imutils. These models identify faces and objects in real-time from images or video streams.",
  },
  {
    id: 11,
    title: "Predicting Credit Card Default Customers Using Neural Networks",
    category: "Machine Learning solutions",
    desc: "Created a neural network model using TensorFlow and Sklearn to predict credit card defaults. The model analyzes customer financial behavior to identify those at risk of defaulting on their credit obligations.",
  },
]

// export const portfolio = [
//   {
//     id: 1,
//     cover: "../images/port/port1.jpg",
//     name: "Brand",
//     category: "marketing",
//     title: "Brex Logo",
//   },
//   {
//     id: 2,
//     cover: "../images/port/port2.jpg",
//     name: "Brand",
//     category: "design",
//     title: "Brex Logo",
//   },
//   {
//     id: 3,
//     cover: "../images/port/port3.jpg",
//     name: "Brand",
//     category: "development",
//     title: "Brex Logo",
//   },
//   {
//     id: 4,
//     cover: "../images/port/port4.jpg",
//     name: "Brand",
//     category: "marketing",
//     title: "Brex Logo",
//   },
//   {
//     id: 5,
//     cover: "../images/port/port5.jpg",
//     name: "Brand",
//     category: "design",
//     title: "Brex Logo",
//   },
//   {
//     id: 6,
//     cover: "../images/port/port6.jpg",
//     name: "Brand",
//     category: "development",
//     title: "Brex Logo",
//   },
// ]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/Python_for_Beginners.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/Web_Design_for_Beginners.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/AWS.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/6938438_1721218195_page-0001.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/Cysco.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/duke.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/js.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/python_basic certificate_page-0001.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/pytorch.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/UC-1a822b7d-6a51-47ea-bcfd-210823386636.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/UC-1fe1ff12-5455-4285-a40f-a20341f6875f.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/UC-7a6634dd-6315-4b94-b3b1-75c514e070a6.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/UC-a6744315-ebd5-417b-9c05-1d2b8783bf8a (1).jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/certificates/UC-edc4ffcf-8c9e-49b7-b015-57891811ce69.jpg",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
]
export const social = [
  // {
  //   icon: <LinkedInIcon  />,
  // },
  // {
  //   icon: <GitHubIcon  />,
  // },
  // {
  //   icon: <Instagram />,
  // },
  // {
  //   icon: <YouTube />,
  // },

  {
    title:"Linkedln",
    link:"https://www.linkedin.com/in/dinuki-fernando-7869a8235/"
  },
  {
    title:"GitHub",
    link:"https://github.com/DinukiFernando"
  },
  {
    title:"Medium",
    link:"https://medium.com/@dinukifernando963"
  },
  {
    title:"HackerRank",
    link:"https://www.hackerrank.com/profile/dinukifernando92"
  }
]
