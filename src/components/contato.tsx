import { Button, Flex, Form, FormInstance, Image, Input, Typography, message, theme } from "antd";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig"
import React, { useState } from "react";

interface SubmitButtonProps {
    form: FormInstance;
  }
  
  const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
    const [submittable, setSubmittable] = React.useState<boolean>(false);
  
    // Watch all values
    const values = Form.useWatch([], form);
  
    React.useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);
  
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        {children}
      </Button>
    );
  };

export default function Contato() {
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [assunto,setAssunto] = useState('')
    const [mensagem,setMensagem] = useState('')

    const [contato] = Form.useForm();
    const { TextArea } = Input;
    const {Title,Text} = Typography

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.success('Mensagem enviada');
    };

    const falha = () => {
        messageApi.error('ocorreu um Erro, tente novamente mais tarde')
    }

    const {
        token: { colorBgBlur },
      } = theme.useToken();

    const handleSubmit = async () => {
        console.log({
            name: nome,
            email:email,
            assunto:assunto,
            mensagem:mensagem
        })
        try {
            await setDoc(doc(db, "contatos",`${nome}, ${assunto}`), {
                name: nome,
                email:email,
                assunto:assunto,
                mensagem:mensagem

              }).then(() => success() )
        } catch (error) {
            falha()
        }
    }
  return (
    <>
    {contextHolder}
    <Flex style={{
        height:'100vh',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        
    }}>
                <Flex style={{backgroundColor:colorBgBlur,borderRadius:10}}>
                    <Image style={{borderRadius:'10px 0 0 10px'}} src="https://cdn.pixabay.com/photo/2017/06/19/04/21/payphone-2418127_640.jpg" preview={false} />
                    <Flex style={{flexDirection:'column'}}>
                        <Flex style={{maxWidth:300,flexDirection:'column',padding:20}}>
                            <Title>
                                Contato
                            </Title>
                            <Text>
                                Quer entrar em contato comigo? <br/>
                                Preencha o formulário ao lado e entrarei em contato o mais rápido possível.
                            </Text>
                        </Flex>
                        <Form
                        form={contato}
                        name="Contato"
                        style={{ maxWidth: 600,padding:20 }}
                        initialValues={{ remember: true }}
                        onFinish={() => handleSubmit()}
                        >
                            <Form.Item
                            hasFeedback
                            name="nome"
                            rules={[{ required: true }]}
                            >
                                <Input
                                onChange={(e) => setNome(e.target.value)}
                                value={nome}
                                placeholder="Nome"
                                />
                            </Form.Item>
                            <Form.Item
                            hasFeedback
                            name="email"
                            rules={[{ required: true,type:'email' }]}
                            >
                                <Input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="E-mail"
                                />
                                </Form.Item>
                            <Form.Item
                            hasFeedback
                            name="assunto"
                            rules={[{ required: true }]}
                            >
                                <Input
                                onChange={(e) => setAssunto(e.target.value)}
                                value={assunto}
                                placeholder="Assunto"
                                />
                            </Form.Item>
                            <Form.Item
                            hasFeedback
                            rules={[{ required: true }]}
                            name="mensagem">
                                <TextArea
                                placeholder="Mensagem"
                                onChange={(e) => setMensagem(e.target.value)}
                                value={mensagem}
                                style={{ height: 120, resize: 'none' }} />
                            </Form.Item>
                            <Form.Item>
                                <SubmitButton form={contato}>Submit</SubmitButton>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Flex>
    </Flex>
    </>
  )
}
