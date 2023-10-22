import ProjectCard from "@/components/ProjectCard";
import { Grid } from "@mui/material";
import Component from "@/components/Component";
import Skill from "@/components/Skill";
import Result from "@/components/Result";
import Link from "next/link";
const ProjectList = [
    {
        title: "Portfolio Website",
        githubLink:
            "https://github.com/VenkataSrimanNarayana/PortfolioWebsite.git",
        description: (
            <>
                Developed a static <Component>portfolio website</Component>{" "}
                using <Skill>Next.js</Skill> framework and react components from
                Google's <Skill>Material UI</Skill> to showcase my projects and
                achievements. Deployed it on Github pages.
            </>
        ),
    },
    {
        title: "AI powered Chatbot",
        githubLink: "",
        description: (
            <>
                As a part of my internship I had collaborated with fellow
                teammates to develop an AI-powered web application that serves
                as a <Component>chatbot</Component> for various file formats,
                effectively answering questions based on uploaded content.
                Learned working with technologies like <Skill>Docker</Skill>,{" "}
                <Skill>LangChain</Skill>, and <Skill>Azure deployments</Skill>.
                Contributed by Implementing the LLM wrapper around an LLM
                service using LangChain’s base LLM class. Created API endpoints
                using Flask to give access to the LLM model. Containerized the
                backend into a single container application using Docker.
                Deployed it on Azure using Azure CLI.
            </>
        ),
    },
    {
        title: "Compilers Project",
        githubLink: "https://github.com/myCSEprojects/Zebra.git",
        description: (
            <>
                Worked collaboratively within a team of five on a compiler
                project, developing a compiler(which we named as{" "}
                <span style={{ fontStyle: "italic" }}>zebra</span>) inspired
                from C++'s syntax. This project involved creating a{" "}
                <Component>lexer</Component>, <Component>parser</Component>,{" "}
                <Component>typechecker</Component>,{" "}
                <Component>interpreter</Component>,{" "}
                <Component>code generator</Component>, and a{" "}
                <Component>stack-based virtual machine</Component> using{" "}
                <Skill>Python</Skill>. The key components included lexing,
                parsing, type checking, tree-walk evaluation, and code
                generation. We used <Skill>git</Skill> for version control and{" "}
                <Skill>Github</Skill> for tracking contributions. I actively
                contributed to various aspects of the project, including
                implementing the parser, tree-walk interpreter, type checker,
                code generator, resolver, and primary test cases. Our team
                achieved respectable results, ranking among the{" "}
                <Result>top five</Result> teams in the coures based on
                performance of code for Project Euler Problem 14 written in our
                language. Here is a showcase of{" "}
                <Link
                    style={{ textDecoration: "none", color: "#1976d2" }}
                    href="https://bkomarath.rbgo.in/teaching/compilers-2023/#:~:text=start%3B%0A%7D%0Aend-,Zebra,-var%20int%20l"
                >
                    code
                </Link>{" "}
                for Project Euler Problem 14 written in our language.
            </>
        ),
    },
    {
        title: "Hostel Management System",
        githubLink:
            "https://github.com/myCSEprojects/hostel-management-system.git",
        description: (
            <>
                Worked in a team of twelve members to develop a Hostel
                Management System using <Skill>MySQL</Skill> as a database and{" "}
                <Skill>Flask</Skill> web application with various views for
                various types of users. Contributed to the project by gathering
                the requirements, proposing the{" "}
                <Component>Entities and relationships</Component>, and
                implementing the <Component>web application</Component>. Created
                an interface for data entry, retrieval, and manipulation using
                Flask library, Jinja templating, and{" "}
                <Skill>Ajax asynchronous requests</Skill>.
            </>
        ),
    },
    {
        title: "Movie Recommendation System",
        githubLink:
            "https://github.com/myCSEprojects/Recommendation_systems-movies-.git",
        description: (
            <>
                Worked in a team of four fellow undergraduates to build a
                semi-realistic Movie recommendation system to provide
                personalized movie suggestions using <Skill>PyTorch</Skill> and{" "}
                <Skill>Streamlit</Skill> library in Python. Learned about the{" "}
                <Skill>Matrix factorization</Skill> method for{" "}
                <Component>recommendation systems</Component> and contributed to
                the project by Implementing it using PyTorch for collaborative
                filtering. Achieved <Result>0.95 RMSE</Result>, using the{" "}
                <Component>MovieLens 1M dataset</Component> for training and
                testing.
            </>
        ),
    },
    {
        title: "Face Recognition System",
        githubLink: "",
        description: (
            <>
                Implemented a classic{" "}
                <Component>Face recognition system</Component> using{" "}
                <Skill> PCA </Skill> algorithm as described in the{" "}
                <Link
                    style={{ textDecoration: "none", color: "#1976d2" }}
                    href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=139758"
                >
                    paper
                </Link>{" "}
                using the <Skill>NumPy</Skill> library in Python. Achieved an{" "}
                <Result>91%</Result>(on test images) in face classification.
            </>
        ),
    },
    {
        title: "Outliers Demo",
        githubLink:
            "https://github.com/VenkataSrimanNarayana/linear-regression-outliers-demo.git",
        description: (
            <>
                Implemented a <Component>interactive demo</Component> project
                for visualizing the effect if outliers along with{" "}
                <Component>regularization</Component> in polynomial linear
                regression. Developed a frontend for better interaction using{" "}
                <Skill>Streamlit</Skill>.
            </>
        ),
    },
    {
        title: "Random Forest Classifier from scratch",
        githubLink: "",
        description: (
            <>
                Implemented a <Component>Random Forest Classifier</Component>{" "}
                using the Random Forest Classifier built from scratch. library
                in Python.
            </>
        ),
    },
    {
        title: "Decision Tree Classifier from scratch",
        githubLink: "",
        description: (
            <>
                Implemented a <Component>Decision Tree</Component> Regressor and
                Classifier from scratch using the <Skill>Numpy</Skill> and{" "}
                <Skill>Pandas</Skill> library in Python.
            </>
        ),
    },
];

export default function ProjectPage() {
    return (
        <>
            <Grid container spacing={"2rem"} padding={"2rem"}>
                {ProjectList.map((project, index) => {
                    return (
                        <Grid item xs={12} md={6} key={index}>
                            <ProjectCard project={project} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}
