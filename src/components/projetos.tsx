import { Flex, Image, Typography, theme } from "antd";
import decod from '../assets/decod.png'
import meteora from '../assets/meteora.png'
import ProjCards from "./projCards";
import { a, useInView, useSpring, useTrail } from "@react-spring/web";
import React from "react";
import { buildInteractionObserverThreshold } from "./Intro";


const Trail: React.FC<{ open: boolean, children:any }> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { tension: 280, friction: 60},
      opacity: open ? 1 : -1,
      x: open ? 0 : 40,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
      delay: open? -1: 1,
      
    })
    return (
      <Flex style={{minWidth:'80vw',padding:'50px 0',alignItems:'center',flexDirection:'column',gap:50}}>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={{width:'100%',...style}}>
                {items[index]}
          </a.div>
        ))}
      </Flex>
    )
  }





export default function Projetos() {

    const {Title} = Typography

    const {
        token: { colorPrimaryBg },
      } = theme.useToken();

    const [ref, inView] = useInView({
    amount: buildInteractionObserverThreshold(),
    rootMargin: '-45% 0px -45% 0px',
    })

    const text = useSpring({
        y:inView? 0 : -100,
        opacity:inView? 1 : -1
    })

    

    const projs = [
        {
            title:'Codificador / Decodificador de textos',
            r:true,
            site:'https://decodificador.levileal.com/',
            rep:"https://github.com/levifleal/OneChallenge",
            img:decod
        },
        {
            title:'Loja virtual Meteora project',
            l:true,
            site:'https://meteoraproject.levileal.com/',
            rep:'https://github.com/levifleal/AluraChallange-07',
            img:meteora
        },
    ]
    



  return (
    <a.div ref={ref}>
        <Flex style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Flex style={{minWidth:'80vw',padding:'50px 0',alignItems:'center',flexDirection:'column'}}>
                <a.div style={text}>
                    <Title>
                        Projetos
                    </Title>
                </a.div>
                <Trail open={inView} >
                    {projs.map((item) => <ProjCards item={item} />)}
                    <Flex style={{borderRadius:10,backgroundColor:colorPrimaryBg,width:'100%'}}>
                        <Flex style={{gap:10,flex:1,alignItems:'center',justifyContent:'center', padding:40}}>
                            <Image style={{width:25}} preview={false} src="https://seguramos.pt/wp-content/uploads/2022/11/obras.svg" />
                            <Title style={{margin:0,padding:0}}>
                                FAZENDO MAIS PROJETOS
                            </Title>
                            <Image style={{width:25}} preview={false} src="https://seguramos.pt/wp-content/uploads/2022/11/obras.svg" />
                        </Flex>
                </Flex>
                </Trail>
                
            </Flex>
    </Flex>
    </a.div>
  )
}
