import { Card, Flex, Typography, theme } from 'antd'

export default function Cards(props:any) {
    const {
        token: { colorBgContainerDisabled,colorPrimaryText},
      } = theme.useToken();

      const {Title} = Typography

      const item = props.item
  return (
    <Flex style={{paddingTop:50}}> 
            <Card style={{
                width:250,
                backgroundColor:colorBgContainerDisabled,
                color:colorPrimaryText,
                display:"flex",
                alignItems:'flex-end',
                height:250
            }}>
                <div style={{
                        fontSize:50
                    }}> 
                    {item.icon}
                </div>
                <Title style={{margin:0,}} level={4}>{item.label}</Title>
            </Card>
    </Flex>
  )
}
