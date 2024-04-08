import { Button, Flex, Image, Space, Typography, theme } from "antd";

export default function ProjCards(props:any) {
    
    const {Title} = Typography

    const {
        token: { colorPrimaryBg },
      } = theme.useToken();

    const item = props.item

  return (
    <Flex style={{borderRadius:10,backgroundColor:colorPrimaryBg,width:'100%',flexWrap:'wrap'}}>
        {item.r?<Image style={{ borderRadius:'10px 0 0 10px',maxWidth:650}} preview={{
            toolbarRender: (
            _,
            ) => (
            <Space>
            </Space>
            ),
        }} src={item.img}/>:null}
        <Flex style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center', padding:40}}>
            <Title>
                {item.title}
            </Title>
            <Flex style={{flexDirection:'column',gap:10}}>
                <Button href={item.site} target="_blank" type="primary">
                    Ver Site
                </Button>
                <Button href={item.rep} target="_blank">
                    Ver Repositorio
                </Button>
            </Flex>
        </Flex>
        {item.l?<Image style={{ borderRadius:'0 10px 10px 0',maxWidth:650}} preview={{
            toolbarRender: (
            _,
            ) => (
            <Space>
            </Space>
            ),
        }} src={item.img}/>:null}
    </Flex>
  )
}
