import { Route, Routes } from 'react-router-dom';
import { FullWithLayout } from './hocs/layouts/FullWithLayout';
import Home from './pages/Home';
import { PhysicalSecurity } from './pages/PhysicalSecurity';
import { MerchandiseCustody } from './pages/MerchandiseCustody';
import { ElectronicSecurity } from './pages/ElectronicSecurity';
import { Investigations } from './pages/Investigations';
import { AdvisoryAndConsultancy } from './pages/AdvisoryAndConsultancy';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Latinsec } from './pages/Latinsec';

function App() {
  return (
    <Routes scrollRestoration="manual">
      <Route path="/" element={<FullWithLayout />}>
        <Route index element={<Home />} />
        <Route path="/seguridad-fisica" element={<PhysicalSecurity />} />
        <Route path="/custodia-de-mercaderia" element={<MerchandiseCustody />} />
        <Route path="/seguridad-electronica" element={<ElectronicSecurity />} />
        <Route path="/investigaciones" element={<Investigations />} />
        <Route path="/asesoramiento-y-consultoria" element={<AdvisoryAndConsultancy />} />
        <Route path="/latinsec" element={<Latinsec />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
