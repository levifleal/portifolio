import { Html5Outlined, JavaScriptOutlined } from "@ant-design/icons";
import { Card, Divider, Flex, Typography, theme } from "antd";
import { Css3Icon, HeadPhonesIcon, JoystickIcon, MonitorIcon, ReactIcon, TypeScriptIcon, WallPaperIcon } from "../assets/svg/exportIcons";

export default function Skill() {

    const {Title} = Typography

    const {
        token: { colorBgContainerDisabled,colorPrimaryText},
      } = theme.useToken();

      


  return (
    <Flex style={{flexDirection:'column',minHeight:'100vh',justifyContent:"center"}}>
{/*Skill*/}<Flex style={{alignItems:'center',justifyContent:"center",padding:25,flexDirection:'column'}}>
                <Title style={{}}>
                    Skills
                </Title>
            <Flex style={{gap:40,flexWrap:'wrap'}}>
{/* html5*/}    <Flex style={{paddingTop:50}}> 
                        <Card style={{
                            width:250,
                            backgroundColor:colorBgContainerDisabled,
                            color:colorPrimaryText,
                            display:"flex",
                            alignItems:'flex-end',
                            height:250
                        }}>
                            <Html5Outlined style={{
                                fontSize:50
                            }}/>
                            <Title style={{margin:0,}} level={4}>HTML5</Title>
                        </Card>
                </Flex>
{/* Js   */}    <Flex style={{paddingTop:50}}>
                        <Card style={{
                            width:250,
                            backgroundColor:colorBgContainerDisabled,
                            color:colorPrimaryText,
                            display:"flex",
                            alignItems:'flex-end',
                            height:250
                        }}>
                            <JavaScriptOutlined style={{
                                fontSize:50
                            }}/>
                            <Title style={{margin:0,}} level={4}>JavaScript</Title>
                        </Card>
                </Flex>
{/* Css3 */}    <Flex style={{paddingTop:50}}>
                        <Card style={{
                            width:250,
                            backgroundColor:colorBgContainerDisabled,
                            color:colorPrimaryText,
                            display:"flex",
                            alignItems:'flex-end',
                            height:250
                        }}>
                            <Css3Icon style={{
                                fontSize:50
                            }}/>
                            <Title style={{margin:0,}} level={4}>Css3</Title>
                        </Card>
                </Flex>
{/* react*/}    <Flex style={{paddingTop:50}}>
                        <Card style={{
                            width:250,
                            backgroundColor:colorBgContainerDisabled,
                            color:colorPrimaryText,
                            display:"flex",
                            alignItems:'flex-end',
                            height:250
                        }}>
                            <ReactIcon style={{
                                fontSize:50
                            }}/>
                            <Title style={{margin:0,}} level={4}>React</Title>
                        </Card>
                </Flex>
{/* TS   */}    <Flex style={{paddingTop:50}}>
                        <Card style={{
                            width:250,
                            backgroundColor:colorBgContainerDisabled,
                            color:colorPrimaryText,
                            display:"flex",
                            alignItems:'flex-end',
                            height:250
                        }}>
                            <TypeScriptIcon style={{
                                fontSize:50
                            }}/>
                            <Title style={{margin:0,}} level={4}>TypeScripit</Title>
                        </Card>
                </Flex>
{/*Design*/}    <Flex style={{paddingTop:50}}>
                        <Card style={{
                            width:250,
                            backgroundColor:colorBgContainerDisabled,
                            color:colorPrimaryText,
                            display:"flex",
                            alignItems:'flex-end',
                            height:250
                        }}>
                            <WallPaperIcon style={{
                                fontSize:50
                            }}/>
                            <Title style={{margin:0,}} level={4}>Design</Title>
                        </Card>
                </Flex>
            </Flex>
        </Flex>
        <Divider></Divider>
{/*hobbies*/}<Flex style={{alignItems:'center',justifyContent:"center",padding:25,flexDirection:'column'}}>
        <Title style={{}}>
            Hobbies
        </Title>
        <Flex style={{gap:40,flexWrap:'wrap'}}>
{/*game */} <Flex style={{paddingTop:50}}>
                    <Card style={{
                        width:250,
                        backgroundColor:colorBgContainerDisabled,
                        color:colorPrimaryText,
                        display:"flex",
                        alignItems:'flex-end',
                        height:250
                    }}>
                        <JoystickIcon  style={{
                            fontSize:50
                        }}/>
                        <Title style={{margin:0,}} level={4}>Jogos eletronicos</Title>
                    </Card>
            </Flex>
{/*music*/} <Flex style={{paddingTop:50}}>
                    <Card style={{
                        width:250,
                        backgroundColor:colorBgContainerDisabled,
                        color:colorPrimaryText,
                        display:"flex",
                        alignItems:'flex-end',
                        height:250
                    }}>
                        <HeadPhonesIcon  style={{
                            fontSize:50
                        }}/>
                        <Title style={{margin:0,}} level={4}>Ouvir Musicas</Title>
                    </Card>
            </Flex>
{/*watch*/} <Flex style={{paddingTop:50}}>
                    <Card style={{
                        width:250,
                        backgroundColor:colorBgContainerDisabled,
                        color:colorPrimaryText,
                        display:"flex",
                        alignItems:'flex-end',
                        height:250
                    }}>
                        <MonitorIcon  style={{
                            fontSize:50
                        }}/>
                        <Title style={{margin:0,}} level={4}>Assistir Series</Title>
                    </Card>
            </Flex>
        </Flex>
            </Flex>
    </Flex>
  )
}
