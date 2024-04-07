import { CheckCircleFilled, LoadingOutlined } from "@ant-design/icons";
import { Card, Flex, Image, Typography } from "antd";

export default function Formacao() {

    const {Title,Text} = Typography


  return (
    <Flex style={{justifyContent:"center",alignItems:'center',padding:25,flexDirection:'column'}}>
        <Title>Minhas Formações</Title>
        <Flex >
            <Flex style={{padding:20}}> 
                <Card style={{maxWidth:300,padding:0}} cover={<Image preview={false} src="https://vagasremotas.net/wp-content/uploads/2024/04/image.png" style={{maxWidth:300,overflow:'clip'}} />}>
                <Flex>
                    <CheckCircleFilled/>
                    <Text style={{paddingLeft:5}}>
                    Concluído em 07/01/2023
                    </Text>
                </Flex>
                <Title level={2}>
                JAVASCRIPT COM FOCO NO BACK-END
                </Title>
                
                </Card>
            </Flex>
            <Flex style={{padding:20}}>
                <Card style={{maxWidth:300,padding:0}} cover={<Image preview={false} src="https://vagasremotas.net/wp-content/uploads/2024/04/image.png" style={{maxWidth:300,overflow:'clip'}} />}>
                <Flex>
                    <CheckCircleFilled/>
                    <Text style={{paddingLeft:5}}>
                    Concluído em 22/01/2024
                    </Text>
                </Flex>
                <Title level={2}>
                INICIANTE EM PROGRAMAÇÃO T6 - ONE
                </Title>
                
                </Card>
            </Flex>
            <Flex style={{padding:20}}>
                <Card style={{maxWidth:300,padding:0}} cover={<Image preview={false} src="https://onetclub.com.br/wp-content/uploads/2019/04/c-unicsul.jpg" style={{maxWidth:300,overflow:'clip'}} />}>
                <Flex>
                    <LoadingOutlined/>
                    <Text style={{paddingLeft:5}}>
                    Iniciado em 01/01/2024 - Espectativa 12/29
                    </Text>
                    
                </Flex>
                
                <Title level={2}>
                Ciencias Da Computação
                </Title>
                
                </Card>
            </Flex>
        </Flex>
    </Flex>
  )
}