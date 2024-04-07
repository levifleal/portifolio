import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { animated, useInView, useSpring } from '@react-spring/web';
import { Flex, Image, Typography, theme } from 'antd'
import { MoveDownIcon, MoveUpRightIcon, Newspaper } from 'lucide-react'

export const buildInteractionObserverThreshold = (count = 100) => {
    const threshold = []
  
    const parts = 1 / count
  
    for (let i = 0; i <= count; i++) {
      threshold.push(parseFloat((parts * i).toFixed(2)))
    }
  
    return threshold
  }

export default function Intro() {
    

    const {
        token: { colorPrimaryText },
      } = theme.useToken();

    const {Title} = Typography

    const [img] = useSpring(() =>({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            duration:750,
          },
      }))

    const [text] = useSpring(() => ({
        from: {
            x:1000,
            opacity:-1
        },
        to: {
            x:0,
            opacity:1

        },
        delay: 500,
      }))

    const [GitHub] = useSpring(() =>({
        from:{
            y:-75,
            opacity:-1
        },
        to:{
            y:0,
            opacity:1
        },
        delay:1250,
    }))

    const [LinkedIn] = useSpring(() => ({
        from:{
            y:-75,
            opacity:-1
        },
        to:{
            y:0,
            opacity:1
        },
        delay:1500,
    }))

    const [Curriculo] = useSpring(() => ({
        from:{
            y:-75,
            opacity:-1
        },
        to:{
            y:0,
            opacity:1
        },
        delay:1750,
    }))

    const [ref, inView] = useInView(() => ({
         from: {
            opacity: -1,
          },
          to: {
            opacity: 1,
          },
          config:{
            duration:1000
          }
    }),{
        amount: buildInteractionObserverThreshold(),
    })


  return (
    <animated.div ref={ref} style={inView} >
        <Flex wrap='wrap-reverse' style={{padding:10, margin: '25px 10px',alignItems:'center',minHeight:'100vh'}}>
            <Flex flex={2} style={{flexDirection:'column',padding:'0 25px',alignItems:'center',justifyContent:'center'}}>
                    <animated.div style={text}>
                        <Title level={1}  style={{fontSize:40,color:colorPrimaryText,minWidth:200,}} >
                            Bem vindo ao meu portfolio,<br/>
                            Meu nome é
                            <Title style={{
                                paddingLeft:10,display:'inline', fontSize:42
                            }}
                            > Levi Ferreira Leal
                            </Title><br/>
                            Sou um jovem buscando ser um Dev. Front-End
                        </Title>
                    </animated.div>
                <Flex wrap='wrap'  style={{gap:50}}>
                    <animated.div style={GitHub}>
                        <Flex  onClick={() =>{}} style={{gap:10,}}>
                            <GithubFilled style={{fontSize:16,alignSelf:'center',}}/>
                            <Title level={3} style={{alignSelf:'center',margin:0, padding: 0}}>
                                GitHub
                            </Title>
                            <MoveUpRightIcon size={16} style={{alignSelf:'center'}}   color='white' />
                        </Flex>
                    </animated.div>
                    <animated.div style={LinkedIn}>
                        <Flex  onClick={() =>{}} style={{gap:10,}}>
                            <LinkedinFilled style={{fontSize:16,alignSelf:'center'}} />
                            <Title level={3} style={{alignSelf:'center',margin:0, padding: 0}}>
                                LinkedIn
                            </Title>
                            <MoveUpRightIcon size={16} style={{alignSelf:'center'}}   color='white' />
                        </Flex>
                    </animated.div>
                    <animated.div style={Curriculo}>
                        <Flex  onClick={() =>{}} style={{gap:10,}}>
                            <Newspaper size={16} style={{alignSelf:'center'}}   color='white' />
                            <Title level={3} style={{alignSelf:'center',margin:0, padding: 0}}>
                                Currículo
                            </Title>
                            <MoveDownIcon size={16} style={{alignSelf:'center'}}   color='white' />
                        </Flex>
                    </animated.div>
                </Flex>
            </Flex>
            <Flex flex={1} style={{padding:'0 25px'}}>
                <animated.div style={img}>
                    <Image style={{borderRadius:'100%',maxWidth:350, minWidth:150, }} placeholder src="https://2.gravatar.com/avatar/0aa54c5449234e127cd1662e9b8b50ebdc00638602048ea2932f6d1eda7507db?size=512" preview={false}/>
                </animated.div>
            </Flex>
        </Flex>
    </animated.div>
  )
}
