import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Routes
import IndexRoutes from './routes/index.routes'
import CategoriaRoutes from './routes/categoria.routes'
import DepartamentoRoutes from './routes/departamento.routes'
import MunicipioRoutes from './routes/municipio.routes'
import ProductoRoutes from './routes/producto.routes'
import SucursalRoutes from './routes/sucursal.routes'
import UbicacionRoutes from './routes/ubicacion.routes'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use('/categoria', CategoriaRoutes);
        this.app.use('/departamento', DepartamentoRoutes);
        this.app.use('/municipio', MunicipioRoutes);
        this.app.use('/producto', ProductoRoutes);
        this.app.use('/sucursal', SucursalRoutes);
        this.app.use('/ubicacion', UbicacionRoutes);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}