import { Flex, Typography, theme } from "antd";
import { animated, useInView} from '@react-spring/web';
import { buildInteractionObserverThreshold } from "./Intro";


export default function Sobre() {
    const [ref, inView] = useInView(() => ({
        from: {
            opacity: -1,
            y:-100
          },
          to: {
            opacity: 1,
            y:0
          },
          config:{
            duration:1000
          },
    }),{
      amount: buildInteractionObserverThreshold(),
      rootMargin: '-45% 0px -45% 0px',
  })
    const {
        token: { colorPrimaryTextHover },
      } = theme.useToken();

    const {Title,Text} = Typography
  return (
    <animated.div ref={ref} style={inView}>
        <Flex style={{flexDirection:'column', padding:'50px',justifyContent:'center', minHeight:'75vh'}}>
            <Title style={{
                fontSize:40,
                color:colorPrimaryTextHover
            }}> 
                Sobre mim
            </Title>
            <Text style={{
                fontSize:24,
                maxWidth:1200,
                lineHeight:1
            }}>
                Atualmente sou estudante de Ciências da Computação na Universidade Cruzeiro do Sul, onde estou adquirindo uma sólida base em teoria da computação, programação e sistemas de informação. Paralelamente, estou expandindo minhas habilidades práticas e conhecimento técnico através do projeto Oracle ONE na Alura, que me permite trabalhar com tecnologias emergentes e aplicar o aprendizado em situações do mundo real. Este equilíbrio entre teoria e prática é fundamental para o meu desenvolvimento como profissional de TI, preparando-me para contribuir significativamente para a indústria tecnológica.
            </Text>
        </Flex>

    </animated.div>
  )
}