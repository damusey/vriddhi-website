import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { CaseStudies } from './pages/CaseStudies';
import { Ethos } from './pages/Ethos';
import { Contact } from './pages/Contact';
import { GettingStarted } from './pages/GettingStarted';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="case-studies" element={<CaseStudies />} />
                <Route path="ethos" element={<Ethos />} />
                <Route path="contact" element={<Contact />} />
                <Route path="getting-started" element={<GettingStarted />} />
            </Route>
        </Routes>
    );
}

export default App;
