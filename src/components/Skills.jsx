import { useRef, useState } from "react";
import { BiLeftArrow, BiLogoCPlusPlus, BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiRightArrow, BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { DiMysql } from "react-icons/di";


const Skills = () => {
    const [skill, setSkill] = useState([{
        id:1,
        icon: BiLogoPython,
        tipo: "icon",
        title: "Python" 
    },{
        id:2,
        icon: BiLogoJavascript,
        tipo: "icon",
        title: "JavaScript" 
    }, {
        id:2,
        icon: BiLogoTypescript,
        tipo: "icon",
        title: "TypeScript" 
    }, {
        id:2,
        icon: BiLogoCPlusPlus ,
        tipo: "icon",
        title: "C++" 
    }, {
        id:2,
        icon: BiLogoHtml5 ,
        tipo: "icon",
        title: "HTML5" 
    }, {
        id:2,
        icon: BiLogoCss3 ,
        tipo: "icon",
        title: "CSS3" 
    }, {
        id:2,
        icon: BiLogoTailwindCss ,
        tipo: "icon",
        title: "Tailwind-css" 
    }, {
        id:2,
        icon: BiLogoReact ,
        tipo: "icon",
        title: "React" 
    }, {
        id:2,
        icon: BiLogoNodejs ,
        tipo: "icon",
        title: "Nodejs" 
    }, {
        id:2,
        icon: BiLogoPostgresql ,
        tipo: "icon",
        title: "PostgreSQL" 
    }, {
        id:2,
        icon: DiMysql ,
        tipo: "icon",
        title: "Mysql" 
    }, {
        id:2,
        icon: BiLogoGit ,
        tipo: "icon",
        title: "Git" 
    },{
        id:2,
        icon: BiLogoGithub  ,
        tipo: "icon",
        title: "Github" 
    }, {
        id:2,
        icon: "/apache.svg" ,
        tipo:"image",
        title: "Apache" 
    }, {
        id:2,
        icon: "/rancher.svg",
        tipo:"image",
        title: "Rancher" 
    }])

    const carrossel = useRef(null)

    const handleLeftClick = (event) => {
    event.preventDefault();

        if (!carrossel.current) return;

        let scrollAmount;

        if (window.innerWidth < 768) {
            scrollAmount = 220; // Celular
        } else if (window.innerWidth < 1024) {
            scrollAmount = 300; // Tablet
        } else {
            scrollAmount = 1000; // Desktop
        }

        carrossel.current.scrollLeft -= scrollAmount;
    };

    const handleRightClick = (event) => {
        event.preventDefault();

        if (!carrossel.current) return;

        let scrollAmount;

        if (window.innerWidth < 768) {
            scrollAmount = 220; // Celular
        } else if (window.innerWidth < 1024) {
            scrollAmount = 300; // Tablet
        } else {
            scrollAmount = 1000; // Desktop
        }

        carrossel.current.scrollLeft += scrollAmount;
    };


    // const handleLeftClick = (event) => {
    // event.preventDefault()

    // carrossel.current.scrollLeft -= 220

    // }
    // const handleRightClick = (event) => {
    // event.preventDefault()

    // carrossel.current.scrollLeft += 220
    // }

    return ( 
        <section className="mt-5">

            <div className="mb-10">
                <p className=" ml-5 text-green-500">&gt;_ SYSTEM MENSAGE 02</p>
                <span className=" ml-5 text-2xl font-extrabold text-green-600">SKILLS</span>
                <div className="ml-5 mt-5 rouded border border-green-600 h-0 w-50"></div>
            </div>

            <div className="flex items-center">
                <p className=" text-green-500 text-8xl lg:ml-10">&lt;</p>

                <div id="container" className=" top-10 m-auto flex max-w-[50%] md:max-w-[75%] lg:max-w-[70%]"> 

                    <div ref={carrossel} className="h-40 flex mt-8 gap-4 overflow-x-auto scrollbar-none overflow-auto scroll-smooth">

                    <div className="flex md:place-items-center items-center w-full gap-5 lg:gap-14 ">
                            {
                                skill.map((a) => {
                                    const Icon = a.icon;

                                    return(
                                        <div className="flex items-center justify-center gap-4 border border-green-500 rounded-xl w-50 md:w-70 md:p-3 p-1 bg-green-950/60 shadow-[0_0_15px_rgba(6,182,212,0.5)] shrink-0" key={a.id}>
                                            {a.tipo === "icon" ? (
                                            <Icon className="text-green-500 w-10 h-10 md:w-20 md:h-20 shrink-0" />) : (<img src={a.icon} alt={a.title} className="w-10 h-10 md:w-20 md:h-20 object-contain shrink-0"/>)}

                                            <p className="text-green-500 font-bold text-xl md:text-2xl">{a.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <p className=" text-green-500 text-8xl lg:mr-10">/&gt; </p>
            </div>

                <div className=" top-15 flex justify-center mt-10 gap-20 lg:pr-20">
                    <BiSolidChevronLeft onClick={handleLeftClick} className="lg:hover:scale-150 duration-200 h-20 w-20 fill-green-500 cursor-pointer" />
                    <BiSolidChevronRight  onClick={handleRightClick} className="lg:hover:scale-150 duration-200 h-20 w-20 fill-green-500 cursor-pointer" />
                </div>
        </section>
     );
}
 
export default Skills;