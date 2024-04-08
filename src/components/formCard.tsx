import { CheckCircleFilled, LoadingOutlined } from '@ant-design/icons'
import { Card, Flex, Image, Typography } from 'antd'




export default function FormCard(props:any) {

    const { Title,Text } = Typography

    const item = props.item

  return (
    <Flex style={{padding:20,height:'100%'}}> 
        <Card style={{maxWidth:300,padding:0}} cover={
            <Image preview={false} src={item.img} style={{maxWidth:300,overflow:'clip'}} />
            }>
            <Flex>
                {item.conclud?<CheckCircleFilled/>:<LoadingOutlined/>}
                <Text style={{paddingLeft:5}}>
                {item.concludAt}
                </Text>
            </Flex>
            <Title level={2}>
            {item.title}
            </Title>
            
        </Card>
    </Flex>
  )
}
