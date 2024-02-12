import React, { useState, useEffect } from 'react';
import { Box, Stack, Container, Typography, IconButton, ThemeProvider, AppBar, Toolbar, createTheme} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-scroll';
import desktop from '../src/images/desktop.gif'
import myself from '../src/images/Aung.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const theme = createTheme();

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 30); 
    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return <Typography variant='h5' sx={{fontFamily: 'OCR A Std, monospace'}}>{displayText}</Typography>;
};
/*
 * Mess with some hover css styling for skills section
 * add a class name to the gif and media query it to use on phone
 */

function App() {
  const [showTaskbar, setShowTaskbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowTaskbar(true);
      } else {
        setShowTaskbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position={showTaskbar ? "fixed" : "static"} style={{backgroundColor: 'rgb(32,32,32)'}}>
        <Toolbar>
          <Box sx={{ marginLeft: 'auto',  color: 'white' }}>
            <Link to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
              <Typography variant="button" sx={{ cursor: 'pointer', marginRight: '16px', fontFamily: 'Didot, serif' }}>
                About Me
              </Typography>
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
              <Typography variant="button" sx={{ cursor: 'pointer', marginRight: '16px' , fontFamily: 'Didot, serif'}}>
                Skills
              </Typography>
            </Link>
            <Link to="experience" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
              <Typography variant="button" sx={{ cursor: 'pointer', marginRight: '16px' , fontFamily: 'Didot, serif'}}>
                Experience
              </Typography>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
              <Typography variant="button" sx={{ cursor: 'pointer', marginRight: '16px', fontFamily: 'Didot, serif' }}>
                Projects
              </Typography>
            </Link>
            <Link to="education" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
              <Typography variant="button" sx={{ cursor: 'pointer', fontFamily: 'Didot, serif' }}>
                Education
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Stack direction={"row"} gap={4} paddingTop={20} maxHeight={'1200px'} sx={{ height: '855px', backgroundColor: 'rgb(24,24,24)'}} justifyContent= {'center'}  >
            <Box><Typography variant='h3' fontWeight={'bold'} sx={{fontFamily: 'Andale Mono, monospace'}}>Aung <br/> Kyaw</Typography></Box>
            <Box maxWidth={"400px"}> 
            <Stack direction={"column"}>
              <Box><TypingAnimation
        text="Hi, I'm Aung Kyaw, a passionate Web Developer & Software Engineer based in the Bay Area, San Francisco."
      /> </Box>
              <Box><img src= {myself} alt='myself...' width="250px" height="250px" /></Box>
              </Stack> 
            </Box>
          </Stack>
      <Container>
        <Stack gap={20}>
          <Stack direction={"row"} gap={2} paddingTop={5}>
            <IconButton sx={{color: 'white'}} onClick={() => {window.open("mailto:aungkhantkyaw321@gmail.com", "_blank")}}> <EmailOutlinedIcon fontSize='large'/> </IconButton>
            <IconButton sx={{color: 'white'}} onClick={() => {window.open("https://www.linkedin.com/in/aung-kyaw-b10a982b0/" ,  "_blank")}}> <LinkedInIcon fontSize='large'/> </IconButton>
            <IconButton sx={{color: 'white'}} onClick={() => {window.open("https://github.com/AungKyaw321", "_blank")}}> <GitHubIcon fontSize='large'/> </IconButton>
            <Box marginLeft={50}><img src={desktop} alt="desktop..." width="250px" height= "250px"/></Box>
          </Stack>
          <Stack gap={4} id="about">
            <Typography variant='h6' fontWeight={'bold'} sx={{ fontFamily: 'DejaVu Sans Mono, monospace'}}>About Me</Typography>
            <Stack direction={"row"} gap={"20px"}>
                <IconButton sx={{color: 'white', borderRadius: '0'}} ><ArticleIcon/></IconButton>
                <Stack gap={1}>
                  <Typography sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>I am Aung Khant Kyaw, a Computer Science graduate from UC San Diego with a strong background in Full Stack and Backend development. In my role as a Backend Web Developer Intern at Neuroleap, I built a robust testing framework for backend routes and implemented a block feature for a blog site using NodeJS and Postgres. I collaborated on the "AmongSus Job Tracker," showcasing my proficiency in CSS, HTML, and JS, while applying Agile principles. Additionally, during the COGS 108 course, I led a data analysis project correlating climate change and mental health. With a GPA of 3.67, I earned a B.S. in Computer Science at UC San Diego, complemented by a solid foundation at Ohlone College. Proficient in C, C++, Java, JavaScript, Python, and various web technologies, I am eager to contribute my skills as a dedicated Full Stack/Backend Engineer.</Typography>
                </Stack>
              </Stack>
          </Stack>
          <Stack gap={4} id="skills">
            <Typography variant='h6' fontWeight={'bold'} sx={{ fontFamily: 'DejaVu Sans Mono, monospace'}}>Skills</Typography>
            <Stack gap={2.5} direction={"row"}  justifyContent={"center"}>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>JavaScript</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>HTML5</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>ReactJS</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>CSS</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>MUI</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>ExpressJS</Typography></Box>
            </Stack>
            <Stack gap={2.5} direction={"row"} justifyContent={"center"}>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>Git</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>Python</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}> SQL</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>MongoDB</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>Agile</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>C++</Typography></Box>
              <Box sx={{backgroundColor: 'black', width: 'fit-content', padding: '0.5rem 1rem 0.5rem 1rem'}}><Typography sx={{color: 'white'}}>Java</Typography></Box>
            </Stack>
          </Stack>
          <Stack gap={4} id="experience">
            <Typography variant='h6' fontWeight={'bold'} sx={{ fontFamily: 'DejaVu Sans Mono, monospace'}}>Experience</Typography>
            <Stack direction={"row"} gap={"20px"}>
                <IconButton sx={{color: 'white', borderRadius: '0'}} ><WorkIcon/></IconButton>
                <Stack gap={1}>
                <Typography fontWeight={'bold'} variant='h7'>Neuroleap</Typography>
                  <Typography variant='h8'>Backend Intern</Typography>
                  <Typography sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>In my capacity as a Backend Web Developer Intern at Neuroleap, I have been instrumental in enhancing system robustness and functionality. I spearheaded the development of a comprehensive testing framework, employing industry-standard tools such as Jest, Supertest, and a mock database. This initiative aimed to rigorously evaluate all backend routes, ensuring seamless functionality following any updates or modifications. Furthermore, I leveraged my expertise in NodeJS and Postgres to implement a sophisticated block feature for the blog site. This involved meticulous management of SQL tables in Postgres, ensuring the seamless integration of new data. Additionally, I spearheaded the refactoring of existing routes to seamlessly incorporate the updated block feature, demonstrating my commitment to elevating overall system efficiency and performance.</Typography>
                </Stack>
              </Stack>
          </Stack>
          <Stack gap={4} id="projects">
            <Typography variant='h6' fontWeight={'bold'} sx={{ fontFamily: 'DejaVu Sans Mono, monospace'}}>Projects</Typography>
            <Stack gap={2.5}>
              <Stack direction={"row"} gap={"20px"}>
                <IconButton sx={{color: 'white', borderRadius: '0'}} onClick={() => {window.open("https://github.com/cse110-fa22-group23/cse110-fa22-group23", "_blank")}}><GitHubIcon/></IconButton>
                <Stack gap={1}>
                  <Typography fontWeight={'bold'} variant='h7'> AmongSus Job Tracker</Typography>
                  <Typography variant='h8'>CSS, HTML5, JavaScript, CI/CD pipeline, Jest, Unit Testing</Typography>
                  <Typography sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>Collaborated with nine classmates to develop a professional job tracker web application using CSS, HTML, and JavaScript. Applied Agile principles and implemented advanced features, including filtering by priority and job type, an application status button, and autofill. Employed a CI/CD pipeline and Jest for unit testing to ensure robust functionality.</Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={"20px"}>
                <IconButton sx={{color: 'white', borderRadius: '0'}} onClick={() => {window.open("https://github.com/AungKyaw321/cogs108_Project", "_blank")}}><GitHubIcon/></IconButton>
                <Stack gap={1}>
                <Typography fontWeight={'bold'} variant='h7'>Mental Health and Climate Change Data Visualization</Typography>
                  <Typography variant='h8'>Python, Pandas, Excel</Typography>
                  <Typography sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>Collaborated with four classmates on an analysis project examining the correlation between climate change and mental health. Employed Python for data cleaning, visualization, and analysis using existing datasets. Generated a new dataset to effectively address the research question. </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={"20px"}>
                <IconButton sx={{color: 'white', borderRadius: '0'}} ><GitHubIcon/></IconButton>
                <Stack gap={1}>
                <Typography fontWeight={'bold'} variant='h7'>Personal Website</Typography>
                  <Typography variant='h8'>HTML5, CSS, NodeJS, ReactJS, MUI</Typography>
                  <Typography sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>Elegantly designed personal website featuring HTML5, CSS, Node.js, and React.js for a seamless and interactive user experience. Explore my skills, experiences, and projects with modern design and responsiveness. Powered by Node.js for efficient data handling.</Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={"20px"}>
                <IconButton sx={{color: 'white', borderRadius: '0'}}><GitHubIcon/></IconButton>
                <Stack gap={1}>
                <Typography fontWeight={'bold'} variant='h7'>AmongSus 2.0 (work in progress)</Typography>
                  <Typography variant='h8'>HTML5, CSS, ExpressJS, ReactJS, MongoDb</Typography>
                  <Typography sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>Experience an enhanced version of my AmongSus Job Tracker app, meticulously crafted with HTML5, CSS, Express.js, React.js, and MongoDB. This sophisticated web application seamlessly combines a visually appealing front-end, powered by React.js, with a robust back-end supported by Express.js and MongoDB for efficient data management. Enjoy an intuitive user interface, advanced features, and seamless data storage and retrieval, making job tracking a streamlined and enjoyable process.</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={4} id="education">
            <Typography variant='h6' fontWeight={'bold'} sx={{ fontFamily: 'DejaVu Sans Mono, monospace'}}>Education</Typography>
            <Stack gap={2.5}>
              <Stack direction={"row"} gap={"20px"}>
                <SchoolSharpIcon/>
                <Stack gap={1}>
                  <Typography fontWeight={'bold'} variant='h7'> B.S. Computer Science, UC San Diego</Typography>
                  <Typography variant='h8'>September 2021 - December 2023</Typography>
                  <Typography>GPA: 3.67</Typography>
                  <Typography fontSize={18} sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>Courses: Data Structure, Algorithms, Client/Server-Side Programming, Operating System, Network Security, Programming Languages and CPU Design.</Typography>
                  <Typography fontWeight={'bold'} fontSize={18} sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>Graduating with Provost honors </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={"20px"}>
              <SchoolSharpIcon/>
                <Stack gap={1}>
                <Typography fontWeight={'bold'} variant='h7'>Transfer Student, Ohlone College</Typography>
                  <Typography variant='h8'>Janurary 2019 - May 2021</Typography>
                  <Typography>GPA: 3.95 </Typography>
                  <Typography fontSize={18} sx={{fontFamily: 'DejaVu Sans Mono, monospace'}}>Courses: Data Structure, Algebra, Discrete Math, Mechanics of Solids, Electricity, Magnetism and Heat, Algorithms, Calculus I, II, III </Typography>
                </Stack>
              </Stack>
              <Box height={"100px"}> </Box>
            </Stack>
          </Stack>
          
        </Stack>
      </Container>
      <Stack gap={4} id="contactMe" direction={"column"} alignItems="center" sx={{backgroundColor: 'rgb(32,32,32)'}} paddingTop={5}>
            <Typography variant='h6' fontWeight={'bold'} sx={{ fontFamily: 'DejaVu Sans Mono, monospace'}}>Contact Me</Typography>
            <Stack gap={4} direction="column">
              <Stack direction={"column"} alignItems="center" gap={"20px"}>
                <LocationOnIcon />
                <Stack gap={1} direction="column" alignItems="center">
                  <Typography fontWeight={'bold'} variant='h7'> Location</Typography>
                  <Typography variant='h8'>San Francisco</Typography>
                  <Typography variant='h8'>California</Typography>
                </Stack>
              </Stack>
              <Stack direction={"column"} alignItems="center" gap={"20px"}>
                <EmailIcon />
                <Stack gap={1} direction="column" alignItems="center">
                  <Typography fontWeight={'bold'} variant='h7'>Email</Typography>
                  <Typography variant='h8'>akkyaw@ucsd.edu</Typography>
                  <Typography variant='h8'>aungkhantkyaw321@gmail.com</Typography>
                </Stack>
              </Stack>
              <Stack direction={"column"} alignItems="center" gap={"20px"}>
                <LocalPhoneIcon/>
                <Stack gap={1} direction="column" alignItems="center">
                  <Typography fontWeight={'bold'} variant='h7'>Phone</Typography>
                  <Typography variant='h8'>4123533453</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Box height={"100px"}> </Box>
          </Stack>
    </ThemeProvider>
  );
}

export default App;
