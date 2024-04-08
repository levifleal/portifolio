import { Flex, Typography } from "antd";
import FormCard from "./formCard";
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
      <Flex style={{flexDirection:'row',flexWrap:'wrap'}}>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={style}>
                {items[index]}
          </a.div>
        ))}
      </Flex>
    )
  }


export default function Formacao() {

    const {Title} = Typography

    const formacoes = [
        {
            title:'JAVASCRIPT COM FOCO NO BACK-END',
            concludAt:'Concluído em 07/01/2023',
            conclud:true,
            img:'https://vagasremotas.net/wp-content/uploads/2024/04/image.png',
        },
        {
            title:'INICIANTE EM PROGRAMAÇÃO T6 - ONE',
            concludAt:'Concluído em 22/01/2024',
            conclud:true,
            img:'https://vagasremotas.net/wp-content/uploads/2024/04/image.png',
        },
        {
            title:'Ciencias Da Computação',
            concludAt:'Iniciado em 01/01/2024 - Espectativa 12/29',
            conclud:false,
            img:'https://onetclub.com.br/wp-content/uploads/2019/04/c-unicsul.jpg',
        },
    ]

    const [ref, inView] = useInView({
        amount: buildInteractionObserverThreshold(),
        rootMargin: '-45% 0px -45% 0px',
    })

    const text = useSpring({
        y:inView? 0 : -100,
        opacity:inView? 1 : -1
    })


  return (
    <a.div ref={ref}>
        <Flex style={{justifyContent:"center",alignItems:'center',padding:25,flexDirection:'column'}}>
            <a.div style={text}>
                <Title>Minhas Formações</Title>
            </a.div>
            <Flex >
                <Trail open={inView}>
                    {formacoes.map((item) => <FormCard item={item}/>)}
                </Trail>
            </Flex>
        </Flex>
    </a.div>
  )
}