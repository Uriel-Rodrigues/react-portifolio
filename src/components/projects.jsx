import { useState } from "react";
import { BiLink, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiRightArrowAlt } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { DiMysql } from "react-icons/di";



const Projects = () => {

    const [card, setCard] = useState([
        {
            image:"./linkTree.webp",
            titulo: "LinkTree",
            descricao: "Projeto desenvolvido para centralizar links e facilitar o acesso às minhas redes sociais, portfólio e outros canais de contato em uma única página. Com uma interface moderna, responsiva e temática Matrix",
            
            tecnologias: [
                {icon: BiLogoHtml5, nome: "HTML"}, 
                {icon: BiLogoCss3, nome: "CSS" }],
            link: "https://gt20260402-linktree.onrender.com/" 
        },

        {
            image:"./mewo-cafe.webp",
            titulo: "Mewo Cafe - Landing Page",
            descricao: "Landing page desenvolvida para uma cafeteria fictícia, com design moderno, acolhedor e identidade visual própria. O projeto apresenta os produtos e a proposta da marca por meio de uma interface intuitiva, responsiva e visualmente atrativa, proporcionando uma experiência agradável aos visitantes.",
            
            tecnologias: [
                {icon: BiLogoHtml5, nome: "HTML"}, 
                {icon: BiLogoCss3, nome: "CSS" }],

            link: "https://gt20260404-landingpage-mewocafe.onrender.com/" 
        },
        {
            image:"./projeto-fashion.webp",
            titulo: "Fashion - Landing Page",
            descricao: "Landing page desenvolvida para uma marca fictícia de roupas, com design moderno, acolhedor e identidade visual própria. O projeto apresenta os produtos e a proposta da marca por meio de uma interface intuitiva, responsiva e visualmente atrativa, proporcionando uma experiência agradável aos visitantes.",
            
            tecnologias: [
                {icon: BiLogoHtml5, nome: "HTML"}, 
                {icon: BiLogoCss3, nome: "CSS" },
                {icon: BiLogoJavascript, nome:"javaScript"
}
            ],

            link: "https://gt20260404-landingpage-fashion.onrender.com/" 
        },
        {
            image:"./finControl.png",
            titulo: "FinControl - Controle Financeiro Completo",
            descricao: "Sistema de controle financeiro full stack desenvolvido com React, Next.js, Node.js, TypeScript, JavaScript e Tailwind CSS. O projeto conta com uma interface intuitiva para gerenciamento de receitas e despesas, visualização de dados em gráficos e acompanhamento financeiro. O backend utiliza Node.js e Express para a construção da API, com TypeORM para gerenciamento do banco de dados, autenticação com JWT, criptografia de senhas com bcryptjs e envio de e-mails com Nodemailer. Também foram utilizadas tecnologias e bibliotecas como MySQL2, PostgreSQL (pg), Yup, Axios, React Hook Form e Recharts, proporcionando validação de dados, comunicação entre frontend e backend e uma experiência completa de gestão financeira.",
            
            tecnologias: [
                {icon: DiMysql, nome: "Mysql"}, 
                {icon: BiLogoTailwindCss , nome: "CSS" },
                {icon: BiLogoReact , nome:"React"},
                {icon: BiLogoNodejs , nome:"javaScript"},
                {icon: BiLogoTypescript, nome:"Typescript"},
                {icon: BiLogoPostgresql, nome:"Postgresql"},
            ],

            link: "https://gt20260404-landingpage-fashion.onrender.com/" 
        }


    ])

    return ( 
        <div className="mt-5">

            <div className="mb-10">
                <p className=" ml-5 text-green-500">&gt;_ SYSTEM MENSAGE 03</p>
                <span className=" ml-5 text-2xl font-extrabold text-green-600">PROJECTS</span>
                <div className="ml-5 mt-5 rouded border border-green-600 h-0 w-50"></div>
            </div>

                {
                card.map((c) => {
                        const Icon = c.icon; 

                        return (
                        <div>
                            <div className="mb-10 p-3 border border-green-500 w-[90%] m-auto bg-green-950/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <img src={c.image} alt="linkTree" className="border border-green-500 rounded-xl w-full mb-3"/>
                                
                                <div>
                                    <div className="flex items-center">
                                        <p className="text-green-500 text-2xl mb-3">// {c.titulo}</p>
                                    </div>

                                    <p className="text-green-200 mb-3" >{c.descricao}</p>

                                    <div className="flex items-center">
                                        <p className="text-green-500 text-2xl mb-3">// Tecnologias </p>
                                    </div>

                                    <div className="grid grid-cols-4 gap-5 mb-5">
                                        {
                                            c.tecnologias.map((tecnologia, index) => {
                                                const Icon = tecnologia.icon
                                                return (
                                                    <div className="flex flex-col items-center" key={index}>
                                                        <Icon className="fill-green-500 w-15 h-auto border border-green-500 rounded" />
                                                        <p className="text-green-200">{tecnologia.nome}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="flex items-center border border-green-500 text-green-500 text-xl font-semibold gap-2 justify-center p-2 max-w-[70%] m-auto lg:hover:bg-green-300 duration-300 lg:hover:text-green-950">
                                        <BiLink className="w-5 h-auto" />
                                        <a href={c.link} target="_blank" className="text-2xl">Viel Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})
                }
        </div>
     );
}
 
export default Projects;