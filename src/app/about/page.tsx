import Timeline from "@/components/Timeline";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import CodeforcesRatings from "@/components/CodeforcesRatings";
import Container from "@mui/material/Container";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "typeface-dancing-script";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const timelineContent: Array<[string, React.ReactNode, string, Array<string>]> =
    [
        [
            "2023 June-July",
            <LaptopMacIcon />,
            "Publicis Sapient",
            ["Intern Engineer"],
        ],
        [
            "2020-present",
            <LaptopMacIcon />,
            "IIT Gandhinagar",
            ["B.Tech in Computer Science and Engineering", "8.59 CPI"],
        ],
        [
            "2020",
            <AssignmentTurnedInIcon />,
            "JEE Advanced",
            ["All India Rank: 1272"],
        ],
        [
            "2020",
            <AssignmentTurnedInIcon />,
            "AP EAMCET ",
            ["State wise Rank: 78"],
        ],

        [
            "2020",
            <AssignmentTurnedInIcon />,
            "JEE Mains",
            ["All India Rank: 2055"],
        ],
        [
            "2018-2019",
            <SchoolIcon />,
            "FIITJEE Junior College(BIE-AP)",
            [
                "Class XII, Board of Intermediate Education Andhra Pradesh",
                "Score: 97.5%",
            ],
        ],
        [
            "2016-2017",
            <BookIcon />,
            "TRIPS International School(CBSE)",
            ["Class X, CBSE", "10 CGPA"],
        ],
    ];

const languages = [
    "Python",
    "C++",
    "C",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Verilog",
];

const tools = [
    "Docker",
    "Shell",
    "Azure CLI",
    "Visual Studio Code",
    "Anaconda",
    "MySQL",
    "Autodesk Inventor",
];

const libraries = [
    "LangChain",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "PyTorch",
    "Flask",
    "React",
];

export default async function AboutPage() {
    // Get My code forces rating from link
    const res = await fetch(
        "https://codeforces.com/api/user.rating?handle=DoOmGuY007",
        {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    );

    const typingStatRes = await fetch(
        "https://api.monkeytype.com/users/mvsn/profile",
        {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    );

    const data = await res.json();
    const typingStatData = await typingStatRes.json();
    return (
        <>
            {/* Introduction Container */}
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "#F8E2CF",
                    paddingTop: "9rem",
                    position: "relative",
                    textAlign: "center",
                    overflow: "hidden",
                    color: "#461e18",
                }}
            >
                <img
                    style={{
                        position: "absolute",
                        left: "67%",
                        top: "5rem",
                    }}
                    src="/cloud.png"
                    alt="cloud"
                />
                <Typography
                    variant="h1"
                    align="center"
                    fontFamily={"Dancing Script"}
                    fontWeight={"bold"}
                    position={"relative"}
                    zIndex={10}
                    marginBottom={"0.5rem"}
                >
                    I'm Sriman
                </Typography>
                <Typography variant="h4" align="center" fontWeight="lighter">
                    a{" "}
                    <span
                        style={{
                            textDecoration: "underline",
                        }}
                    >
                        pro
                    </span>
                    grammer
                </Typography>
                <img
                    style={{
                        position: "absolute",
                        right: "67%",
                        zIndex: 10,
                    }}
                    src="/cloud.png"
                    alt="cloud"
                />
                <img
                    style={{
                        position: "relative",
                        bottom: "-5px",
                    }}
                    src="/mountain.png"
                    alt="mountain"
                />
            </Container>
            <Container
                sx={{
                    display: { xs: "none", sm: "block" },
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    backgroundColor: "#fff6f0",
                }}
            >
                {/* Basic container for introduction */}
                <Container>
                    <img
                        src="/passport.jpeg"
                        style={{
                            width: "12rem",
                            margin: "1.5rem",
                            float: "left",
                            borderRadius: "0 20% 0 20% ",
                        }}
                    />
                </Container>
                <Typography
                    variant="body1"
                    align="left"
                    sx={{ margin: "1rem", padding: "1rem" }}
                >
                    I'm a senior undergraduate student at IIT Gandhinagar.
                    Throughout my academic journey in computer science and
                    engineering, I've been driven by a passion for practical
                    problem-solving and a results-oriented approach. My
                    proficiency in programming languages, particularly Python
                    and C++, forms the solid foundation of my skill set. These
                    languages empower me to excel in various challenges, whether
                    it's developing efficient code, designing complex systems,
                    or managing project development. I view technology as a
                    practical tool rather than an end in itself. My primary
                    objective is to leverage technology to comprehend intricate
                    systems and create tangible solutions for real-world
                    problems. I firmly believe in the application of technology
                    to deliver meaningful results. Collaboration plays a central
                    role in my approach. I thrive when working alongside
                    individuals who share my passion, as I believe that the
                    exchange of ideas and the incorporation of diverse
                    perspectives often lead to more innovative solutions. I
                    value collaboration as it mirrors the dynamics of real-world
                    job environments, and I am committed to bringing practical,
                    results-oriented problem-solving to every project I
                    undertake.
                </Typography>
            </Container>
            <Container
                sx={{
                    display: { xs: "block", sm: "none" },
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    backgroundColor: "#fff6f0",
                }}
            >
                <Container
                    sx={{
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/passport.jpeg"
                        style={{
                            display: "block",
                            width: "12rem",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    />
                </Container>

                <Typography
                    variant="body1"
                    align="justify"
                    sx={{ margin: "0.5rem" }}
                >
                    My name is Venkata Sriman Narayana Malli, and I'm a senior
                    undergraduate student at IIT Gandhinagar. Throughout my
                    academic journey in computer science and engineering, I've
                    been driven by a passion for practical problem-solving and a
                    results-oriented approach. My proficiency in programming
                    languages, particularly Python and C++, forms the solid
                    foundation of my skill set. These languages empower me to
                    excel in various challenges, whether it's developing
                    efficient code, designing complex systems, or managing
                    project development. I view technology as a practical tool
                    rather than an end in itself. My primary objective is to
                    leverage technology to comprehend intricate systems and
                    create tangible solutions for real-world problems. I firmly
                    believe in the application of technology to deliver
                    meaningful results. Collaboration plays a central role in my
                    approach. I thrive when working alongside individuals who
                    share my passion, as I believe that the exchange of ideas
                    and the incorporation of diverse perspectives often lead to
                    more innovative solutions. I value collaboration as it
                    mirrors the dynamics of real-world job environments, and I
                    am committed to bringing practical, results-oriented
                    problem-solving to every project I undertake.
                </Typography>
            </Container>
            <Container
                sx={{
                    backgroundColor: "#F8E2CF",
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                }}
            >
                <Grid container sx={{ margin: "1rem" }}>
                    <Grid item sm={12} md={3}>
                        <Typography
                            variant="h5"
                            sx={{ color: "#4e1617", display: "block" }}
                        >
                            Languages
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={9}>
                        {languages.map((language, index) => (
                            <Chip
                                key={index}
                                label={language}
                                size="small"
                                color="primary"
                                variant="outlined"
                                sx={{
                                    margin: "0.2rem",
                                    fontWeight: "bold",
                                }}
                            />
                        ))}
                    </Grid>
                </Grid>
                <Grid container sx={{ margin: "1rem" }}>
                    <Grid item sm={12} md={3}>
                        <Typography
                            variant="h5"
                            sx={{ color: "#4e1617", display: "block" }}
                        >
                            Tools
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={9}>
                        {tools.map((tool, index) => (
                            <Chip
                                key={index}
                                label={tool}
                                size="small"
                                color="warning"
                                variant="outlined"
                                sx={{
                                    margin: "0.2rem",
                                    fontWeight: "bold",
                                }}
                            />
                        ))}
                    </Grid>
                </Grid>
                <Grid container sx={{ margin: "1rem" }}>
                    <Grid item sm={12} md={3}>
                        <Typography
                            variant="h5"
                            sx={{ color: "#4e1617", display: "block" }}
                        >
                            Libraries
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={9}>
                        {libraries.map((library, index) => (
                            <Chip
                                key={index}
                                label={library}
                                size="small"
                                color="secondary"
                                variant="outlined"
                                sx={{
                                    margin: "0.2rem",
                                    fontWeight: "bold",
                                }}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
            {/* Timeline content */}

            <Container
                maxWidth={false}
                sx={{
                    paddingBottom: "5rem",
                    paddingTop: "5rem",
                    backgroundColor: "#fff6f0",
                }}
            >
                <Grid container>
                    <Grid
                        item
                        sm={12}
                        md={6}
                        sx={{ margin: "auto" }}
                        order={{ sm: 1, md: 2 }}
                    >
                        <Typography
                            variant="h3"
                            align="center"
                            margin="auto"
                            color={"#461e18"}
                        >
                            My Timeline
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6} order={{ sm: 2, md: 1 }}>
                        <Timeline content={timelineContent} />
                    </Grid>
                </Grid>
            </Container>

            {/* Codeforces Container */}
            <Container
                maxWidth={false}
                sx={{
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    backgroundColor: "#F8E2CF",
                }}
            >
                <Grid container>
                    <Grid item sm={12} md={4} sx={{ margin: "auto" }}>
                        <Typography
                            variant="h3"
                            align="center"
                            margin="auto"
                            color="#461e18"
                        >
                            My Codeforces Rating
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        md={8}
                        sx={{
                            margin: "auto",
                            maxWidth: "100vw",
                            overflowX: "auto",
                            overflowY: "hidden",
                        }}
                    >
                        <CodeforcesRatings data={data.result} />
                    </Grid>
                </Grid>
            </Container>

            {/*Typing Speed Container */}
            <Container
                maxWidth={false}
                sx={{
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    backgroundColor: "#fff6f0",
                }}
            >
                <Container>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Typography variant="h4" color="#4e1617" gutterBottom>
                            Typing Stats
                        </Typography>

                        <Box display="flex" alignItems="center">
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={2}
                            >
                                <SpeedIcon
                                    style={{ fontSize: 64, color: "#1976D2" }}
                                />
                                <Typography variant="h6">
                                    Typing Speed
                                </Typography>
                                <Typography variant="h4" align="center">
                                    {
                                        typingStatData["data"]["personalBests"][
                                            "time"
                                        ]["30"][0]["wpm"]
                                    }{" "}
                                    WPM
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={2}
                            >
                                <CheckCircleIcon
                                    style={{ fontSize: 64, color: "#388E3C" }}
                                />
                                <Typography variant="h6">Accuracy</Typography>
                                <Typography variant="h4" align="center">
                                    {
                                        typingStatData["data"]["personalBests"][
                                            "time"
                                        ]["30"][0]["acc"]
                                    }
                                    %
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </>
    );
}
