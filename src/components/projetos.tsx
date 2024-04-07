import { Button, Flex, Image, Space, Typography, theme } from "antd";
import decod from '../assets/decod.png'
import meteora from '../assets/meteora.png'

export default function Projetos() {

    const {Title} = Typography

    const {
        token: { colorPrimaryBg },
      } = theme.useToken();

  return (
    <Flex style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Flex style={{minWidth:'80vw',padding:'50px 0',alignItems:'center',flexDirection:'column',gap:50}}>
                <Flex style={{borderRadius:10,backgroundColor:colorPrimaryBg,width:'100%'}}>
                        <Image style={{ borderRadius:'10px 0 0 10px',maxWidth:650}} preview={{
                            toolbarRender: (
                            _,
                            ) => (
                            <Space>
                            </Space>
                            ),
                        }} src={decod}/>
                        <Flex style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center', padding:40}}>
                            <Title>
                                Codificador / Decodificador de textos
                            </Title>
                            <Flex style={{flexDirection:'column',gap:10}}>
                                <Button href="https://decodificador.levileal.com/" target="_blank" type="primary">
                                    Ver Site
                                </Button>
                                <Button href="https://github.com/levifleal/OneChallenge" target="_blank">
                                    Ver Repositorio
                                </Button>
                            </Flex>
                        </Flex>
                </Flex>
                <Flex style={{borderRadius:10,backgroundColor:colorPrimaryBg,width:'100%'}}>
                        <Flex style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center', padding:40}}>
                            <Title>
                                Loja virtual Meteora project
                            </Title>
                            <Flex style={{flexDirection:'column',gap:10}}>
                                <Button href="https://meteoraproject.levileal.com/" target="_blank" type="primary">
                                    Ver Site
                                </Button>
                                <Button href="https://github.com/levifleal/AluraChallange-07" target="_blank">
                                    Ver Repositorio
                                </Button>
                            </Flex>
                        </Flex>
                        <Image  style={{flex:1, borderRadius:'0 10px 10px 0',maxWidth:650}} preview={{
                            toolbarRender: (
                            _,
                            ) => (
                            <Space>
                            </Space>
                            ),
                        }} src={meteora}/>
                </Flex>
                <Flex style={{borderRadius:10,backgroundColor:colorPrimaryBg,width:'100%'}}>
                        <Flex style={{gap:10,flex:1,alignItems:'center',justifyContent:'center', padding:40}}>
                            <Image style={{width:25}} preview={false} src="https://seguramos.pt/wp-content/uploads/2022/11/obras.svg" />
                            <Title style={{margin:0,padding:0}}>
                                FAZENDO MAIS PROJETOS
                            </Title>
                            <Image style={{width:25}} preview={false} src="https://seguramos.pt/wp-content/uploads/2022/11/obras.svg" />
                        </Flex>
                </Flex>
            </Flex>
    </Flex>
  )
}
