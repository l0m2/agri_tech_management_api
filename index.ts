import express from 'express';
import { AppDataSource } from './src/database/AppDataSource';
import EmpresasRoutes from './src/routes/EmpresasRoutes';
import CampanhasRoutes from './src/routes/CampanhasRoutes';
import TecnicosRoutes from './src/routes/TecnicosRoutes';
import ProdutoresRoutes from './src/routes/ProdutoresRoutes';
import { setupSwagger } from './src/swagger';


const app = express();
const PORT = 1700

app.use(express.json())
setupSwagger(app);

app.use('/api/empresas', EmpresasRoutes);
app.use('/api/campanhas', CampanhasRoutes);
app.use('/api/tecnicos', TecnicosRoutes);
app.use('/api/produtores', ProdutoresRoutes);

AppDataSource.initialize()
.then(() => {
       console.log('Conectado com BD');

      app.listen(PORT, () => {
        console.log('Servidor ligado');
      })
})


