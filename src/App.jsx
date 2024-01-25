import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './app.module.css';
import AppRoutesMap from './routes';

const App = () => {
    return (
        <PrimeReactProvider>
            <AppRoutesMap />
        </PrimeReactProvider>
    );
};

export default App;
