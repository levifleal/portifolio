import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { a, easings, useInView, useSpring } from '@react-spring/web';
import { Flex, Image, Typography, theme } from 'antd'
import { ChevronsDown, MoveDownIcon, MoveUpRightIcon, Newspaper } from 'lucide-react'
import { useEffect, useState } from 'react';

export const buildInteractionObserverThreshold = (count = 100) => {
    const threshold = []
  
    const parts = 1 / count
  
    for (let i = 0; i <= count; i++) {
      threshold.push(parseFloat((parts * i).toFixed(2)))
    }
  
    return threshold
  }

export default function Intro() {
    const [forward, setForward] = useState(false)

    const [ref, inView] = useInView({
        amount: buildInteractionObserverThreshold(),
        rootMargin: '-45% 0px -45% 0px',
    })

    const {
        token: { colorPrimaryText },
      } = theme.useToken();

    const {Title,Text} = Typography

    const img = useSpring({
        opacity: inView? 1 : -1,
        immediate:!inView,
        config: {
            duration:750,
          },
      })

    const text = useSpring({
        x: inView ? 0 : 1000,
        opacity: inView? 1 : -1,
        delay:inView? 500: -500,
      })

    const GitHub = useSpring({
        y: inView ? 0 : -75,
        opacity: inView? 1 : -1,
        delay:inView? 1250: -1250,
    })

    const LinkedIn = useSpring({
        y: inView ? 0 : -75,
        opacity: inView? 1 : -1,
        delay:inView? 1500: -1500,
    })

    const Curriculo = useSpring({
        y: inView ? 0 : -75,
        opacity: inView? 1 : -1,
        delay:inView? 1750: -1750,
    })
    
    const scroll = useSpring({
        opacity:inView? 1 : -1,
        y:inView? 0 : -10
    })

    const seta = useSpring({
        y: forward ? 5 : -5, 
        opacity:inView? 1: -1, 
        easing: easings.easeInOutBounce(50)    
    })
    
    useEffect(() => {
        setTimeout(() => setForward(!forward),500)
    },[forward])
    

  return (
    <a.div ref={ref}>
        <Flex wrap='wrap-reverse' style={{padding:10,alignItems:'center',minHeight:'90vh'}}>
            <Flex flex={2} style={{flexDirection:'column',padding:'0 25px',alignItems:'center',justifyContent:'center',gap:10}}>
                    <a.div style={text}>
                        <Title level={1}  style={{fontSize:40,color:colorPrimaryText,minWidth:200,margin:0}} >
                            Bem vindo ao meu portfolio,<br/>
                            Meu nome é
                            <Title style={{
                                paddingLeft:10,display:'inline', fontSize:42
                            }}
                            > Levi Ferreira Leal
                            </Title><br/>
                            Sou um jovem buscando ser um Dev. Front-End
                        </Title>
                    </a.div>
                <Flex wrap='wrap'  style={{gap:50}}>
                    <a.div style={GitHub}>
                        <Flex  onClick={() =>{}} style={{gap:10,}}>
                            <GithubFilled style={{fontSize:16,alignSelf:'center',}}/>
                            <Title level={3} style={{alignSelf:'center',margin:0, padding: 0}}>
                                GitHub
                            </Title>
                            <MoveUpRightIcon size={16} style={{alignSelf:'center'}}   color='white' />
                        </Flex>
                    </a.div>
                    <a.div style={LinkedIn}>
                        <Flex  onClick={() =>{}} style={{gap:10,}}>
                            <LinkedinFilled style={{fontSize:16,alignSelf:'center'}} />
                            <Title level={3} style={{alignSelf:'center',margin:0, padding: 0}}>
                                LinkedIn
                            </Title>
                            <MoveUpRightIcon size={16} style={{alignSelf:'center'}}   color='white' />
                        </Flex>
                    </a.div>
                    <a.div style={Curriculo}>
                        <Flex  onClick={() =>{}} style={{gap:10,}}>
                            <Newspaper size={16} style={{alignSelf:'center'}}   color='white' />
                            <Title level={3} style={{alignSelf:'center',margin:0, padding: 0}}>
                                Currículo
                            </Title>
                            <MoveDownIcon size={16} style={{alignSelf:'center'}}   color='white' />
                        </Flex>
                    </a.div>
                </Flex>
            </Flex>
            <Flex flex={1} style={{padding:'0 25px'}}>
                <a.div style={img}>
                    <Image style={{borderRadius:'100%',maxWidth:350, minWidth:150, }} placeholder src="https://2.gravatar.com/avatar/0aa54c5449234e127cd1662e9b8b50ebdc00638602048ea2932f6d1eda7507db?size=512" preview={false}/>
                </a.div>
            </Flex>
        </Flex>
        <Flex style={{padding:10,alignItems:'center', justifyContent:'center',minHeight:'10vh'}}>
            <a.div style={scroll}>
                <Text style={{margin:0,fontSize:20}}>
                    Continue rolando a pagina
                </Text>
            </a.div>
            <a.div style={{paddingLeft:5,height:20, ...seta}}>
                <ChevronsDown width={20}/>
            </a.div>
        </Flex>
    </a.div>
  )
}
