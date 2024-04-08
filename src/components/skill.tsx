import { Html5Outlined, JavaScriptOutlined } from "@ant-design/icons";
import { Divider, Flex, Typography } from "antd";
import { Css3Icon, HeadPhonesIcon, JoystickIcon, MonitorIcon, ReactIcon, TypeScriptIcon, WallPaperIcon } from "../assets/svg/exportIcons";
import Cards from "./cards";
import { a, animated,useInView, useSpring, useTrail } from "@react-spring/web";
import React from "react";
import { buildInteractionObserverThreshold } from "./Intro";


const Trail: React.FC<{ open: boolean, children:any }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 10, tension: 280, friction: 60 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
      delay: open? -1: 1
    })
    return (
      <Flex style={{flexDirection:'row',gap:40,flexWrap:'wrap'}}>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={style}>
                {items[index]}
          </a.div>
        ))}
      </Flex>
    )
  }






export default function Skill() {

    const {Title} = Typography

    const skills= [
        {
            label: 'HTML5' ,
            icon: <Html5Outlined/>
        },
        {
            label:"JavaScript",
            icon: <JavaScriptOutlined/>
        },
        {
            label:"CSS3",
            icon: <Css3Icon />
        },
        {
            label:"React",
            icon: <ReactIcon />
        },
        {
            label:"TypeScript",
            icon: <TypeScriptIcon />
        },
        {
            label:"Design",
            icon: <WallPaperIcon />
        },
    ]

    const hobbies = [
        {
            label:'Jogar',
            icon: <JoystickIcon />
        },
        {
            label:'Ouvir Musicas',
            icon: <HeadPhonesIcon />
        },
        {
            label:'Assistir Series',
            icon: <MonitorIcon />
        },
    ]

    const [ref, isInView] = useInView(
        {
          rootMargin: '-45% 0px -45% 0px',
          amount: buildInteractionObserverThreshold(),
        }
      )

    const title = useSpring({
      y:isInView? 0 : 100,
      opacity:isInView? 1: -1
    })


  return (
    <animated.div ref={ref}>
        <Flex style={{flexDirection:'column',minHeight:'100vh',justifyContent:"center"}}>
                <Flex style={{alignItems:'center',justifyContent:"center",padding:25,flexDirection:'column'}}>
                        <animated.div style={title}>
                          <Title>
                              Skills
                          </Title>
                        </animated.div>
                        <Flex>
                          <Trail open={isInView}>
                            {skills.map((item) =>  <Cards item={item}/>)}
                          </Trail>
                        </Flex>
                </Flex>
                <Divider></Divider>
                <Flex style={{alignItems:'center',justifyContent:"center",padding:25,flexDirection:'column'}}>
                  <animated.div style={title}>
                    <Title style={{}}>
                        Hobbies
                    </Title>
                  </animated.div>
                    <Flex style={{gap:40,flexWrap:'wrap'}}>
                      <Trail open={isInView}>
                        {hobbies.map((item) =>  <Cards item={item}/>)}
                      </Trail>
                    </Flex>
                </Flex>
        </Flex>
    </animated.div>
  )
}
