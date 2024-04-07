import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css';
import './main.css'
import 'animate.css';
import { ConfigProvider, theme } from 'antd'
import ptBR from 'antd/locale/pt_BR';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={{
    algorithm:[theme.darkAlgorithm, theme.compactAlgorithm],
  }} locale={ptBR}>
    <App />
  </ConfigProvider>
)
