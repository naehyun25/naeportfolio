import project1 from "../assets/project1.jpg";
import projectphp1 from "../assets/projectphp1.gif";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4Gif from "../assets/project4.gif";
import project5Gif from "../assets/project5.gif";
import project5 from "../assets/project5.png";

const projectData = [
    {
        number:"01",
        title:"JavaScript, jQuery Project",
        content:"Independence Hall Renovation",
        skills:"JS, JQuery, HTML, CSS",
        imgUrl:`${project1}`,
        date:"3 weeks",
        contribution:"100%",
        page:"Main page",
        tech:"Custom Carousel, Cookie Pop-up, Weather API, Air Pollution API",
        deploy : "GitHub",
        aGithub : "https://github.com/naehyun25/project1",
        aVisit : "https://naehyun25.github.io/project1/",
        btnName:"Visit"
    },
    // {
    //     number:"02",
    //     title:"PHP게시판 프로젝트",
    //     content:"독립기념관 리뉴얼 (ver.PHP)",
    //     skills:"PHP, JS, JQuery, HTML, CSS ",
    //     imgUrl:`${projectphp1}`,
    //     date:"1주",
    //     contribution:"100%",
    //     page:"메인페이지, 게시판페이지, 로그인페이지",
    //     tech : "PHP게시판(CRUD), PHP로그인구현",
    //     deploy : "Dothome",
    //     aGithub: "https://github.com/naehyun25/project1-ver2",
    //     aVisit: "http://naeh.dothome.co.kr/index_board.php",
    //     btnName:"Visit"
    // },
    {
        number:"02",
        title:"Bootstrap SCSS Project",
        content:"Team . ticatalk",
        skills:"Scss, Bootstrap, JS, HTML, CSS",
        imgUrl:`${project2}`,
        date:"2 weeks",
        contribution:"20% (5 members total)",
        page:"Main page, Sub pages, Login page",
        tech : "SwiperSlide, Kopis API, Cookie Modal",
        deploy : "GitHub",
        aGithub : "https://github.com/ejin1018/ticatalk",
        aVisit : "https://ticatalk.vercel.app/",
        btnName:"Visit"
    },
    {
        number:"03",
        title:"React Project",
        content:"Team . 4niture",
        skills:"React, CSSmodule, Antd, Node, Express, PWA",
        imgUrl:`${project3}`,
        date:"3 weeks",
        contribution:"25% (4 members total)",
        page:"Main page, Product detail pages, Search page, Product upload, Review upload, Review page",
        tech : "Full-stack project built with React and Node (CRUD implementation)",
        deploy : "Vercell, CloudType",
        aGithub : "https://github.com/hejo47/4niture_react",
        aVisit : "https://4niture-react.vercel.app/",
        btnName:"Visit"
    },
    {
        number:"04",
        title:"React Native Project",
        content:"4niture App",
        skills:"React-native-Expo, node.js",
        imgUrl:`${project4Gif}`,
        date:"3 days",
        contribution:"100%",
        page:"Main Stack, Product Stack, Review Stack",
        tech : "React-native-Expo, Custom Carousel, Update-Out-of-Stock feature, Post-Purchase feature",
        deploy : "CloudType, Apk",
        aGithub : "https://github.com/naehyun25/4niture-native-expo-app",
        aVisit : "https://github.com/naehyun25/4niture-native-expo-app/tree/main/assets/apkqr.png",
        btnName:"Download"
    },
    {
        number:"05",
        title:"Flutter App Project",
        content:"Flutter App",
        skills:"Flutter, node.js",
        imgUrl:`${project5Gif}`,
        date:"5 months",
        contribution:"90%",
        page:"Frontend and Node.js backend development",
        tech : "Implemented full app pages in Flutter, Mobile push notifications, Backend developed with Node.js",
        deploy : "PlayStore, AppStore",
        aGithub : "flutter",
        aVisit : "https://play.google.com/store/apps/details?id=com.helfu",
        btnName:"Download"
    }
]
export default projectData;