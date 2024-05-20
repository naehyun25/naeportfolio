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
        title:"JavaScript, jQuery 프로젝트",
        content:"독립기념관 리뉴얼",
        skills:"JS, JQuery, HTML, CSS",
        imgUrl:`${project1}`,
        date:"3주",
        contribution:"100%",
        page:"메인페이지",
        tech:"Carousel 직접구현, Cookie Pop-up, 기상청API, 대기오염API 구현",
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
        title:"부트스트랩 SCSS 프로젝트",
        content:"Team . ticatalk",
        skills:"Scss, Bootstrap, JS, HTML, CSS",
        imgUrl:`${project2}`,
        date:"2주",
        contribution:"20% (총원 5명)",
        page:"메인페이지, 서브페이지, 로그인페이지",
        tech : "SwiferSlide, KopisApi, Cookie모달창",
        deploy : "GitHub",
        aGithub : "https://github.com/ejin1018/ticatalk",
        aVisit : "https://ticatalk.vercel.app/",
        btnName:"Visit"
    },
    {
        number:"03",
        title:"리액트 프로젝트",
        content:"Team . 4niture",
        skills:"React, CSSmodule, Antd, Node, Express, PWA",
        imgUrl:`${project3}`,
        date:"3주",
        contribution:"25% (총원 4명)",
        page:"메인페이지, 상세상품페이지4, 검색페이지, 상품업로드, 리뷰업로드, 리뷰페이지",
        tech : "React,Node로 구현한 풀스택 프로젝트(CRUD 구현)",
        deploy : "Vercell, CloudType",
        aGithub : "https://github.com/hejo47/4niture_react",
        aVisit : "https://4niture-react.vercel.app/",
        btnName:"Visit"
    },
    {
        number:"04",
        title:"리액트 네이티브 프로젝트",
        content:"4niture App",
        skills:"React-native-Expo, node.js",
        imgUrl:`${project4Gif}`,
        date:"3일",
        contribution:"100%",
        page:"메인Stack, 상품Stack, 리뷰Stack",
        tech : "react-native-expo, Carousel구현, Update-품절기능 구현, Post-상품구매",
        deploy : "CloudType, Apk",
        aGithub : "https://github.com/naehyun25/4niture-native-expo-app",
        aVisit : "https://github.com/naehyun25/4niture-native-expo-app/tree/main/assets/apkqr.png",
        btnName:"Download"
    },
    {
        number:"05",
        title:"플러터 앱 프로젝트",
        content:"Flutter App",
        skills:"Flutter, node.js",
        imgUrl:`${project5Gif}`,
        date:"5개월",
        contribution:"90%",
        page:"프론트페이지 및 node 백엔드 추가개발",
        tech : "Flutter 앱 전체페이지 구현, 모바일 push 알림, node.js 를 이용한 백엔드 구현",
        deploy : "PlayStore, AppStore",
        aGithub : "flutter",
        aVisit : "https://play.google.com/store/apps/details?id=com.helfu",
        btnName:"Download"
    }
]
export default projectData;