// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SearchCommand } from './components/search/index';
import { GardenThemeProvider } from './components/garden/GardenThemeProvider';

// Pages
import WelcomePage from './pages/Welcome/WelcomePage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import RamosPage from './pages/Ramos/RamosPage';
import RamoDetailPage from './pages/RamoDetail/RamoDetailPage';
import PDFViewerPage from './pages/PDFViewer/PDFViewerPage';
import BibliotecaPage from './pages/Biblioteca/BibliotecaPage';
import CalendarioPage from './pages/Calendario/CalendarioPage';
import ProgresoPage from './pages/Progreso/ProgresoPage';
import ConfiguracionPage from './pages/Configuracion/ConfiguracionPage';

// Simple Route Guard for Welcomed status
function RequireWelcome({ children }: { children: React.ReactElement }) {
  const welcomed = localStorage.getItem('dss-welcomed') === 'true';
  if (!welcomed) {
    return <Navigate to="/welcome" replace />;
  }
  return children;
}

export function App() {
  return (
    <GardenThemeProvider>
      <BrowserRouter>
      {/* Global Search Palette (Ctrl+K) */}
      <SearchCommand />

      <Routes>
        {/* Welcome Splash Screen */}
        <Route path="/welcome" element={<WelcomePage />} />

        {/* Guarded App Routes */}
        <Route
          path="/"
          element={
            <RequireWelcome>
              <DashboardPage />
            </RequireWelcome>
          }
        />
        <Route
          path="/ramos"
          element={
            <RequireWelcome>
              <RamosPage />
            </RequireWelcome>
          }
        />
        <Route
          path="/ramos/:slug"
          element={
            <RequireWelcome>
              <RamoDetailPage />
            </RequireWelcome>
          }
        />
        <Route
          path="/ramos/:slug/pdf/:pdfId"
          element={
            <RequireWelcome>
              <PDFViewerPage />
            </RequireWelcome>
          }
        />
        <Route
          path="/biblioteca"
          element={
            <RequireWelcome>
              <BibliotecaPage />
            </RequireWelcome>
          }
        />
        <Route
          path="/calendario"
          element={
            <RequireWelcome>
              <CalendarioPage />
            </RequireWelcome>
          }
        />
        <Route
          path="/progreso"
          element={
            <RequireWelcome>
              <ProgresoPage />
            </RequireWelcome>
          }
        />
        <Route
          path="/configuracion"
          element={
            <RequireWelcome>
              <ConfiguracionPage />
            </RequireWelcome>
          }
        />

        {/* Fallback redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </GardenThemeProvider>
  );
}

export default App;
