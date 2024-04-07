import { Button, FloatButton, Layout, Menu, theme } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import Intro from "./components/Intro";
import { ChevronLeft, ChevronRight} from "lucide-react";
import { BrainCircuitIcon, CircleUserIcon, FolderOpenIcon, GraduationCapIcon, PhoneIcon } from "./assets/svg/exportIcons";
import Sobre from "./components/sobre";
import { HomeOutlined } from "@ant-design/icons";
import Skill from "./components/skill";
import Formacao from "./components/Formacao";
import Projetos from "./components/projetos";
import Contato from "./components/contato";



function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedWidth,setCollapsedWidth] = useState(80)

  const handleClickScroll = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const {
    token: { colorBgContainer, borderRadiusSM,colorPrimaryBg, colorBgElevated },
  } = theme.useToken();

  const navItems = [
    {
      key: '1',
      icon: <HomeOutlined/>,
      label: 'Inicio',
      onClick: () => {handleClickScroll("inicio")} ,
    },
    {
      key: '2',
      icon: <CircleUserIcon/>,
      label: 'Sobre mim',
      onClick: () => {handleClickScroll("sobre")} ,
    },
    {
      key: '3',
      icon: <BrainCircuitIcon/>,
      label: 'Skills / Hobbies',
      onClick: () => {handleClickScroll("skills")},
    },
    {
      key: '5',
      icon: <GraduationCapIcon/>,
      label: 'Formação',
      onClick: () => {handleClickScroll("formacao")}
    },
    {
      key: '6',
      icon: <FolderOpenIcon/>,
      label: 'Projetos',
      onClick: () => {handleClickScroll("projetos")}
    },
    {
      key: '7',
      icon: <PhoneIcon/>,
      label: 'Contato',
      onClick: () => {handleClickScroll("contato")}
    },
  ]

  


  return (
    <>
      <Layout>
        <Sider breakpoint="lg" onBreakpoint={(broken) => {
          if(broken)setCollapsedWidth(0)
          else setCollapsedWidth(80)

        }} collapsedWidth={collapsedWidth} trigger={
        <Button
            type="text"
            icon={collapsed ? <ChevronRight /> : <ChevronLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width:'100%',
              height:'100%',
              backgroundColor:colorBgElevated,
            }}
          />
          } collapsible collapsed={collapsed} style={{ overflow: 'auto', left: 0, top: 0, bottom: 0,position:'fixed',paddingTop:50, backgroundColor:colorBgElevated,   }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={navItems}
            style={{
              backgroundColor:colorBgElevated,
              borderColor: colorBgElevated
            }}
          />
        </Sider>
        <Layout style={{ marginLeft: collapsedWidth == 0? 0: collapsed? 80 : 200 }}>
          <Content
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusSM,
            
          }}
        >
          <Content id="inicio">
          <Intro />
          </Content>

          <Content id="sobre" style={{
            background:colorPrimaryBg ,
          }} >
            <Sobre/>
          </Content>


          <Content id="skills">
            <Skill/>
          </Content>

          <Content id="formacao" style={{
            background:colorPrimaryBg ,
          }}>
            <Formacao/>
          </Content>

          <Content id="projetos">
            <Projetos />
          </Content>

          <Content id="contato" style={{
            background:colorPrimaryBg ,
          }}>
            <Contato />
          </Content>
          <FloatButton.BackTop/>
        </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
